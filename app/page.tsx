'use client';

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Check,
  CheckCircle2,
  Clock3,
  Facebook,
  GraduationCap,
  Headphones,
  Linkedin,
  Mail,
  Menu,
  Play,
  Quote,
  Star,
  Twitter,
  Users,
  Instagram,
  Phone,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const primaryButton =
  'inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:translate-y-[-1px] hover:shadow-xl hover:shadow-blue-500/25';

const outlineButton =
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/15';

type ProgramCard = {
  title: string;
  description: string;
  highlights: string[];
  badge: string;
  syllabus: {
    title: string;
    duration: string;
    topics: string[];
  }[];
  image: {
    src: string;
    alt: string;
  };
  pdf: string;
};

type Certificate = {
  title: string;
  issuer: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

const programs: ProgramCard[] = [
  {
    title: 'Non-Tech Career Program',
    description:
      'Launch your career in Customer Support, CRM Executive, Operations, and Technical Support roles with job-ready skills.',
    highlights: [
      '90 days | Beginner Friendly',
      'Master communication & corporate English',
      'Learn Excel & CRM tools',
      'Interview prep & mock calls',
    ],
    badge: 'Customer Success',
    syllabus: [
      {
        title: 'Week 1: Career Foundation & Corporate Mindset',
        duration: 'Week 1',
        topics: ['Foundations for professional communication and corporate readiness.'],
      },
      {
        title: 'Week 2: Communication Skills',
        duration: 'Week 2',
        topics: ['Effective verbal and written communication for workplace contexts.'],
      },
      {
        title: 'Week 3: Corporate English',
        duration: 'Week 3',
        topics: ['Business English usage for email, chat, and meetings.'],
      },
      {
        title: 'Week 4: Customer Handling Basics',
        duration: 'Week 4',
        topics: ['Managing customer interactions with empathy and clarity.'],
      },
      {
        title: 'Week 5: Customer Support Skills',
        duration: 'Week 5',
        topics: ['Support workflows, SLAs, and service excellence.'],
      },
      {
        title: 'Week 6: Technical Support Basics (Non-Coding)',
        duration: 'Week 6',
        topics: ['Troubleshooting frameworks without coding prerequisites.'],
      },
      {
        title: 'Week 7: CRM Tools',
        duration: 'Week 7',
        topics: ['Hands-on practice with CRM navigation and hygiene.'],
      },
      {
        title: 'Week 8: Excel for Office Work',
        duration: 'Week 8',
        topics: ['Spreadsheets for reporting, lookups, and day-to-day operations.'],
      },
      {
        title: 'Week 9: Operations & Back-Office Skills',
        duration: 'Week 9',
        topics: ['Operational workflows, documentation, and quality checks.'],
      },
      {
        title: 'Week 10: Workplace Skills',
        duration: 'Week 10',
        topics: ['Collaboration, time management, and stakeholder communication.'],
      },
      {
        title: 'Week 11: Interview Preparation',
        duration: 'Week 11',
        topics: ['Mock interviews and articulation for support/ops roles.'],
      },
      {
        title: 'Week 12: Job Readiness & Placement Support',
        duration: 'Week 12',
        topics: ['Portfolio, resume, and placement preparation activities.'],
      },
    ],
    image: {
      src: '/images/non-tech.jpeg',
      alt: 'Non-tech career program students collaborating',
    },
    pdf: '/pdf/Non_Tech_Career_Program.pdf',
  },
  {
    title: 'HR Career Program',
    description:
      'Comprehensive training for roles in HR operations, recruitment, and talent management with modern tooling.',
    highlights: [
      '90 days | Beginner Friendly',
      'HR fundamentals & best practices',
      'Recruitment & talent acquisition',
      'Employee lifecycle & compliance',
    ],
    badge: 'Human Resources',
    syllabus: [
      {
        title: 'Week 1: Introduction to HR',
        duration: 'Week 1',
        topics: ['Overview of HR domains and responsibilities.'],
      },
      {
        title: 'Week 2: HR Fundamentals',
        duration: 'Week 2',
        topics: ['Core HR concepts and organizational impact.'],
      },
      {
        title: 'Week 3: Recruitment Process',
        duration: 'Week 3',
        topics: ['Sourcing, screening, and selection workflows.'],
      },
      {
        title: 'Week 4: Talent Acquisition',
        duration: 'Week 4',
        topics: ['Employer branding, pipelines, and offer processes.'],
      },
      {
        title: 'Week 5: Interview Techniques',
        duration: 'Week 5',
        topics: ['Structured interviews, assessments, and feedback.'],
      },
      {
        title: 'Week 6: Employee Onboarding',
        duration: 'Week 6',
        topics: ['Onboarding journeys, documentation, and induction.'],
      },
      {
        title: 'Week 7: HR Operations',
        duration: 'Week 7',
        topics: ['Policies, HRIS usage, and operational hygiene.'],
      },
      {
        title: 'Week 8: Payroll Basics',
        duration: 'Week 8',
        topics: ['Payroll fundamentals and compliance considerations.'],
      },
      {
        title: 'Week 9: Employee Lifecycle Management',
        duration: 'Week 9',
        topics: ['Performance, engagement, and retention activities.'],
      },
      {
        title: 'Week 10: HR Policies & Compliance',
        duration: 'Week 10',
        topics: ['Policy frameworks, legal basics, and audits.'],
      },
      {
        title: 'Week 11: HR Tools & Reporting',
        duration: 'Week 11',
        topics: ['HR analytics, dashboards, and reporting.'],
      },
      {
        title: 'Week 12: HR Interview Preparation',
        duration: 'Week 12',
        topics: ['Mock HR interviews and placement readiness.'],
      },
    ],
    image: {
      src: '/images/hr.jpeg',
      alt: 'HR career program discussion',
    },
    pdf: '/pdf/HR_Career_Program.pdf',
  },
  {
    title: 'Sales Career Program - BDA',
    description:
      'Master sales fundamentals, lead generation, pitching, and closing deals for modern business development roles.',
    highlights: [
      '90 days | Beginner Friendly',
      'Sales fundamentals & BDA role mastery',
      'Lead generation & cold calling techniques',
      'CRM for sales & pipeline management',
    ],
    badge: 'Business Development',
    syllabus: [
      {
        title: 'Week 1: Introduction to Sales & BDA Role',
        duration: 'Week 1',
        topics: ['Role clarity, sales mindset, and pipelines overview.'],
      },
      {
        title: 'Week 2: Business Communication for Sales',
        duration: 'Week 2',
        topics: ['Sales communication and discovery questioning.'],
      },
      {
        title: 'Week 3: Product & Market Understanding',
        duration: 'Week 3',
        topics: ['ICP, personas, and market research.'],
      },
      {
        title: 'Week 4: Lead Generation (Inbound & Outbound)',
        duration: 'Week 4',
        topics: ['Prospecting channels and lead sourcing playbooks.'],
      },
      {
        title: 'Week 5: Cold Calling & Email Outreach',
        duration: 'Week 5',
        topics: ['Scripts, cadences, and outreach personalization.'],
      },
      {
        title: 'Week 6: Sales Pitching & Presentation Skills',
        duration: 'Week 6',
        topics: ['Pitch structure, demos, and storytelling.'],
      },
      {
        title: 'Week 7: CRM for Sales & Pipeline Management',
        duration: 'Week 7',
        topics: ['Pipeline hygiene, stages, and deal inspection.'],
      },
      {
        title: 'Week 8: Negotiation & Closing Techniques',
        duration: 'Week 8',
        topics: ['Negotiation basics and closing strategies.'],
      },
      {
        title: 'Week 9: Customer Relationship Management',
        duration: 'Week 9',
        topics: ['Account management and post-close engagement.'],
      },
      {
        title: 'Week 10: Sales Metrics, Targets & KPIs',
        duration: 'Week 10',
        topics: ['KPIs, forecasting, and performance tracking.'],
      },
      {
        title: 'Week 11: Sales Interview Preparation & Mock Calls',
        duration: 'Week 11',
        topics: ['Mock calls, objection handling, and interview drills.'],
      },
      {
        title: 'Week 12: Job Readiness & Real-Time Sales Scenarios',
        duration: 'Week 12',
        topics: ['Roleplays with real scenarios and job readiness.'],
      },
    ],
    image: {
      src: '/images/sales.jpeg',
      alt: 'Sales career program discussion',
    },
    pdf: '/pdf/Sales_Career_Program_BDA.pdf',
  },
];

const features = [
  {
    title: 'Certification Preparation',
    copy: 'Official certification prep for Microsoft Excel & in-demand tools.',
    icon: <BadgeCheck className="h-6 w-6" />,
  },
  {
    title: '90-Day Program',
    copy: 'Comprehensive curriculum with live sessions and practical work.',
    icon: <Clock3 className="h-6 w-6" />,
  },
  {
    title: 'Industry-Relevant',
    copy: 'Built with current market requirements and hiring feedback.',
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: 'Small Batch Size',
    copy: 'Maximum 25 learners per batch for personalized attention.',
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Mock Interviews',
    copy: 'Real interview simulations with experienced professionals.',
    icon: <Headphones className="h-6 w-6" />,
  },
  {
    title: 'Job Assistance',
    copy: 'Dedicated placement support until you land the role.',
    icon: <Briefcase className="h-6 w-6" />,
  },
];

const stats = [
  { value: '90', label: 'Days Training' },
  { value: '₹2–5', label: 'LPA Salary Range' },
  { value: '500+', label: 'Students Trained' },
  { value: '85%', label: 'Placement Rate' },
];

const partners = [
  'Accenture',
  'Wipro',
  'TCS',
  'Infosys',
  'Tech Mahindra',
  'HCL',
  'Cognizant',
  'Amazon',
  'Flipkart',
  'Zomato',
  'Swiggy',
  'Myntra',
  'Paytm',
  'PhonePe',
  "BYJU'S",
];

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Customer Support Executive',
    company: 'Tech Solutions Pvt Ltd',
    quote:
      'ThinkHigh transformed my career. The practical training and mock interviews gave me the confidence to ace my interviews. I got placed in just 3 months.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'HR Executive',
    company: 'Global HR Services',
    quote:
      'The HR program is comprehensive and industry-focused. Trainers bring real-world insights, and the placement support kept me on track.',
    rating: 5,
  },
  {
    name: 'Anjali Patel',
    role: 'Operations Executive',
    company: 'Logistics Corp',
    quote:
      'As a fresher I was worried about breaking in. ThinkHigh’s placement and mentorship were excellent. I landed a role with a ₹3.5 LPA package.',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'Who can enroll in these programs?',
    a: 'College students, recent graduates, and career switchers who want to enter non-tech, HR, or sales roles. No prior tech experience needed.',
  },
  {
    q: 'What is the duration of the program?',
    a: 'Each track is designed as a 90-day, job-ready curriculum with live sessions, assignments, and interview preparation.',
  },
  {
    q: 'Will I get placement assistance?',
    a: 'Yes. You receive resume reviews, mock interviews, curated job leads, and dedicated support until you secure a role.',
  },
  {
    q: 'Is this course conducted online or offline?',
    a: 'Live online sessions with hands-on projects, supported by recorded replays and mentor hours.',
  },
  {
    q: 'Do I need any prior experience?',
    a: 'No prior experience is required. The program starts with foundations and moves quickly into applied, job-focused skills.',
  },
];

const certificates: Certificate[] = [
  {
    title: 'Microsoft Office Specialist – Excel Associate',
    issuer: 'Microsoft',
    description: 'Official Microsoft Excel Associate credential to validate spreadsheet fluency.',
    image: {
      src: '/images/microsoft-certificate.jpeg',
      alt: 'Microsoft Office Specialist Excel Associate certificate',
    },
  },
  {
    title: 'HubSpot CRM & Customer Success',
    issuer: 'HubSpot',
    description: 'HubSpot-aligned customer success and CRM enablement certificate.',
    image: {
      src: '/images/hubspot_certificate.jpeg',
      alt: 'HubSpot customer success and CRM certificate',
    },
  },
  {
    title: 'ThinkHigh Course Completion',
    issuer: 'ThinkHigh',
    description: 'ThinkHigh course completion certificate for job-ready graduates.',
    image: {
      src: '/images/course_completion.jpeg',
      alt: 'ThinkHigh course completion certificate',
    },
  },
];

function RatingStars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-indigo-500">
      {Array.from({ length: count }).map((_, idx) => (
        <Star key={idx} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Home() {
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [syllabusOpen, setSyllabusOpen] = useState(false);
  const [selectedProgramIndex, setSelectedProgramIndex] = useState(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryIntent, setEnquiryIntent] = useState<'enquire' | 'brochure'>('enquire');
  const [enquiryCourse, setEnquiryCourse] = useState<string>('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    course: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  );
  const [formError, setFormError] = useState<string | null>(null);

  const currentCertificate = useMemo(
    () => certificates[activeCertificate],
    [activeCertificate],
  );
  const selectedProgram = useMemo(
    () => programs[selectedProgramIndex],
    [selectedProgramIndex],
  );
  const navLinks = [
    { label: 'Microsoft Certified Programme', href: '#programs' },
    { label: 'Syllabus', href: '#syllabus' },
    { label: 'Success Stories', href: '#stories' },
    { label: 'FAQs', href: '#faq' },
    { label: 'About Us', href: '/about' },
  ];

  const changeCertificate = (direction: 'prev' | 'next') => {
    setActiveCertificate((prev) => {
      const nextIndex =
        direction === 'next'
          ? (prev + 1) % certificates.length
          : (prev - 1 + certificates.length) % certificates.length;
      return nextIndex;
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      setActiveCertificate((prev) => (prev + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const openSyllabus = (index: number) => {
    setSelectedProgramIndex(index);
    setSyllabusOpen(true);
  };

  const openEnquiry = (intent: 'enquire' | 'brochure', course?: string) => {
    setEnquiryIntent(intent);
    setEnquiryCourse(course ?? '');
    setFormState((prev) => ({
      ...prev,
      course: course ?? '',
    }));
    setFormStatus('idle');
    setFormError(null);
    setEnquiryOpen(true);
  };

  const submitEnquiry = async () => {
    setFormStatus('submitting');
    setFormError(null);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          course: formState.course || enquiryCourse,
          intent: enquiryIntent,
        }),
      });
      if (!res.ok) {
        throw new Error('Unable to submit. Please try again.');
      }
      setFormStatus('success');
      setSuccessMessage('Thanks! We received your details and will reach out shortly.');
      setEnquiryOpen(false);
      setTimeout(() => setSuccessMessage(null), 4000);
      setFormState({
        name: '',
        email: '',
        phone: '',
        education: '',
        course: '',
        message: '',
      });
    } catch (err) {
      setFormStatus('error');
      setFormError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#eef2ff,transparent_35%),radial-gradient(circle_at_top_right,#e0f2ff,transparent_40%),#ffffff] text-slate-900">
      <div className="mx-auto max-w-screen-xl px-4 pb-20 pt-6 sm:px-6 lg:px-10">
        <header className="flex items-center justify-between gap-4 rounded-full border border-slate-200 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ThinkHigh logo"
              width={190}
              height={98}
              className="h-10 w-auto"
              priority
            />
            <div>
              <p className="text-lg font-semibold text-slate-900">ThinkHigh</p>
              <p className="text-xs text-slate-500">Modern Edtech Careers</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} className="hover:text-slate-900" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => openEnquiry('enquire')}
              className={`${primaryButton} hidden md:inline-flex`}
            >
              Enquire Now <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMobileNavOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </header>

        <main className="mt-10 space-y-16 sm:space-y-20">
          {/* Hero */}
          <section
            id="hero"
            className="grid gap-8 rounded-3xl bg-gradient-brand p-6 pb-16 sm:p-10 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24"
          >
            <div className="relative flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                Launch your career in 90 days
              </span>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-white/90">
                  Build a successful career in Non-Tech & HR roles
                </p>
                <h1 className="text-3xl  font-bold leading-tight sm:text-4xl lg:text-5xl text-white">
                  Job-ready training for students and freshers.
                </h1>
                <p className="max-w-2xl text-lg text-white/80">
                  No coding required. Get placed in Customer Support, CRM, Operations, and HR
                  roles with salaries of ₹3.5-7 LPA.
                </p>
              </div>
              <div className="grid gap-3 text-base text-white/90 sm:grid-cols-2">
                {[
                  '90-day practical training program',
                  'Interview-focused curriculum',
                  'Dedicated placement support',
                  'Real-world project experience',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-white" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start gap-3 sm:flex-row">
                <button onClick={() => openEnquiry('enquire')} className={primaryButton}>
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </button>
                <button className={outlineButton}>
                  <Play className="h-4 w-4" />
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl">
                <Image
                  src="/images/header.jpeg"
                  alt="Graduates walking through a university corridor"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.35),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.4),transparent_45%)] mix-blend-soft-light" />
              </div>
              <div className="absolute bottom-37 left-1/2 mx-auto w-full max-w-xs rounded-2xl border border-white/30 bg-white text-left text-slate-800 shadow-2xl sm:max-w-sm">
                <div className="flex items-center gap-3 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-lg font-semibold text-white">
                    90
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Days Program</p>
                    <p className="text-sm text-slate-500">Job-ready training</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="grid gap-6 rounded-3xl bg-slate-50 p-6 text-slate-900 shadow-lg ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center"
              >
                <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </section>

          {/* Why choose */}
          <section
            id="syllabus"
            className="rounded-3xl bg-white text-slate-900 shadow-2xl shadow-indigo-500/10"
          >
            <div className="space-y-2 px-6 py-10 text-center sm:px-10">
              <p className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-600">
                Why Choose ThinkHigh
              </p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Built to make you job-ready with the right skills and support
              </h2>
            </div>
            <div className="grid gap-4 px-6 pb-10 sm:grid-cols-2 lg:grid-cols-3 sm:px-10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    {feature.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-slate-900">{feature.title}</p>
                    <p className="text-sm text-slate-600">{feature.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Programs */}
          <section id="programs" className="space-y-10 rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-indigo-500/10 sm:p-10">
            <div className="space-y-2 text-center">
              <p className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-600">
                Our Programs
              </p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Choose your career path
              </h2>
              <p className="text-slate-600">
                Industry-focused programs designed to make you job-ready in 90 days.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {programs.map((program, idx) => (
                <article
                  key={program.title}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-56 bg-slate-100">
                    <Image
                      src={program.image.src}
                      alt={program.image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      priority={idx === 0}
                    />
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-800">
                      <GraduationCap className="h-4 w-4" />
                      {program.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {program.title}
                      </h3>
                      <p className="text-sm text-slate-600">{program.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-indigo-600">
                      <Clock3 className="h-4 w-4" /> 90 Days
                      <BadgeCheck className="h-4 w-4" />
                      Beginner Friendly
                    </div>
                    <div className="space-y-2 text-sm text-slate-700">
                      {program.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 text-indigo-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3">
                      <button
                        onClick={() => openSyllabus(idx)}
                        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                      >
                        <BookOpen className="h-4 w-4" />
                        View Syllabus
                      </button>
                      <a
                        href={program.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-indigo-200 hover:text-indigo-700"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-indigo-500/10 sm:p-10">
            <div className="space-y-2 text-center">
              <p className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-600">
                Certificates
              </p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Industry-recognized certifications that add value to your resume
              </h2>
            </div>
            <div className="mt-8 flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
              <button
                onClick={() => changeCertificate('prev')}
                className="hidden h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600 lg:flex"
                aria-label="Previous certificate"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="w-full flex-1 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/60 shadow-inner">
                <div className="relative h-[360px] w-full overflow-hidden rounded-t-3xl bg-white sm:h-[420px]">
                  <Image
                    src={currentCertificate.image.src}
                    alt={currentCertificate.image.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    priority
                  />
                </div>
                <div className="border-t border-slate-200 bg-white px-6 py-4 text-center">
                  <p className="text-lg font-semibold text-slate-900">{currentCertificate.title}</p>
                  <p className="text-sm text-slate-600">{currentCertificate.description}</p>
                  <p className="mt-2 text-sm font-medium text-indigo-600">
                    Issued by {currentCertificate.issuer}
                  </p>
                </div>
              </div>
              <button
                onClick={() => changeCertificate('next')}
                className="hidden h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600 lg:flex"
                aria-label="Next certificate"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </section>

          {/* Career opportunities */}
          <section className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-indigo-500/10 sm:p-10">
            <div className="space-y-2 text-center">
              <p className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-600">
                Career Opportunities
              </p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Launch your career in high-demand roles with competitive salaries
              </h2>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: 'Non-Tech Roles',
                  color: 'from-fuchsia-500 to-purple-600',
                  items: [
                    'Customer Support Executive',
                    'Operations Executive',
                    'Technical Support (Non-coding)',
                  ],
                },
                {
                  title: 'HR Jobs',
                  color: 'from-blue-500 to-indigo-600',
                  items: ['HR Executive', 'HR Recruiter', 'HR Operations Executive'],
                },
                {
                  title: 'Sales / BDA Jobs',
                  color: 'from-indigo-500 to-blue-500',
                  items: [
                    'Business Development Associate',
                    'Inside Sales Executive',
                    'Sales Coordinator',
                  ],
                },
              ].map((role) => (
                <div
                  key={role.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${role.color} text-white shadow-md`}
                  >
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-slate-900">{role.title}</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {role.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Salary CTA */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-brand px-6 py-10 text-center sm:px-12 sm:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_35%),radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.12),transparent_35%)]" />
            <div className="relative space-y-4">
              <p className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                Expected Salary Range <ArrowUpRight className="h-4 w-4" />
              </p>
              <h2 className="text-4xl font-bold sm:text-5xl">₹3.5 – 7 LPA</h2>
              <p className="text-lg text-white/85">
                Start your professional journey with competitive packages
              </p>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:translate-y-[-1px]">
                Explore Programs <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>

          {/* Hiring partners */}
          <section className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-indigo-500/10 sm:p-10">
            <div className="space-y-2 text-center">
              <p className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-600">
                Hiring Partners
              </p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Companies hiring our graduates
              </h2>
              <p className="text-slate-600">
                Our students get placed in leading companies across industries.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="flex h-16 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800 shadow-sm transition hover:border-indigo-200 hover:text-indigo-700"
                >
                  {partner}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm font-medium text-slate-600">
              And many more companies actively hiring our graduates
            </p>
          </section>

          {/* Success stories */}
          <section
            id="stories"
            className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-indigo-500/10 sm:p-10"
          >
            <div className="space-y-2 text-center">
              <p className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-600">
                Success Stories
              </p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Hear from our alumni
              </h2>
              <p className="text-slate-600">
                Real stories from students who transformed their careers with ThinkHigh.
              </p>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <Quote className="h-6 w-6 text-indigo-500" />
                    <RatingStars count={item.rating} />
                  </div>
                  <p className="text-sm text-slate-700">{`"${item.quote}"`}</p>
                  <div className="space-y-0.5">
                    <p className="text-base font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">{item.role}</p>
                    <p className="text-sm font-semibold text-indigo-600">{item.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section
            id="faq"
            className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-indigo-500/10 sm:p-10"
          >
            <div className="space-y-2 text-center">
              <p className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-600">
                FAQs
              </p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Everything you need to know
              </h2>
              <p className="text-slate-600">
                Get quick answers about programs, placement, and how we support you.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {faqs.map((faq, idx) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-white transition hover:border-indigo-200 open:shadow-lg"
                  open={idx === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-slate-900">
                    {faq.q}
                    <span className="text-indigo-500 transition group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-700">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>
        </main>

        {mobileNavOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileNavOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="ThinkHigh logo"
                      width={140}
                      height={56}
                      className="h-8 w-auto"
                    />
                    <p className="text-base font-semibold text-slate-900">Menu</p>
                  </div>
                  <button
                    onClick={() => setMobileNavOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <nav className="flex-1 overflow-y-auto px-4 py-6">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileNavOpen(false)}
                        className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </nav>
                <div className="border-t border-slate-200 p-6 space-y-3">
                  <button
                    onClick={() => {
                      setMobileNavOpen(false);
                      openEnquiry('enquire');
                    }}
                    className="w-full rounded-full bg-gradient-brand px-5 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:translate-y-[-1px] hover:shadow-xl hover:shadow-blue-500/25"
                  >
                    Enquire Now <ArrowUpRight className="ml-2 inline h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      setMobileNavOpen(false);
                      openEnquiry('brochure');
                    }}
                    className="w-full rounded-full border border-slate-300 px-5 py-3 text-base font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {syllabusOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSyllabusOpen(false)}
            />
            <div className="relative z-10 flex h-full max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl">
              <div className="flex items-start gap-4 border-b border-slate-200 bg-gradient-to-r from-indigo-50 via-white to-white px-6 py-5 sm:px-8">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-indigo-600">Syllabus</p>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedProgram.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Detailed 90-day plan with live sessions, hands-on labs, and interview prep.
                  </p>
                </div>
                <button
                  onClick={() => setSyllabusOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:text-indigo-700"
                  aria-label="Close syllabus"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
                <div className="space-y-4">
                  {selectedProgram.syllabus.map((block) => (
                    <div
                      key={block.title}
                      className="rounded-2xl border border-slate-200 bg-white shadow-sm"
                    >
                      <div className="flex flex-col justify-between gap-2 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center">
                        <div>
                          <p className="text-base font-semibold text-slate-900">{block.title}</p>
                          <p className="text-sm text-slate-600">{block.duration}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                          <Clock3 className="h-4 w-4" />
                          {block.duration}
                        </span>
                      </div>
                      <div className="grid gap-3 px-5 py-4 sm:grid-cols-2">
                        {block.topics.map((topic) => (
                          <div key={topic} className="flex items-start gap-2 text-sm text-slate-700">
                            <Check className="mt-0.5 h-4 w-4 text-indigo-500" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                <div className="flex flex-col gap-3 border-t border-slate-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <div className="text-sm text-slate-700">
                  Download the full syllabus PDF or speak with admissions for batch availability.
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={selectedProgram.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    <BookOpen className="h-4 w-4" />
                    Download PDF
                  </a>
                  <button
                    onClick={() => setSyllabusOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-indigo-200 hover:text-indigo-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {enquiryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setEnquiryOpen(false)}
            />
            <div className="relative z-10 flex w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 bg-gradient-to-r from-indigo-50 via-white to-white px-6 py-4 sm:px-8">
                <div>
                  <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                    {enquiryIntent === 'brochure' ? 'Request Brochure' : 'Enquire Now'}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900">
                    {enquiryIntent === 'brochure'
                      ? 'Get the detailed syllabus PDF'
                      : 'Tell us about your goals'}
                  </h3>
                  <p className="text-sm text-slate-600">
                    Share your details so we can guide you to the right track and send the syllabus.
                  </p>
                </div>
                <button
                  onClick={() => setEnquiryOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:text-indigo-700"
                  aria-label="Close enquiry form"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="max-h-[70vh] overflow-y-auto px-6 py-5 sm:px-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                      Full name
                      <input
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Priya Sharma"
                      className="h-11 rounded-xl border border-slate-200 px-3 text-sm text-slate-900 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                    Email
                    <input
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@example.com"
                      type="email"
                      className="h-11 rounded-xl border border-slate-200 px-3 text-sm text-slate-900 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                    Phone
                    <input
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="h-11 rounded-xl border border-slate-200 px-3 text-sm text-slate-900 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                    Highest education
                    <input
                      value={formState.education}
                      onChange={(e) => setFormState({ ...formState, education: e.target.value })}
                      placeholder="B.Com, 2024"
                      className="h-11 rounded-xl border border-slate-200 px-3 text-sm text-slate-900 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                    Course of interest
                    <select
                      value={formState.course || enquiryCourse}
                      onChange={(e) => setFormState({ ...formState, course: e.target.value })}
                      className="h-11 rounded-xl border border-slate-200 px-3 text-sm text-slate-900 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                    >
                      <option value="">Select a course</option>
                      {programs.map((p) => (
                        <option key={p.title} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="sm:col-span-2 flex flex-col gap-2 text-sm font-medium text-slate-800">
                    How can we help?
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share your questions, preferred batch time, or placement goals."
                      className="min-h-[110px] rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
                    />
                  </label>
                </div>
                {formError && (
                  <p className="mt-3 text-sm font-semibold text-red-500">
                    {formError}
                  </p>
                )}
                {formStatus === 'success' && (
                  <p className="mt-3 text-sm font-semibold text-green-600">
                    Thanks! We received your details and will share the syllabus link shortly.
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 border-t border-slate-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <div className="text-xs text-slate-600">
                  We keep your data private. Expect a call/WhatsApp within 24 hours.
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={submitEnquiry}
                    disabled={formStatus === 'submitting'}
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
                  >
                    {formStatus === 'submitting' ? 'Submitting…' : 'Submit'}
                  </button>
                  <button
                    onClick={() => setEnquiryOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-indigo-200 hover:text-indigo-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {successMessage && (
          <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-2xl border border-green-100 bg-white px-4 py-3 text-sm font-semibold text-green-700 shadow-xl shadow-green-500/10">
            {successMessage}
          </div>
        )}

        {/* Structured data */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ThinkHigh',
              url: 'https://thinkhigh.in',
              logo: 'https://thinkhigh.in/logo.png',
              sameAs: [
                'https://www.linkedin.com',
                'https://twitter.com',
                'https://facebook.com',
                'https://instagram.com',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-8699957675',
                contactType: 'customer support',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi'],
              },
              description:
                '90-day job-ready training for non-tech, HR, and sales roles with certifications and placement support.',
              offers: programs.map((program) => ({
                '@type': 'EducationalOccupationalProgram',
                name: program.title,
                description: program.description,
                timeToComplete: 'P90D',
                provider: {
                  '@type': 'Organization',
                  name: 'ThinkHigh',
                  url: 'https://thinkhigh.in',
                },
              })),
            }),
          }}
        />

        {/* Footer */}
        <footer className="mt-16 rounded-3xl bg-surface-card px-6 py-10 text-slate-100 shadow-2xl shadow-indigo-500/10 ring-1 ring-white/5 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="ThinkHigh logo"
                  width={140}
                  height={56}
                  className="h-10 w-auto"
                  priority
                />
                <div>
                  <p className="text-lg font-semibold text-white">ThinkHigh</p>
                  <p className="text-xs text-white/60">Modern Edtech Careers</p>
                </div>
              </div>
              <p className="text-sm text-white/70">
                Empowering students to build successful careers in non-tech and HR roles
                through practical, job-ready training.
              </p>
              <div className="flex gap-3">
                {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-white/30 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-white">Quick Links</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a className="hover:text-white" href="#hero">
                    Enquire Now
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#programs">
                    Courses
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#syllabus">
                    Syllabus
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#faq">
                    Refund & Cancellation Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/about">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-white">Programs</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a className="hover:text-white" href="#programs">
                    Non-Tech Career Program
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#programs">
                    HR Career Program
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#programs">
                    Corporate Training
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#stories">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-white">Contact Us</p>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="h-4 w-4 text-indigo-400" />
                <span>Call us at 8699957675</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="h-4 w-4 text-indigo-400" />
                <span>contact@thinkhigh.in</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 ThinkHigh. All rights reserved.</p>
            <div className="flex gap-4">
              <a className="hover:text-white" href="/privacy-policy">
                Privacy Policy
              </a>
              <span>Terms & Conditions</span>
              <span>Refund Policy</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
