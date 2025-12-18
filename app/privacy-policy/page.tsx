import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ThinkHigh",
  description:
    "Privacy policy for Think HIGH EdTech Pvt. Ltd. covering data collection, use, sharing, security, cookies, and user rights.",
  alternates: { canonical: "https://thinkhigh.in/privacy-policy" },
};

const sections = [
  {
    heading: "Information Collection",
    body:
      "We collect personal and non-personal data including name, email, phone number, education details, and usage data.",
  },
  {
    heading: "Use of Information",
    body:
      "Information is used to provide services, process payments, issue certifications, communicate updates, and improve learning experience.",
  },
  {
    heading: "Data Sharing",
    body:
      "We do not sell user data. Data may be shared with trusted partners and legal authorities when required.",
  },
  {
    heading: "Security",
    body: "Industry-standard security measures are implemented, but no system is completely secure.",
  },
  {
    heading: "Cookies",
    body: "Cookies are used to enhance user experience and analytics.",
  },
  {
    heading: "User Rights",
    body: "Users may request access, correction, or deletion of their data.",
  },
  {
    heading: "Contact",
    body: "Email: support@thinkhigh.in",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#eef2ff,transparent_35%),radial-gradient(circle_at_top_right,#e0f2ff,transparent_40%),#ffffff] text-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-indigo-500/10 ring-1 ring-slate-100">
          <p className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-600">
            Privacy Policy
          </p>
          <h1 className="mt-4 bg-gradient-brand bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl">
            Think HIGH EdTech Pvt. Ltd.
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            This Privacy Policy describes how Think HIGH EdTech Pvt. Ltd. collects, uses, and
            protects user information.
          </p>
          <div className="mt-8 space-y-6">
            {sections.map((section) => (
              <div key={section.heading} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="text-base font-semibold text-slate-900">{section.heading}</h2>
                <p className="mt-2 text-sm text-slate-700">{section.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-5 text-sm text-slate-600 shadow-lg shadow-indigo-500/10 ring-1 ring-slate-100">
          <p>
            For any questions regarding this policy or your data rights, contact{" "}
            <span className="font-semibold text-indigo-700">support@thinkhigh.in</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
