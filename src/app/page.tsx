import type { CSSProperties } from "react";
import {
  BrainCircuit,
  Briefcase,
  Check,
  ClipboardCheck,
  Clock,
  Cloud,
  CodeXml,
  IndianRupee,
  Layers,
  PenTool,
  Target,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FeeCalculator } from "@/components/FeeCalculator";
import { Reveal } from "@/components/Reveal";
import {
  BriefIllustration,
  CandidateCard,
  FunnelIllustration,
  HeroShortlist,
  HireIllustration,
} from "@/components/illustrations";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const problems = [
  "A job post brings hundreds of applications. Few are relevant.",
  "Your team spends hours screening instead of building.",
  "Good candidates take other offers while you're still sorting resumes.",
];

const steps = [
  {
    n: "01",
    title: "Share the role.",
    body: "Tell us what you need on a short call. Skills, level, budget, location.",
    art: BriefIllustration,
  },
  {
    n: "02",
    title: "Get a shortlist in 72 hours.",
    body: "We search, reach out and screen. You get only the people who fit.",
    art: FunnelIllustration,
  },
  {
    n: "03",
    title: "Interview and hire.",
    body: "You pick. We coordinate interviews and follow-ups until they join.",
    art: HireIllustration,
  },
];

const timeline = [
  { when: "Hour 0", title: "Role call", body: "We agree on must-haves, budget and timeline." },
  { when: "Day 1–2", title: "Search and outreach", body: "We find and contact people who match." },
  { when: "Day 2–3", title: "Screening calls", body: "We speak to each candidate before you do." },
  { when: "Hour 72", title: "Shortlist delivered", body: "Profiles with notes, ready to interview." },
];

const checks = [
  { icon: CodeXml, title: "Skills", body: "Checked against your must-haves, not just keywords." },
  { icon: Briefcase, title: "Experience", body: "Relevant work at the right level, not just years." },
  { icon: Target, title: "Intent", body: "Actively looking and genuinely interested in your role." },
  { icon: ClipboardCheck, title: "Practicals", body: "Notice period, current and expected CTC, location." },
];

const shortlistIncludes = [
  "A short profile summary",
  "Why they fit your role",
  "Current and expected CTC",
  "Notice period and location",
  "Resume and links",
];

const roles = [
  { icon: CodeXml, name: "Engineering" },
  { icon: Layers, name: "Product" },
  { icon: BrainCircuit, name: "Data & AI" },
  { icon: PenTool, name: "Design" },
  { icon: Cloud, name: "DevOps & Cloud" },
  { icon: TrendingUp, name: "Growth & Sales" },
];

const skills = [
  ["React", "Next.js", "Node.js", "Go", "Java", "Python", "Kafka", "AWS", "Kubernetes", "Terraform"],
  ["PyTorch", "LLMs", "SQL", "Figma", "Flutter", "Swift", "Kotlin", "Product strategy", "SEO", "B2B sales"],
];

const reasons = [
  { icon: UserCheck, title: "Screened by people.", body: "We speak to every candidate before you see them." },
  { icon: Clock, title: "72-hour shortlist.", body: "Your first candidates arrive within three days." },
  { icon: IndianRupee, title: "Pay on joining.", body: "No upfront fee. You pay only when your hire joins." },
];

const faqs = [
  { q: "How fast will I see candidates?", a: "Within 72 hours of our call about the role." },
  { q: "What do you need from us to start?", a: "A job description, or a short call about the role. Either works." },
  {
    q: "How is the fee calculated?",
    a: "12% of the candidate's fixed annual CTC. Variable pay, bonuses and ESOPs are not counted.",
  },
  { q: "When do I pay?", a: "After the candidate joins. Nothing is charged upfront." },
  {
    q: "Which roles do you hire for?",
    a: "Engineering, product, data and AI, design, DevOps and cloud, growth and sales.",
  },
  {
    q: "We're hiring for several roles. Can we work out different terms?",
    a: "Yes. Talk to us and we'll set terms that fit your hiring plan.",
  },
];

export default function Home() {
  return (
    <>
      <Reveal />
      <Nav />
      <main>
        <Hero />

        {/* Problem */}
        <section className="section bg-black text-white">
          <div className="container-page max-w-[860px]">
            <p data-reveal className="type-small font-semibold text-[#2997ff]">
              The problem
            </p>
            <h2 data-reveal className="type-section mt-3" style={d(100)}>
              Hiring takes too long.
              <br />
              <span className="text-[#86868b]">And most resumes don&apos;t fit.</span>
            </h2>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {problems.map((p, i) => (
                <p key={p} data-reveal className="border-t border-white/15 pt-5 text-[#a1a1a6]" style={d(200 + i * 120)}>
                  {p}
                </p>
              ))}
            </div>
            <p data-reveal className="type-title mt-16 max-w-[640px]" style={d(200)}>
              HireStern does the searching and screening, so you only meet people worth meeting.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="section bg-mist">
          <div className="container-page">
            <h2 data-reveal className="type-section text-center">
              How it works.
            </h2>
            <div className="mt-14 grid gap-3 md:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.n} data-reveal className="flex flex-col rounded-[28px] bg-[#ebebef] p-3" style={d(i * 120)}>
                  <div className="min-h-[170px]">
                    <s.art />
                  </div>
                  <div className="px-5 pb-6 pt-7">
                    <p className="type-small text-subtle">{s.n}</p>
                    <h3 className="type-title mt-2">{s.title}</h3>
                    <p className="mt-3 text-muted">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 72-hour timeline */}
        <section className="section">
          <div className="container-page">
            <p data-reveal className="type-small text-center font-semibold text-accent">
              Your first 72 hours
            </p>
            <h2 data-reveal className="type-section mt-3 text-center" style={d(100)}>
              From call to shortlist.
              <br />
              In three days.
            </h2>
            <div data-reveal className="relative mt-16" style={d(200)}>
              {/* Line: horizontal on desktop, vertical on mobile */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-line md:left-0 md:right-0 md:top-[7px] md:bottom-auto md:h-[2px] md:w-auto">
                <div className="fill-y h-full w-full bg-accent md:hidden" />
                <div className="fill-x hidden h-full w-full bg-accent md:block" />
              </div>
              <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
                {timeline.map((t) => (
                  <li key={t.when} className="flex gap-5 md:block">
                    <span className="mt-0.5 block size-4 shrink-0 rounded-full border-[3px] border-white bg-accent ring-1 ring-accent md:mt-0" />
                    <div className="md:mt-6">
                      <p className="type-small font-semibold text-accent">{t.when}</p>
                      <p className="mt-1 text-[19px] font-semibold">{t.title}</p>
                      <p className="mt-1 text-muted">{t.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Screening */}
        <section className="section bg-mist">
          <div className="container-page">
            <h2 data-reveal className="type-section text-center">
              Every candidate is checked
              <br />
              on four things.
            </h2>
            <div className="mt-14 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {checks.map(({ icon: Icon, title, body }, i) => (
                <div key={title} data-reveal className="rounded-[28px] bg-white p-7" style={d(i * 100)}>
                  <div className="flex size-11 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="size-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 text-[21px] font-semibold">{title}</h3>
                  <p className="mt-2 text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="section overflow-hidden">
          <div className="container-page grid items-center gap-16 md:grid-cols-2">
            <div>
              <p data-reveal className="type-small font-semibold text-accent">
                What you get
              </p>
              <h2 data-reveal className="type-section mt-3" style={d(100)}>
                A shortlist you can act on.
              </h2>
              <p data-reveal className="type-intro mt-5 text-muted" style={d(200)}>
                Not a pile of resumes. Every candidate comes with:
              </p>
              <ul className="mt-8 space-y-4">
                {shortlistIncludes.map((t, i) => (
                  <li key={t} data-reveal className="flex items-center gap-3 text-[19px]" style={d(250 + i * 80)}>
                    <span className="flex size-6 items-center justify-center rounded-full bg-accent">
                      <Check className="size-3.5 text-white" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={d(200)}>
              <CandidateCard />
            </div>
          </div>
        </section>

        {/* Roles */}
        <section id="roles" className="section bg-mist">
          <div className="container-page">
            <h2 data-reveal className="type-section text-center">
              Roles we hire for.
            </h2>
            <p data-reveal className="type-intro mx-auto mt-4 max-w-[640px] text-center text-muted" style={d(100)}>
              From first engineer to team lead.
            </p>
            <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
              {roles.map(({ icon: Icon, name }, i) => (
                <div
                  key={name}
                  data-reveal
                  className="group rounded-[28px] bg-white px-6 py-8 transition-transform duration-300 hover:-translate-y-1 md:px-8"
                  style={d(i * 80)}
                >
                  <Icon className="size-7 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  <p className="mt-6 text-[19px] font-semibold">{name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="marquee mt-12 space-y-3" aria-label="Example skills we hire for">
            {skills.map((row, r) => (
              <div key={r} className="overflow-hidden">
                <div className={`marquee-track ${r ? "reverse" : ""}`}>
                  {[...row, ...row].map((s, i) => (
                    <span
                      key={i}
                      aria-hidden={i >= row.length}
                      className="whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-[15px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why */}
        <section className="section">
          <div className="container-page">
            <h2 data-reveal className="type-section text-center">
              Why HireStern.
            </h2>
            <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
              {reasons.map(({ icon: Icon, title, body }, i) => (
                <div key={title} data-reveal className="text-center" style={d(i * 120)}>
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-mist">
                    <Icon className="size-7 text-ink" strokeWidth={1.5} />
                  </div>
                  <h3 className="type-title mt-6">{title}</h3>
                  <p className="mt-3 text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="section bg-mist">
          <div className="container-page">
            <h2 data-reveal className="type-section text-center">
              Simple pricing.
            </h2>
            <div
              data-reveal
              className="mx-auto mt-14 max-w-[640px] rounded-[28px] bg-white px-8 py-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:px-14"
              style={d(100)}
            >
              <p className="text-gradient text-[80px] font-semibold leading-none tracking-[-0.03em] md:text-[96px]">
                12%
              </p>
              <p className="type-intro mt-4">of fixed annual CTC.</p>
              <p className="mt-3 text-muted">Charged only when your hire joins.</p>
              <ul className="mx-auto mt-8 grid max-w-[360px] gap-2 text-left">
                {["No upfront fee", "Invoiced on joining", "Sourcing, screening and coordination included"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <Check className="size-4 shrink-0 text-accent" strokeWidth={2.5} />
                    {t}
                  </li>
                ))}
              </ul>
              <FeeCalculator />
              <a href="#contact" className="btn btn-primary mt-10">
                Start hiring
              </a>
            </div>
            <p data-reveal className="mt-8 text-center text-muted">
              Hiring for several roles?{" "}
              <a href="#contact" className="text-accent hover:underline">
                Talk to us ›
              </a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container-page max-w-[760px]">
            <h2 data-reveal className="type-section text-center">
              Questions.
            </h2>
            <div data-reveal className="mt-14 divide-y divide-line border-y border-line" style={d(100)}>
              {faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[19px] font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-[28px] font-light leading-none text-muted transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-10 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section bg-mist">
          <div className="container-page max-w-[640px]">
            <h2 data-reveal className="type-section text-center">
              Ready to hire?
            </h2>
            <p data-reveal className="type-intro mt-4 text-center text-muted" style={d(100)}>
              Tell us about the role. We&apos;ll reply within one working day.
            </p>
            <div data-reveal style={d(200)}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl backdrop-saturate-[1.8]">
      <nav className="container-page flex h-11 items-center justify-between">
        <a href="#" className="text-[19px] font-semibold tracking-[-0.02em]">
          HireStern
        </a>
        <div className="flex items-center gap-7 text-[12px] text-ink/80">
          <a href="#how" className="hidden hover:text-ink sm:inline">How it works</a>
          <a href="#roles" className="hidden hover:text-ink sm:inline">Roles</a>
          <a href="#pricing" className="hidden hover:text-ink sm:inline">Pricing</a>
          <a href="#faq" className="hidden hover:text-ink sm:inline">FAQ</a>
          <a href="#contact" className="btn btn-primary !px-3 !py-1 !text-[12px]">
            Hire with us
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden pb-24 pt-20 md:pb-32 md:pt-32">
      <div className="container-page text-center">
        <p className="hero-in type-small font-semibold text-accent">Shortlist in 72 hours</p>
        <h1 className="hero-in type-hero mx-auto mt-3 max-w-[820px]" style={d(100)}>
          Hire the right people.
          <br />
          <span className="text-gradient">Without the wait.</span>
        </h1>
        <p className="hero-in type-intro mx-auto mt-6 max-w-[600px] text-muted" style={d(200)}>
          We find and screen candidates for your open roles. You pay only when they join.
        </p>
        <div className="hero-in mt-10 flex flex-wrap items-center justify-center gap-4" style={d(300)}>
          <a href="#contact" className="btn btn-primary">
            Hire with us
          </a>
          <a href="#how" className="text-accent hover:underline">
            How it works ›
          </a>
        </div>
        <HeroShortlist />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-mist py-10">
      <div className="container-page flex flex-col gap-6 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[15px] font-semibold text-ink">HireStern</p>
          <p className="mt-1">Screened candidates in 72 hours.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#how" className="hover:text-ink">How it works</a>
          <a href="#pricing" className="hover:text-ink">Pricing</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
          <a href="mailto:consultants@hirestern.com" className="hover:text-ink">consultants@hirestern.com</a>
        </div>
      </div>
      <p className="container-page mt-6 text-[12px] text-subtle">© 2026 HireStern</p>
    </footer>
  );
}
