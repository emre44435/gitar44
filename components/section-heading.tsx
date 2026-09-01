export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className={`eyebrow mb-5 ${align === "center" ? "justify-center before:hidden" : ""}`}>{eyebrow}</p><h2 className="section-title font-display text-balance">{title}</h2>{copy && <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">{copy}</p>}</div>;
}
