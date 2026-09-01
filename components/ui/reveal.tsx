"use client";

import { motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useHydratedReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      whileInView={reduceMotion ? undefined : { y: [8, 0] }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
