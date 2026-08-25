import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  external?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", className, external }: ButtonLinkProps) {
  const classes = cn(variant === "primary" ? "button-primary" : variant === "secondary" ? "button-secondary" : "button-text", className);
  if (external) {
    return <a className={classes} href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowRight size={17} aria-hidden="true" /></a>;
  }
  return <Link className={classes} href={href}>{children}{variant !== "secondary" && <ArrowRight size={17} aria-hidden="true" />}</Link>;
}
