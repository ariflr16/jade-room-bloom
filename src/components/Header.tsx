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
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-20">
        <Link
          to={homeLink}
          className="h-9 md:h-10 group"
          aria-label={SITE.name}
        >
          <Logo variant="dark" className="h-full w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label={t(lang, "Primary", "التنقل الرئيسي")}>
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  active ? "text-jade" : "text-foreground/75 hover:text-jade"
                } ${lang === "ar" ? "font-arabic normal-case tracking-normal text-sm" : ""}`}
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
            className="text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:text-jade transition-colors"
            aria-label={t(lang, "Switch to Arabic", "التحويل إلى الإنجليزية")}
          >
            {lang === "ar" ? "EN" : "عربي"}
          </Link>
          <div className="hidden sm:block">
            <ReserveButton lang={lang} source="header" />
          </div>
          <button
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={t(lang, "Toggle menu", "القائمة")}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container-editorial py-6 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`py-3 text-lg ${lang === "ar" ? "font-arabic text-right" : "font-serif"} text-foreground hover:text-jade`}
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
