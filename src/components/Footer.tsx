import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
import { SITE, track } from "@/config/site";
import { useLang, t } from "@/lib/i18n";

export function Footer() {
  const lang = useLang();
  const homeBase = lang === "ar" ? "/ar" : "";

  const links = lang === "ar"
    ? [
        { to: `${homeBase}/menu`, label: "القائمة" },
        { to: `${homeBase}/our-story`, label: "قصتنا" },
        { to: `${homeBase}/gallery`, label: "المعرض" },
        { to: `${homeBase}/contact`, label: "التواصل" },
        { to: `${homeBase}/privacy`, label: "سياسة الخصوصية" },
      ]
    : [
        { to: "/menu", label: "Menu" },
        { to: "/our-story", label: "Our Story" },
        { to: "/gallery", label: "Gallery" },
        { to: "/contact", label: "Contact" },
        { to: "/privacy", label: "Privacy Policy" },
      ];

  return (
    <footer className="mt-24 bg-charcoal text-ivory">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl">{lang === "ar" ? SITE.nameAr : "Jade"}</span>
            {lang === "en" && <span className="font-serif text-3xl italic text-brass">Room</span>}
          </div>
          <p className="mt-4 text-sm text-ivory/70 max-w-xs leading-relaxed">
            {t(
              lang,
              "Modern Chinese dining in the heart of Al Malqa, Riyadh.",
              "تجربة طعام صيني عصري في قلب حي الملقا بالرياض."
            )}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">{t(lang, "Visit", "زيارة")}</p>
          <address className="not-italic text-sm leading-7 text-ivory/85">
            {lang === "ar" ? SITE.address.line1Ar : SITE.address.line1}<br />
            {lang === "ar" ? SITE.address.line2Ar : SITE.address.line2}<br />
            {lang === "ar" ? SITE.address.countryAr : SITE.address.country}
          </address>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a
              href={SITE.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("get_directions", { source: "footer" })}
              className="inline-flex items-center gap-2 text-ivory/85 hover:text-brass"
            >
              <MapPin size={14} /> {t(lang, "Get Directions", "الاتجاهات")}
            </a>
            <a
              href={SITE.phoneHref}
              onClick={() => track("phone_click", { source: "footer" })}
              className="inline-flex items-center gap-2 text-ivory/85 hover:text-brass"
            >
              <Phone size={14} /> {SITE.phone}
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("instagram_click", { source: "footer" })}
              className="inline-flex items-center gap-2 text-ivory/85 hover:text-brass"
            >
              <Instagram size={14} /> Instagram
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">{t(lang, "Explore", "استكشف")}</p>
          <ul className="flex flex-col gap-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ivory/85 hover:text-brass transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-6 mb-2">{t(lang, "Hours", "أوقات العمل")}</p>
          <p className="text-sm text-ivory/70">{SITE.openingHours}</p>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-editorial py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Jade Room. {t(lang, "All rights reserved.", "جميع الحقوق محفوظة.")}</p>
          <p>{t(lang, "Sama Gallery · Al Malqa · Riyadh", "سما جاليري · الملقا · الرياض")}</p>
        </div>
      </div>
    </footer>
  );
}
