import NextImage, { type ImageProps } from "next/image";
import { assetPath } from "@/lib/paths";

export function SiteImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? assetPath(src) : src;
  return <NextImage {...props} src={resolvedSrc} />;
}
