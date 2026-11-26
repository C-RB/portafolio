"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Icon from "@/components/ui/Icon";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";

const SECTIONS = ["hero", "about", "stack", "projects", "contact"] as const;

const roundButton =
  "lift relative after:absolute after:-inset-[5px] flex size-[34px] items-center justify-center rounded-full border border-line-strong bg-card backdrop-blur-md text-muted hover:text-strong transition active:scale-95 cursor-pointer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { lang, toggleLang, t } = useLanguage();
  const { toggleTheme } = useTheme();

  const navLinks = [t.nav.home, t.nav.about, t.nav.stack, t.nav.projects, t.nav.contact].map(
    (label, i) => ({ label, id: SECTIONS[i] })
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The active link is the section crossing a thin band a quarter of the way down.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -74% 0px" }
    );
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "py-3 bg-background/70 backdrop-blur-xl border-line" : "py-[23px] border-transparent"
        }`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <nav className="relative mx-auto flex max-w-[1440px] items-center justify-end px-5 lg:justify-center lg:px-20">
          <ul className="lift hidden lg:flex items-center gap-0.5 rounded-full border border-line-strong bg-card p-[5px] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors cursor-pointer ${
                      isActive ? "text-strong" : "text-muted hover:text-strong"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full bg-foreground/10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 sm:gap-5 lg:absolute lg:right-20">
            <span className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-[0.04em] text-muted">
              <span className="size-[7px] rounded-full bg-[#30d158] shadow-[0_0_10px_2px_rgba(48,209,88,0.6)]" />
              {t.nav.available}
            </span>
            <button
              onClick={toggleLang}
              className="relative flex items-center gap-1.5 after:absolute after:-inset-x-1.5 after:-inset-y-3.5 font-mono text-xs text-muted hover:text-strong transition-colors cursor-pointer"
              aria-label="Cambiar idioma / Switch language"
            >
              <Icon name="languages" size={14} />
              {lang.toUpperCase()}
            </button>
            <button onClick={toggleTheme} className={roundButton} aria-label="Cambiar tema / Toggle theme">
              <Icon name="sun" size={15} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${roundButton} lg:hidden`}
              aria-label="Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.ul
              className="absolute inset-x-4 top-[72px] flex flex-col gap-1 rounded-3xl border border-line-strong bg-background p-3 shadow-2xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="w-full rounded-2xl px-4 py-3 text-left text-sm text-muted hover:bg-card hover:text-strong transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
