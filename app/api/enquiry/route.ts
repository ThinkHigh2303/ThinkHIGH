import { NextResponse } from "next/server";
import { google } from "googleapis";

type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  education: string;
  course: string;
  message: string;
  intent?: "enquire" | "brochure";
};

function isValid(payload: EnquiryPayload) {
  return payload.name && payload.email && payload.phone && payload.course;
}

async function appendToGoogleSheet(data: EnquiryPayload) {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.SHEET_ID;

  if (!clientEmail || !privateKey || !sheetId) {
    throw new Error("Missing Google Sheets configuration");
  }

  // Parse the private key (handle escaped newlines and various formats)
  let parsedPrivateKey = privateKey;
  
  // Remove surrounding quotes if present (common in .env files)
  parsedPrivateKey = parsedPrivateKey.replace(/^["']|["']$/g, "");
  
  // Handle escaped newlines (common when key is stored as a string in env vars)
  // Try multiple patterns to handle different storage formats
  if (parsedPrivateKey.includes("\\n")) {
    parsedPrivateKey = parsedPrivateKey.replace(/\\n/g, "\n");
  }
  
  // If the key doesn't have newlines but should, try to reconstruct it
  // This handles cases where newlines were lost during copy/paste
  if (!parsedPrivateKey.includes("\n") && parsedPrivateKey.includes("BEGIN PRIVATE KEY")) {
    // Try to add newlines before BEGIN and after END
    parsedPrivateKey = parsedPrivateKey.replace(/-----BEGIN PRIVATE KEY-----/, "-----BEGIN PRIVATE KEY-----\n");
    parsedPrivateKey = parsedPrivateKey.replace(/-----END PRIVATE KEY-----/, "\n-----END PRIVATE KEY-----");
  }
  
  // Ensure the key has proper BEGIN/END markers
  if (!parsedPrivateKey.includes("BEGIN") || !parsedPrivateKey.includes("END")) {
    throw new Error("Invalid private key format: missing BEGIN/END markers. Ensure your GOOGLE_PRIVATE_KEY env var contains the full private key.");
  }
  
  // Trim whitespace but preserve internal structure
  parsedPrivateKey = parsedPrivateKey.trim();

  // Use JWT auth which works well with service accounts
  const auth = new google.auth.JWT({
    email: clientEmail,
    key: parsedPrivateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Prepare row data
  // Column order: Timestamp | Intent | Name | Email | Phone | Education | Course | Message
  const timestamp = new Date().toISOString();
  const row = [
    timestamp,
    data.intent ?? "enquire",
    data.name,
    data.email,
    data.phone,
    data.education,
    data.course,
    data.message || "",
  ];

  // Append to sheet
  // Note: Make sure your Google Sheet has headers in row 1:
  // Timestamp | Intent | Name | Email | Phone | Education | Course | Message
  // If your sheet tab has a different name, change "Sheet1" below
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1!A:H", // Change "Sheet1" if your tab has a different name
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [row],
    },
  });

  return response;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as EnquiryPayload;

    if (!isValid(body)) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    // Try Google Sheets first
    try {
      await appendToGoogleSheet(body);
    } catch (sheetsError) {
      console.error("Google Sheets append failed:", sheetsError);
      
      // Log more details for debugging (but don't expose sensitive data)
      if (sheetsError instanceof Error) {
        console.error("Error message:", sheetsError.message);
      }

      // Fallback to webhook if configured
      const webhook = process.env.SHEETS_WEBHOOK_URL;
      if (webhook) {
        const payload = {
          timestamp: new Date().toISOString(),
          intent: body.intent ?? "enquire",
          ...body,
        };

        const res = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          throw new Error("Both Google Sheets and webhook failed");
        }
      } else {
        // If no webhook fallback, throw the original error
        throw sheetsError;
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Enquiry submission failed", err);
    const errorMessage =
      err instanceof Error ? err.message : "Unable to process enquiry";
    return NextResponse.json(
      { ok: false, error: errorMessage },
      { status: 500 },
    );
  }
}
