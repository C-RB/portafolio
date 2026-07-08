"use client";

import { useEffect, useState } from "react";

/**
 * Builds a mailto: href only after mount, so the raw address never
 * appears in the server-rendered HTML (keeps it out of basic scrapers).
 */
export function useMailto(local: string, domain: string) {
  const [href, setHref] = useState("#");

  useEffect(() => {
    setHref(`mailto:${local}@${domain}`);
  }, [local, domain]);

  return href;
}
