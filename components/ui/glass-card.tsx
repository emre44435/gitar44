"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, BookOpenCheck, Guitar, ListMusic, Music2, Target, UsersRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

const icons = { Target, BookOpenCheck, UsersRound, Guitar, ListMusic, Music2 };

type GlassCardProps = {
  title: string;
  description: string;
  icon: keyof typeof icons;
  href: string;
  accent?: "coral" | "red" | "indigo";
};

export function GlassCard({ title, description, icon, href, accent = "coral" }: GlassCardProps) {
  const Icon = icons[icon];
  const reduceMotion = useHydratedReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 180, damping: 24 });

  return (
    <motion.div
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType === "touch") return;
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set((event.clientX - rect.left) / rect.width);
        my.set((event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => { mx.set(0.5); my.set(0.5); }}
      className="h-full"
    >
      <Link href={href} className="glass-card group block h-full rounded-[1.6rem] p-6 sm:p-7">
        <span className={cn("mb-10 grid size-12 place-items-center rounded-2xl border", accent === "red" ? "border-red/30 bg-red/10 text-red" : accent === "indigo" ? "border-indigo/60 bg-indigo/30 text-white" : "border-coral/30 bg-coral/10 text-coral")}>
          <Icon size={23} aria-hidden="true" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
        <span className="mt-7 flex items-center gap-2 text-sm font-bold text-coral">Detayları gör <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} aria-hidden="true" /></span>
      </Link>
    </motion.div>
  );
}
