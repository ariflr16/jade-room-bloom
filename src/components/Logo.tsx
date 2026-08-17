import sageLogo from "@/assets/logo-sage.png.asset.json";
import jadeLogo from "@/assets/logo-jade.png.asset.json";
import { SITE } from "@/config/site";
import { useLang } from "@/lib/i18n";

interface LogoProps {
  /** "light" = sage logo for dark surfaces, "dark" = deep jade logo for light surfaces */
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const lang = useLang();
  const alt = lang === "ar" ? SITE.nameAr : SITE.name;

  return (
    <img
      src={variant === "light" ? sageLogo.url : jadeLogo.url}
      alt={alt}
      className={`h-full w-auto object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
