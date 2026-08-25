"use client";

import { useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

const subscribe = () => () => undefined;

export function useHydratedReducedMotion() {
  const reduced = useReducedMotion();
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  return hydrated && Boolean(reduced);
}
