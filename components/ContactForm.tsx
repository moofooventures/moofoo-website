"use client";

import { useState, type FormEvent } from "react";
import { PARTNERSHIP_TYPES } from "@/lib/contact";
import { SubmitButton } from "@/components/Button";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      partnershipType: data.get("partnershipType"),
      message: data.get("message"),
      honeypot: data.get("website"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-line bg-blue-soft/40 p-8 text-center">
        <p className="text-base font-semibold text-ink">Message sent.</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Thanks for reaching out &mdash; we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  const inputStyles =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-blue focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-medium tracking-[0.1em] text-muted uppercase">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={`${inputStyles} mt-2`}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-medium tracking-[0.1em] text-muted uppercase">
            Business Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={`${inputStyles} mt-2`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-xs font-medium tracking-[0.1em] text-muted uppercase">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company name"
          className={`${inputStyles} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="partnershipType" className="text-xs font-medium tracking-[0.1em] text-muted uppercase">
          Partnership Type
        </label>
        <select
          id="partnershipType"
          name="partnershipType"
          required
          defaultValue=""
          className={`${inputStyles} mt-2`}
        >
          <option value="" disabled>
            Select one
          </option>
          {PARTNERSHIP_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-medium tracking-[0.1em] text-muted uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your network, platform, or partnership idea..."
          className={`${inputStyles} mt-2 resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <SubmitButton type="submit" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </SubmitButton>
    </form>
  );
}
