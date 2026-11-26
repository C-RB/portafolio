"use client";

import { useCallback, useSyncExternalStore } from "react";

const CHANGE = "stored-value-change";

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** A preference kept in localStorage. The server and hydration render use `fallback`. */
export function useStoredValue<T extends string>(key: string, allowed: readonly T[], fallback: T) {
  const value = useSyncExternalStore(
    subscribe,
    () => {
      const stored = localStorage.getItem(key) as T | null;
      return stored && allowed.includes(stored) ? stored : fallback;
    },
    () => fallback
  );

  const setValue = useCallback(
    (next: T) => {
      localStorage.setItem(key, next);
      window.dispatchEvent(new Event(CHANGE));
    },
    [key]
  );

  return [value, setValue] as const;
}
