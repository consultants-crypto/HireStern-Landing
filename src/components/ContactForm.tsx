"use client";

import { useActionState } from "react";
import { sendEnquiry, type ContactState } from "@/app/actions";

const input =
  "w-full rounded-[12px] border border-line bg-white px-4 py-3 text-[17px] outline-none transition-colors placeholder:text-subtle focus:border-accent";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendEnquiry, {
    status: "idle",
  });

  if (state.status === "sent") {
    return (
      <div className="mt-12 rounded-[28px] bg-mist px-8 py-12 text-center">
        <p className="type-title">Thanks. We&apos;ve got it.</p>
        <p className="mt-3 text-muted">We&apos;ll reply within one working day.</p>
      </div>
    );
  }

  return (
    <form action={action} className="mt-12 grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" placeholder="Your name" autoComplete="name" required className={input} />
        <input
          name="email"
          type="email"
          placeholder="Work email"
          autoComplete="email"
          required
          className={input}
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="company" placeholder="Company" autoComplete="organization" required className={input} />
        <input name="role" placeholder="Role you're hiring for" required className={input} />
      </div>
      <textarea name="message" rows={4} placeholder="Anything else? (optional)" className={input} />
      {state.status === "error" && (
        <p role="alert" className="type-small text-[#e30000]">
          {state.message}
        </p>
      )}
      <button type="submit" disabled={pending} className="btn btn-primary mt-3 justify-self-center disabled:opacity-60">
        {pending ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
