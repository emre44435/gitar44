"use client";

import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect, useRef, useState } from "react";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

const images = [
  ["/images/02-birebir-gitar-dersi.webp", "Birebir gitar dersi çalışma düzeni"],
  ["/images/03-baslangic-gitar-dersi.webp", "Başlangıç gitar dersi çalışma alanı"],
  ["/images/04-cocuk-gitar-dersi.webp", "Çocuklar için gitar dersi düzeni"],
  ["/images/05-akustik-gitar.webp", "Akustik gitar"],
  ["/images/06-klasik-gitar.webp", "Klasik gitar"],
  ["/images/07-elektro-gitar-amfi.webp", "Elektro gitar ve amfi"],
  ["/images/08-gitar-satis-vitrini.webp", "Gitar satış vitrini"],
  ["/images/09-gitar-aksesuarlari.webp", "Gitar aksesuarları"],
  ["/images/10-gitar-bakim-tel-degisimi.webp", "Gitar bakımı ve tel değişimi"],
] as const;

function Row({ items, reverse = false }: { items: typeof images; reverse?: boolean }) {
  const [ref, bounds] = useMeasure();
  const reduceMotion = useHydratedReducedMotion();
  const x = useMotionValue(0);
  const position = useRef(0);
  const speedFactor = useRef(1);
  const [slowed, setSlowed] = useState(false);

  useEffect(() => {
    const cycle = bounds.width + 16;
    position.current = reverse && cycle > 16 ? -cycle : 0;
    x.set(position.current);
  }, [bounds.width, reverse, x]);

  useAnimationFrame((_, delta) => {
    const cycle = bounds.width + 16;
    if (reduceMotion || cycle <= 16) return;
    const target = slowed ? .22 : 1;
    speedFactor.current += (target - speedFactor.current) * Math.min(delta / 500, 1);
    const mobile = typeof window !== "undefined" && window.innerWidth < 640;
    const pixelsPerMs = cycle / (mobile ? 68000 : 46000);
    position.current += (reverse ? 1 : -1) * pixelsPerMs * speedFactor.current * Math.min(delta, 64);
    if (!reverse && position.current <= -cycle) position.current += cycle;
    if (reverse && position.current >= 0) position.current -= cycle;
    x.set(position.current);
  });
  const content = items.map(([src, alt]) => (
    <div key={src} className="slider-card relative aspect-[3/2] w-[17rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:w-[23rem]">
      <Image src={src} alt={alt} fill sizes="(max-width: 640px) 272px, 368px" className="object-cover transition-transform duration-500 hover:scale-[1.03]" />
    </div>
  ));

  if (reduceMotion) return <div className="flex snap-x gap-4 overflow-x-auto px-4 pb-3">{content}</div>;

  return (
    <div className="slider-row overflow-hidden" aria-label="Darende Gitar görsel galerisi" onMouseEnter={() => setSlowed(true)} onMouseLeave={() => setSlowed(false)}>
      <motion.div
        className="flex w-max gap-4"
        style={{ x }}
      >
        <div ref={ref} className="flex gap-4">{content}</div>
        <div className="flex gap-4" aria-hidden="true">{content}</div>
      </motion.div>
    </div>
  );
}

export function InfiniteSliderHorizontal() {
  const second = [...images].reverse() as unknown as typeof images;
  return <div className="space-y-4"><Row items={images} /><Row items={second} reverse /></div>;
}
