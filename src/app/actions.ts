"use server";

export type ContactState = { status: "idle" | "sent" | "error"; message?: string };

const TO = "consultants@hirestern.com";

// Sends the enquiry to TO via Resend (https://resend.com). Needs RESEND_API_KEY.
// CONTACT_FROM must be a sender Resend allows, e.g. "HireStern <hello@hirestern.com>"
// once the domain is verified there.
export async function sendEnquiry(_: ContactState, formData: FormData): Promise<ContactState> {
  const field = (k: string) => String(formData.get(k) ?? "").trim().slice(0, 2000);
  const name = field("name");
  const email = field("email");
  const company = field("company");
  const role = field("role");
  const message = field("message");

  if (!name || !company || !role || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please fill in your name, work email, company and role." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return { status: "error", message: `Couldn't send right now. Email us at ${TO}.` };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "HireStern <onboarding@resend.dev>",
      to: [TO],
      reply_to: email,
      subject: `New hiring enquiry: ${role} at ${company}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Role: ${role}`,
        "",
        message || "(no message)",
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return { status: "error", message: `Couldn't send right now. Email us at ${TO}.` };
  }
  return { status: "sent" };
}
