import { SITE, CTA, track } from "@/config/site";
import type { Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
  variant?: "primary" | "outline";
  className?: string;
  source?: string;
};

export function ReserveButton({ lang, variant = "primary", className = "", source = "unknown" }: Props) {
  const label = lang === "ar" ? CTA.reserveAr : CTA.reserveEn;
  const cls = variant === "primary" ? "btn-primary" : "btn-outline";
  return (
    <a
      href={SITE.reservationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cls} ${className}`}
      onClick={() => {
        track("reserve_table_click", { source, lang });
        track("sevenrooms_redirect", { source, lang });
      }}
      aria-label={label}
    >
      {label}
    </a>
  );
}
