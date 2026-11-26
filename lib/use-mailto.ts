"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Builds a mailto: href only on the client, so the raw address never
 * appears in the server-rendered HTML (keeps it out of basic scrapers).
 */
export function useMailto(local: string, domain: string) {
  return useSyncExternalStore(
    subscribe,
    () => `mailto:${local}@${domain}`,
    () => "#"
  );
}
