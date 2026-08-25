"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroAtmosphere = dynamic(() => import("@/components/hero-atmosphere").then((module) => module.HeroAtmosphere), { ssr: false });

export function HeroAtmosphereLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const win = window as Window & { requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    const id = win.requestIdleCallback ? win.requestIdleCallback(() => setReady(true), { timeout: 1200 }) : window.setTimeout(() => setReady(true), 500);
    return () => { if (win.cancelIdleCallback) win.cancelIdleCallback(id); else window.clearTimeout(id); };
  }, []);

  return <div className="hero-atmosphere-shell" aria-hidden="true"><div className="hero-atmosphere-fallback" />{ready && <HeroAtmosphere />}</div>;
}
