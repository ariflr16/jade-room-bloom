import logoAsset from "@/assets/logo.png.asset.json";
import { SITE } from "@/config/site";
import { useLang } from "@/lib/i18n";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const lang = useLang();
  const alt = lang === "ar" ? SITE.nameAr : SITE.name;

  return (
    <img
      src={logoAsset.url}
      alt={alt}
      className={`h-full w-auto object-contain transition-opacity ${
        variant === "light" ? "brightness-0 invert" : ""
      } ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
