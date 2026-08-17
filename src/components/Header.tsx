import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE, track } from "@/config/site";
import { otherLangPath, useLang, t } from "@/lib/i18n";
import { Logo } from "./Logo";
import { ReserveButton } from "./ReserveButton";

const NAV_EN = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/our-story", label: "Our Story" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];
const NAV_AR = [
  { to: "/ar", label: "الرئيسية" },
  { to: "/ar/menu", label: "القائمة" },
  { to: "/ar/our-story", label: "قصتنا" },
  { to: "/ar/gallery", label: "المعرض" },
  { to: "/ar/contact", label: "التواصل" },
];

export function Header() {
  const lang = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const nav = lang === "ar" ? NAV_AR : NAV_EN;
  const homeLink = lang === "ar" ? "/ar" : "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/" || pathname === "/ar";
  const isLight = !scrolled && isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b border-border/60"
          : "bg-gradient-to-b from-navy/70 to-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-20">
        <Link
          to={homeLink}
          className="h-10 md:h-12 group"
          aria-label={SITE.name}
        >
          <Logo variant="light" className="h-full w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label={t(lang, "Primary", "التنقل الرئيسي")}>
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[11px] font-bold uppercase tracking-[0.22em] transition-colors ${
                  active ? "text-jade-sage" : "text-ivory/70 hover:text-jade-sage"
                } ${lang === "ar" ? "font-arabic normal-case tracking-normal text-sm font-normal" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <Link
            to={otherLangPath(pathname)}
            onClick={() => track("language_switch", { to: lang === "ar" ? "en" : "ar" })}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-ivory/70 hover:text-jade-sage transition-colors"
            aria-label={t(lang, "Switch to Arabic", "التحويل إلى الإنجليزية")}
          >
            {lang === "ar" ? "EN" : "عربي"}
          </Link>
          <div className="hidden sm:block">
            <ReserveButton
              lang={lang}
              source="header"
              variant={isLight ? "outline" : "primary"}
              className={isLight ? "on-dark text-ivory" : ""}
            />
          </div>
          <button
            className="lg:hidden p-2 -mr-2 text-ivory transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={t(lang, "Toggle menu", "القائمة")}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>


      {open && (
        <div className="lg:hidden surface-jade border-t border-border">
          <nav className="container-editorial py-6 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`py-3 text-lg ${lang === "ar" ? "font-arabic text-right" : "font-serif"} text-ivory hover:text-jade-sage`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <ReserveButton lang={lang} source="mobile_menu" className="w-full" />
            </div>
          </nav>
        </div>
      )}

    </header>
  );
}
