import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ThinkHigh | 90-Day Job-Ready Edtech Programs",
  description:
    "Learn how ThinkHigh helps students and career switchers land non-tech, HR, and sales roles through 90-day job-ready programs, certifications, and placement support.",
  keywords: [
    "About ThinkHigh",
    "edtech India",
    "job ready training",
    "non tech career",
    "HR course",
    "sales BDA training",
    "placement assistance",
    "career switch program",
    "Microsoft certification prep",
  ],
  alternates: {
    canonical: "https://thinkhigh.in/about",
  },
  openGraph: {
    title: "About ThinkHigh | 90-Day Job-Ready Edtech Programs",
    description:
      "Discover ThinkHigh’s mission, methodology, and placement-first approach for non-tech, HR, and sales careers.",
    url: "https://thinkhigh.in/about",
    type: "website",
    images: [
      {
        url: "/opengraph.jpeg",
        width: 1200,
        height: 630,
        alt: "ThinkHigh job-ready programs overview",
      },
    ],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About ThinkHigh",
  url: "https://thinkhigh.in/about",
  description:
    "ThinkHigh delivers 90-day job-ready training for non-tech, HR, and sales roles with certifications and placement support.",
  mainEntity: {
    "@type": "Organization",
    name: "ThinkHigh",
    url: "https://thinkhigh.in",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+91-8699957675",
      email: "contact@thinkhigh.in",
      areaServed: "IN",
    },
    sameAs: [
      "https://www.linkedin.com",
      "https://twitter.com",
      "https://facebook.com",
      "https://instagram.com",
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#1c1f33,transparent_30%),radial-gradient(circle_at_top_right,#1a2140,transparent_35%),#0c0c16] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-gradient-brand p-8 shadow-2xl sm:p-12">
          <p className="inline-flex items-center justify-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
            About ThinkHigh
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            We make you job-ready in 90 days for non-tech, HR, and sales roles.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/85">
            ThinkHigh blends industry-backed curriculum, live mentorship, and placement support so
            you can land your first role—or pivot your career—without prior tech experience.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Programs", value: "3 tracks" },
              { label: "Placement Support", value: "End-to-end" },
              { label: "Duration", value: "90 days" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white"
              >
                <p className="text-white/70">{item.label}</p>
                <p className="text-lg text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-indigo-500/10">
            <h2 className="text-xl font-semibold text-slate-900">
              Our mission
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              To unlock high-impact careers for students and career switchers by providing
              practical, placement-first training in non-tech, HR, and sales roles.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Job-ready in 90 days with live mentor support",
                "Industry-aligned curriculum with Microsoft prep",
                "Small batches, hands-on projects, and mock interviews",
                "Career services: resumes, interviews, referrals, salary prep",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/20">
            <h3 className="text-lg font-semibold text-white">
              What we do
            </h3>
            <p className="mt-3 text-sm text-white/75">
              We focus on roles with strong demand and clear hiring funnels—Customer Success,
              Operations, HR, and Business Development. Each track mixes live instruction, tool
              labs, assignments, and mock interviews to build confidence and proof of work.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Live + Labs", detail: "Weekly live sessions and guided tool labs." },
                { title: "Certification", detail: "Microsoft Excel prep and domain badges." },
                { title: "Projects", detail: "Portfolio-ready case studies and artifacts." },
                { title: "Placement", detail: "Job leads, mock panels, and referrals." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-white/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-indigo-500/10">
          <h2 className="text-xl font-semibold text-slate-900">
            How we ensure outcomes
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Placement-first design",
                copy: "Interview sprints, mock panels, and resume clinics baked into the curriculum.",
              },
              {
                title: "Tool fluency",
                copy: "Hands-on with CRM, HRIS, and productivity suites so you can ship from day one.",
              },
              {
                title: "Career mentorship",
                copy: "Weekly mentor hours and feedback loops to unblock you quickly.",
              },
              {
                title: "Certification prep",
                copy: "Structured prep for Microsoft Excel and domain certifications.",
              },
              {
                title: "Portfolio artifacts",
                copy: "Case studies, playbooks, and demo reels to showcase your skills.",
              },
              {
                title: "Employer network",
                copy: "Introductions and curated leads for high-intent roles across industries.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm text-slate-700">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-indigo-500/10">
            <h2 className="text-xl font-semibold text-slate-900">
              Who we serve
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>• Final-year students and recent graduates entering non-tech careers</li>
              <li>• Career switchers moving into HR, operations, or business development</li>
              <li>• Early professionals seeking salary jumps with stronger tooling skills</li>
              <li>• Professionals aiming for Microsoft Excel or domain certifications</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 text-white shadow-lg shadow-indigo-500/20">
            <h3 className="text-lg font-semibold text-white">Ready to partner?</h3>
            <p className="mt-3 text-sm text-white/80">
              If you are an employer or mentor, we collaborate on capstone briefs, mock interviews,
              and hiring drives tailored to your open roles.
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/80">
              <p>📞 Call: +91 8699957675</p>
              <p>✉️ Email: contact@thinkhigh.in</p>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
              Let’s build job-ready talent together
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-indigo-500/10">
          <h2 className="bg-gradient-brand bg-clip-text text-xl font-semibold text-transparent">
            Contact
          </h2>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p>
              Email: <span className="font-semibold text-indigo-700">support@thinkhigh.in</span>
            </p>
            <p>
              Phone: <span className="font-semibold text-indigo-700">+91 8699957675</span>
            </p>
            <p className="text-slate-600">
              Reach out for admissions, partnerships, or press inquiries. We typically respond
              within one business day.
            </p>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
    </div>
  );
}
