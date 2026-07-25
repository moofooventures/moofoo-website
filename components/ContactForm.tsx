"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "hello@moofooventures.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nName: ${name}\nEmail: ${email}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const inputStyles =
    "w-full border-b border-line bg-transparent py-3 text-sm text-ink placeholder:text-muted focus:border-gold focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div>
        <label htmlFor="name" className="text-xs tracking-[0.15em] text-muted uppercase">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={`${inputStyles} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-xs tracking-[0.15em] text-muted uppercase">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={`${inputStyles} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-xs tracking-[0.15em] text-muted uppercase">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us a little about what you're building..."
          className={`${inputStyles} mt-2 resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-fit items-center gap-2 bg-black px-7 py-3 text-xs tracking-[0.2em] text-white uppercase transition-colors hover:bg-gold hover:text-black"
      >
        Send Message
      </button>
    </form>
  );
}
