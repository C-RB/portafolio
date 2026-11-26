"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, type ReactNode } from "react";
import { translations, type Lang, type Dictionary } from "@/lib/translations";
import { useStoredValue } from "@/lib/use-stored-value";

const LANGS = ["es", "en"] as const;

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useStoredValue<Lang>("lang", LANGS, "es");

  // Screen readers and browser translation rely on the page language.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => setLang(lang === "es" ? "en" : "es"), [lang, setLang]);
  const value = useMemo(() => ({ lang, toggleLang, t: translations[lang] }), [lang, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
