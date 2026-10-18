import type { CSSProperties } from "react";
import { CalendarCheck, Check, CircleCheck, FileText, MapPin, Timer, Wallet } from "lucide-react";

// Decorative illustrations built in HTML so they stay crisp and on-brand.
// All names and numbers are sample data.

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/* Hero: a shortlist that fills in, with each candidate going from "Screening…" to a result. */
export function HeroShortlist() {
  const rows = [
    { initials: "AK", hue: "#e8f1fd", role: "Senior Backend Engineer", meta: "6 yrs · Go, Postgres", fit: "Strong fit" },
    { initials: "RM", hue: "#efeefe", role: "Senior Backend Engineer", meta: "5 yrs · Java, Kafka", fit: "Strong fit" },
    { initials: "SP", hue: "#e9f7ef", role: "Senior Backend Engineer", meta: "7 yrs · Node, AWS", fit: "Good fit" },
  ];
  return (
    <div aria-hidden className="relative mx-auto mt-16 max-w-[560px] md:mt-20">
      <Chip className="right-[calc(100%-12px)] top-8" delay={1600} icon={<Timer className="size-4 text-accent" />}>
        Notice: 30 days
      </Chip>
      <Chip className="left-[calc(100%-12px)] top-32" delay={1900} icon={<Wallet className="size-4 text-accent" />}>
        Expected CTC shared
      </Chip>
      <Chip className="right-[calc(100%-12px)] bottom-4" delay={2200} icon={<CircleCheck className="size-4 text-[#1a9e55]" />}>
        Spoke on a call
      </Chip>

      <div className="hero-in rounded-[28px] bg-mist p-3 text-left" style={d(500)}>
        <div className="flex items-center justify-between px-4 py-3">
          <p className="type-small font-semibold">Your shortlist</p>
          <p className="type-small text-subtle">Delivered in 72h</p>
        </div>
        <div className="space-y-2">
          {rows.map((r, i) => (
            <div
              key={r.initials}
              className="hero-in flex items-center gap-4 rounded-[18px] bg-white px-4 py-4"
              style={d(700 + i * 150)}
            >
              <div
                className="flex size-10 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold text-ink/70"
                style={{ background: r.hue }}
              >
                {r.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-semibold">{r.role}</p>
                <p className="type-small truncate text-subtle">{r.meta}</p>
              </div>
              <span className="type-small grid shrink-0 text-right">
                <span className="swap-out [grid-area:1/1] px-3 py-1 text-subtle" style={d(1300 + i * 250)}>
                  Screening…
                </span>
                <span
                  className="swap-in [grid-area:1/1] rounded-full bg-accent/10 px-3 py-1 text-accent"
                  style={d(1500 + i * 250)}
                >
                  {r.fit}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Chip({
  className,
  delay,
  icon,
  children,
}: {
  className: string;
  delay: number;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`hero-in absolute z-10 hidden lg:block ${className}`} style={d(delay)}>
      <div
        className="float type-small flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2.5 font-medium shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        style={d(delay)}
      >
        {icon}
        {children}
      </div>
    </div>
  );
}

/* Step 1: a role brief. */
export function BriefIllustration() {
  return (
    <div aria-hidden className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <p className="type-small text-subtle">Role brief</p>
      <p className="mt-1 text-[15px] font-semibold">Senior Backend Engineer</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Go", "Postgres", "AWS", "5+ yrs"].map((t) => (
          <span key={t} className="rounded-full bg-mist px-2.5 py-1 text-[12px] text-muted">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[12px] text-subtle">
        <MapPin className="size-3.5" /> Bangalore · Hybrid
      </div>
    </div>
  );
}

/* Step 2: a funnel from many profiles down to a shortlist. */
export function FunnelIllustration() {
  const bars = [
    { label: "Searched", w: "100%", tone: "bg-accent/15" },
    { label: "Spoke to", w: "62%", tone: "bg-accent/35" },
    { label: "Shortlisted", w: "30%", tone: "bg-accent" },
  ];
  return (
    <div aria-hidden className="space-y-3 rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      {bars.map((b, i) => (
        <div key={b.label}>
          <p className="text-[12px] text-subtle">{b.label}</p>
          <div className={`bar-grow mt-1 h-2.5 rounded-full ${b.tone}`} style={{ width: b.w, ...d(200 + i * 200) }} />
        </div>
      ))}
    </div>
  );
}

/* Step 3: interviews scheduled, offer accepted. */
export function HireIllustration() {
  const slots = [
    { day: "Tue", time: "11:00", done: true },
    { day: "Thu", time: "16:30", done: true },
  ];
  return (
    <div aria-hidden className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="space-y-2">
        {slots.map((s) => (
          <div key={s.day} className="flex items-center justify-between rounded-[10px] bg-mist px-3 py-2 text-[12px]">
            <span className="flex items-center gap-2 text-muted">
              <CalendarCheck className="size-3.5" /> Interview · {s.day} {s.time}
            </span>
            <Check className="size-3.5 text-[#1a9e55]" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-[10px] bg-[#e9f7ef] px-3 py-2 text-[12px] font-semibold text-[#1a7f45]">
        <CircleCheck className="size-4" /> Offer accepted
      </div>
    </div>
  );
}

/* "What you get": one candidate as it appears in a shortlist. */
export function CandidateCard() {
  const facts = [
    { k: "Current CTC", v: "₹32L" },
    { k: "Expected", v: "₹40L" },
    { k: "Notice", v: "30 days" },
    { k: "Location", v: "Bangalore" },
  ];
  return (
    <div aria-hidden className="relative">
      <div className="absolute inset-x-6 -bottom-3 h-full rounded-[28px] bg-mist/70" />
      <div className="relative rounded-[28px] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-[#e8f1fd] font-semibold text-ink/70">
            AK
          </div>
          <div>
            <p className="text-[17px] font-semibold">Aarav K.</p>
            <p className="type-small text-subtle">Senior Backend Engineer · 6 yrs</p>
          </div>
          <span className="type-small ml-auto shrink-0 whitespace-nowrap rounded-full bg-accent/10 px-3 py-1 text-accent">Strong fit</span>
        </div>

        <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.06em] text-subtle">Why they fit</p>
        <ul className="mt-2 space-y-2 text-[15px]">
          {["Built payments APIs handling high traffic in Go", "Owns Postgres schema and performance at current job", "Has led a team of 3"].map(
            (t) => (
              <li key={t} className="flex gap-2">
                <Check className="mt-1 size-4 shrink-0 text-accent" />
                {t}
              </li>
            ),
          )}
        </ul>

        <div className="mt-6 grid grid-cols-2 gap-2">
          {facts.map((f) => (
            <div key={f.k} className="rounded-[12px] bg-mist px-3 py-2.5">
              <p className="text-[11px] text-subtle">{f.k}</p>
              <p className="text-[15px] font-semibold">{f.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-[12px] text-subtle">
          <FileText className="size-3.5" /> Resume, GitHub and LinkedIn attached
        </div>
      </div>
    </div>
  );
}
