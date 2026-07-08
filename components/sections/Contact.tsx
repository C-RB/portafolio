"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/lib/language-context";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactLinks = [
    {
      icon: Github,
      label: t.contact.github,
      value: "C-RB",
      href: "https://github.com/C-RB",
      color: "hover:text-zinc-900 dark:hover:text-zinc-100",
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      value: t.contact.linkedinPlaceholder,
      href: "#",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "tu@email.com",
      href: "mailto:tu@email.com",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: t.contact.locationValue,
      href: null,
      color: "text-zinc-500",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending — replace with your actual send logic
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  const inputClass =
    "w-full bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all";

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-blue-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-14">
          <SectionTitle
            label={t.contact.eyebrow}
            title={t.contact.title}
            highlight={t.contact.highlight}
            description={t.contact.description}
          />

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Contact info */}
            <motion.div
              className="lg:col-span-2 flex flex-col gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg mb-2">
                  {t.contact.talkTitle}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed">
                  {t.contact.talkDesc}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {contactLinks.map((link) => (
                  <div key={link.label} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl glass flex items-center justify-center flex-shrink-0">
                      <link.icon size={15} className="text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-600">{link.label}</p>
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className={`text-sm text-zinc-700 dark:text-zinc-400 transition-colors ${link.color}`}
                        >
                          {link.value}
                        </a>
                      ) : (
                        <span className="text-sm text-zinc-600 dark:text-zinc-500">{link.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability badge */}
              <div className="glass rounded-2xl p-4 flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{t.contact.availableNow}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-600">{t.contact.availableDesc}</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
            >
              {sent ? (
                <motion.div
                  className="glass rounded-2xl p-10 flex flex-col items-center gap-4 text-center h-full justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 size={26} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
                      {t.contact.sentTitle}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-500 mt-1">
                      {t.contact.sentDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="text-xs text-zinc-500 dark:text-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-400 transition-colors cursor-pointer"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-zinc-600 dark:text-zinc-500">
                        {t.contact.formName}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t.contact.formNamePlaceholder}
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-zinc-600 dark:text-zinc-500">
                        {t.contact.formEmail}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-zinc-600 dark:text-zinc-500">
                      {t.contact.formSubject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder={t.contact.formSubjectPlaceholder}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-zinc-600 dark:text-zinc-500">
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t.contact.formMessagePlaceholder}
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700/50 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-500/20 cursor-pointer disabled:cursor-not-allowed"
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                        </svg>
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        {t.contact.sendButton}
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
