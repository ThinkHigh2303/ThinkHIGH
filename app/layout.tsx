import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thinkhigh.in"),
  title: "ThinkHigh | Modern Edtech Career Programs",
  description:
    "Job-ready training for non-tech, HR, and sales roles with certifications, mock interviews, and placement assistance.",
  keywords: [
    "ThinkHigh",
    "edtech",
    "non-tech career training",
    "HR course",
    "sales BDA program",
    "customer support course",
    "placement assistance",
    "job ready training",
    "90 day program",
    "Microsoft certification prep",
  ],
  openGraph: {
    title: "ThinkHigh | Modern Edtech Career Programs",
    description:
      "Launch your career in non-tech, HR, and sales roles with 90-day job-ready training, certifications, and placement support.",
    url: "https://thinkhigh.in",
    siteName: "ThinkHigh",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph.jpeg",
        width: 1200,
        height: 630,
        alt: "ThinkHigh job-ready programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkHigh | Modern Edtech Career Programs",
    description:
      "90-day job-ready training for non-tech, HR, and sales careers with certifications and placement assistance.",
    images: ["/opengraph.jpeg"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
