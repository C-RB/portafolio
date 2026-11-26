"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Glow, { GlowLayer } from "@/components/ui/Glow";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language-context";
import { useMailto } from "@/lib/use-mailto";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const inputClass =
  "w-full rounded-xl border border-line-strong/60 bg-field px-4 text-base text-foreground placeholder:text-dim transition-all focus:border-foreground/55 focus:outline-none focus:ring-4 focus:ring-foreground/10";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium leading-[1.2]">
      {label}
      {children}
    </label>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const mailHref = useMailto("c.rojas22", "ufromail.cl");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const contactLinks = [
    { icon: "mail", label: "Email", value: t.contact.emailCta, href: mailHref, tone: "bg-foreground/15" },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: "camilo-rojas-baeza",
      href: "https://www.linkedin.com/in/camilo-rojas-baeza-0810ba374/",
      tone: "bg-[#0a66c2]/15 text-[#4ba3f5]",
    },
    { icon: "github", label: "GitHub", value: "C-RB", href: "https://github.com/C-RB", tone: "bg-foreground/15" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <GlowLayer>
        <Glow name="contact-glow-1" x={-520} y={-100} w={1340} h={1040} />
        <Glow name="contact-glow-2" x={680} y={160} w={1140} h={940} />
      </GlowLayer>

      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 lg:px-20 lg:pb-[140px] lg:pt-[180px]">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="title-gradient pb-2 text-[clamp(60px,12.5vw,180px)] font-semibold leading-[0.95] tracking-[-0.07em]">
            {t.contact.title}
          </h2>
          <div className="flex max-w-[340px] flex-col gap-5 lg:pb-6">
            <p className="flex items-center gap-2.5 text-sm font-medium text-[#30d158]">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#30d158] opacity-60 motion-reduce:animate-none" />
                <span className="relative size-2 rounded-full bg-[#30d158] shadow-[0_0_12px_3px_rgba(48,209,88,0.5)]" />
              </span>
              {t.contact.availableNow}
            </p>
            <p className="text-[19px] leading-[30px] text-muted">{t.contact.description}</p>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-12 lg:mt-[72px] lg:flex-row lg:items-start lg:gap-16">
          <Reveal index={1} className="flex flex-col gap-3 lg:w-[400px] lg:shrink-0">
            <h3 className="text-xl font-semibold text-strong">{t.contact.talkTitle}</h3>
            <p className="mb-4 text-[15px] leading-tight text-muted">{t.contact.talkDesc}</p>

            {contactLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[18px] border border-line bg-card py-3.5 pl-3.5 pr-[18px] transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong"
              >
                <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${link.tone}`}>
                  <Icon name={link.icon} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-0.5 leading-[1.25]">
                  <span className="text-[13px] text-muted">{link.label}</span>
                  <span className="truncate text-base font-medium">{link.value}</span>
                </span>
                <Icon
                  name="arrow-up-right"
                  size={18}
                  className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}

            <p className="flex items-center gap-2.5 pl-1 pt-3 text-sm text-muted">
              <Icon name="map-pin" size={16} />
              {t.contact.locationValue}
            </p>
          </Reveal>

          <Reveal index={2} className="min-w-0 flex-1">
            <div className="rounded-[28px] border border-line bg-card p-6 backdrop-blur-md sm:p-9">
              {sent ? (
                <motion.div
                  className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <CheckCircle2 size={48} className="text-[#30d158]" />
                  <div>
                    <h3 className="text-xl font-semibold text-strong">{t.contact.sentTitle}</h3>
                    <p className="mt-1 text-sm text-muted">{t.contact.sentDesc}</p>
                  </div>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="text-sm text-muted transition-colors hover:text-strong cursor-pointer"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-xl font-semibold text-strong">{t.contact.formTitle}</h3>
                    <p className="text-sm text-muted">{t.contact.formHint}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t.contact.formName}>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={t.contact.formNamePlaceholder} required className={`${inputClass} h-[52px]`} />
                    </Field>
                    <Field label={t.contact.formEmail}>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" required className={`${inputClass} h-[52px]`} />
                    </Field>
                  </div>
                  <Field label={t.contact.formSubject}>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder={t.contact.formSubjectPlaceholder} required className={`${inputClass} h-[52px]`} />
                  </Field>
                  <Field label={t.contact.formMessage}>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder={t.contact.formMessagePlaceholder} required className={`${inputClass} h-[140px] resize-none py-4`} />
                  </Field>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2.5 rounded-full bg-solid px-7 py-4 text-base font-semibold text-solid-fg transition hover:opacity-85 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? t.contact.sending : t.contact.sendButton}
                    <Icon name="send" size={16} className={loading ? "animate-pulse" : ""} />
                  </button>
                  {error && <p role="alert" className="text-center text-sm text-rose-500">{t.contact.sendError}</p>}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
