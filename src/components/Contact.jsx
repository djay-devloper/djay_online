import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  GeeksforGeeks: Code2,
};

export default function Contact({ data, heading, ui, socials }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-space scroll-mt-24 pb-24">
      <div className="page-shell">
        <SectionHeading {...heading} description={data.prompt} />
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="card-surface p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-paper">{ui.contactDetails}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{ui.contactIntro}</p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-4 rounded-xl border border-line bg-ink/50 p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald/[0.08] text-emerald">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted">{ui.emailLabel}</p>
                  <a href={`mailto:${data.email}`} className="break-all text-sm text-paper hover:text-emerald">{data.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-line bg-ink/50 p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald/[0.08] text-emerald">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-muted">{ui.phoneLabel}</p>
                  <a href={data.phoneHref} className="text-sm text-paper hover:text-emerald">{data.phone}</a>
                </div>
              </div>
              {socials.map(({ label, href }) => {
                const Icon = socialIcons[label] ?? ArrowUpRight;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-line bg-ink/50 p-4 transition hover:border-emerald/30"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald/[0.08] text-emerald">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="flex-1 text-sm text-paper transition group-hover:text-emerald">
                      {label}
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="text-muted transition group-hover:text-emerald"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/[0.07] text-emerald">
                <MessageSquare size={17} aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-paper">{ui.sendMessage}</h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-label">
                {ui.nameLabel}
                <input className="field-input" type="text" name="name" autoComplete="name" placeholder={ui.namePlaceholder} required />
              </label>
              <label className="field-label">
                {ui.emailFieldLabel}
                <input className="field-input" type="email" name="email" autoComplete="email" placeholder={ui.emailPlaceholder} required />
              </label>
              <label className="field-label sm:col-span-2">
                {ui.messageLabel}
                <textarea
                  className="field-input min-h-36 resize-y"
                  name="message"
                  placeholder={ui.messagePlaceholder}
                  required
                />
              </label>
            </div>
            <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted">{ui.emailClientHint}</p>
              <button type="submit" className="btn-primary">
                {ui.sendButton} <Send size={15} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
