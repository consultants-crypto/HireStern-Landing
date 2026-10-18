import {
  BrainCircuit,
  Clock,
  Cloud,
  CodeXml,
  IndianRupee,
  Layers,
  PenTool,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const steps = [
  {
    n: "01",
    title: "Share the role.",
    body: "Tell us what you need on a short call. Skills, level, budget, location.",
  },
  {
    n: "02",
    title: "Get a shortlist in 72 hours.",
    body: "Screened candidates, each with a short note on why they fit.",
  },
  {
    n: "03",
    title: "Interview and hire.",
    body: "You pick. We coordinate interviews and follow-ups until they join.",
  },
];

const roles = [
  { icon: CodeXml, name: "Engineering" },
  { icon: Layers, name: "Product" },
  { icon: BrainCircuit, name: "Data & AI" },
  { icon: PenTool, name: "Design" },
  { icon: Cloud, name: "DevOps & Cloud" },
  { icon: TrendingUp, name: "Growth & Sales" },
];

const reasons = [
  {
    icon: UserCheck,
    title: "Screened by people.",
    body: "We speak to every candidate before you see them.",
  },
  {
    icon: Clock,
    title: "72-hour shortlist.",
    body: "Your first candidates arrive within three days.",
  },
  {
    icon: IndianRupee,
    title: "Pay on joining.",
    body: "No upfront fee. You pay only when your hire joins.",
  },
];

const faqs = [
  {
    q: "How fast will I see candidates?",
    a: "Within 72 hours of our call about the role.",
  },
  {
    q: "How is the fee calculated?",
    a: "12% of the candidate's fixed annual CTC. Variable pay, bonuses and ESOPs are not counted.",
  },
  {
    q: "When do I pay?",
    a: "After the candidate joins. Nothing is charged upfront.",
  },
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
      <Nav />
      <main>
        <Hero />

        <section id="how" className="section bg-mist">
          <div className="container-page">
            <h2 className="type-section reveal text-center">How it works.</h2>
            <div className="mt-14 grid gap-3 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="reveal rounded-[28px] bg-white p-8">
                  <p className="type-small text-subtle">{s.n}</p>
                  <h3 className="type-title mt-10">{s.title}</h3>
                  <p className="mt-3 text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roles" className="section">
          <div className="container-page">
            <h2 className="type-section reveal text-center">Roles we hire for.</h2>
            <p className="type-intro reveal mx-auto mt-4 max-w-[640px] text-center text-muted">
              From first engineer to team lead.
            </p>
            <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
              {roles.map(({ icon: Icon, name }) => (
                <div key={name} className="reveal rounded-[28px] bg-mist px-6 py-8 md:px-8">
                  <Icon className="size-7 text-accent" strokeWidth={1.5} />
                  <p className="mt-6 text-[19px] font-semibold">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-mist">
          <div className="container-page">
            <h2 className="type-section reveal text-center">Why HireStern.</h2>
            <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
              {reasons.map(({ icon: Icon, title, body }) => (
                <div key={title} className="reveal text-center">
                  <Icon className="mx-auto size-8 text-ink" strokeWidth={1.5} />
                  <h3 className="type-title mt-5">{title}</h3>
                  <p className="mt-3 text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container-page">
            <h2 className="type-section reveal text-center">Simple pricing.</h2>
            <div className="reveal mx-auto mt-14 max-w-[640px] rounded-[28px] bg-mist px-8 py-14 text-center md:px-14">
              <p className="text-[80px] font-semibold leading-none tracking-[-0.03em] md:text-[96px]">
                12%
              </p>
              <p className="type-intro mt-4">of fixed annual CTC.</p>
              <p className="mt-3 text-muted">Charged only when your hire joins.</p>
              <a href="#contact" className="btn btn-primary mt-10">
                Start hiring
              </a>
            </div>
            <p className="reveal mt-8 text-center text-muted">
              Hiring for several roles?{" "}
              <a href="#contact" className="text-accent hover:underline">
                Talk to us ›
              </a>
            </p>
          </div>
        </section>

        <section id="faq" className="section bg-mist">
          <div className="container-page max-w-[760px]">
            <h2 className="type-section reveal text-center">Questions.</h2>
            <div className="mt-14 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[19px] font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-[28px] font-light leading-none text-muted transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-10 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container-page max-w-[640px]">
            <h2 className="type-section reveal text-center">Talk to us.</h2>
            <p className="type-intro reveal mt-4 text-center text-muted">
              Tell us about the role. We&apos;ll reply within one working day.
            </p>
            <ContactForm />
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
    <section className="pb-20 pt-20 md:pb-28 md:pt-32">
      <div className="container-page text-center">
        <p className="type-small font-semibold text-accent">Shortlist in 72 hours</p>
        <h1 className="type-hero mx-auto mt-3 max-w-[820px]">
          Hire the right people.
          <br />
          Without the wait.
        </h1>
        <p className="type-intro mx-auto mt-6 max-w-[600px] text-muted">
          We find and screen candidates for your open roles. You pay only when they join.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn btn-primary">
            Hire with us
          </a>
          <a href="#how" className="text-accent hover:underline">
            How it works ›
          </a>
        </div>
        <ShortlistVisual />
      </div>
    </section>
  );
}

/* Illustration: a stylised shortlist card, built in HTML. */
function ShortlistVisual() {
  const rows = [
    { initials: "AK", role: "Senior Backend Engineer", meta: "6 yrs · Go, Postgres", fit: "Strong fit" },
    { initials: "RM", role: "Senior Backend Engineer", meta: "5 yrs · Java, Kafka", fit: "Strong fit" },
    { initials: "SP", role: "Senior Backend Engineer", meta: "7 yrs · Node, AWS", fit: "Good fit" },
  ];
  return (
    <div aria-hidden className="mx-auto mt-16 max-w-[560px] rounded-[28px] bg-mist p-3 text-left md:mt-20">
      <div className="flex items-center justify-between px-4 py-3">
        <p className="type-small font-semibold">Your shortlist</p>
        <p className="type-small text-subtle">Delivered in 72h</p>
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.initials} className="flex items-center gap-4 rounded-[18px] bg-white px-4 py-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-mist text-[14px] font-semibold text-muted">
              {r.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px] font-semibold">{r.role}</p>
              <p className="type-small truncate text-subtle">{r.meta}</p>
            </div>
            <span className="type-small shrink-0 rounded-full bg-accent/10 px-3 py-1 text-accent">
              {r.fit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-mist py-8">
      <div className="container-page flex flex-col gap-2 text-[12px] text-muted sm:flex-row sm:justify-between">
        <p>© 2026 HireStern</p>
        <a href="mailto:consultants@hirestern.com" className="hover:text-ink">
          consultants@hirestern.com
        </a>
      </div>
    </footer>
  );
}
