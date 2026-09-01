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
  const content = <>{variant !== "text" && <span className="button-edges" aria-hidden="true"><i /><i /><i /><i /></span>}<span className="button-label">{children}</span>{variant !== "secondary" && <ArrowRight size={17} aria-hidden="true" />}</>;
  if (external) {
    return <a className={classes} href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  }
  return <Link className={classes} href={href}>{content}</Link>;
}
