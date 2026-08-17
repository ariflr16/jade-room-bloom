import { PageShell } from "@/components/PageShell";
import { ReserveButton } from "@/components/ReserveButton";
import { useLang, t } from "@/lib/i18n";
import { MENU } from "@/config/menu";

export function MenuPage() {
  const lang = useLang();

  return (
    <PageShell>
      <section className="pt-16 md:pt-24 pb-12">
        <div className="container-editorial text-center max-w-3xl">
          <p className="eyebrow mb-5">{t(lang, "The Menu", "القائمة")}</p>
          <h1 className="text-5xl md:text-6xl mb-6">
            {t(lang, "A menu made for sharing", "قائمة مصمّمة للمشاركة")}
          </h1>
          <p className="text-muted-foreground text-lg leading-8">
            {t(
              lang,
              "From delicate dim sum to wok-fired signatures, the Jade Room menu invites the table to explore together. Final dish descriptions and prices are updated regularly.",
              "من الديم سم الرقيق إلى الأطباق المميزة على الووك، تدعو قائمة جايد روم الطاولةَ إلى المشاركة والاستكشاف. تُحدَّث أوصاف الأطباق والأسعار بانتظام."
            )}
          </p>
        </div>
      </section>

      {/* Sticky category nav */}
      <nav
        aria-label={t(lang, "Menu sections", "أقسام القائمة")}
        className="sticky top-20 z-30 bg-background/92 backdrop-blur border-y border-border"
      >
        <div className="container-editorial overflow-x-auto">
          <ul className="flex gap-6 py-4 min-w-max text-sm">
            {MENU.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-foreground/70 hover:text-jade-sage whitespace-nowrap">
                  {t(lang, s.titleEn, s.titleAr)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container-editorial py-16 md:py-20 max-w-4xl">
        {MENU.map((section, idx) => (
          <section key={section.id} id={section.id} className="scroll-mt-40 py-10">
            <header className="mb-8">
              <div className="hairline w-16 mb-4" />
              <h2 className="text-3xl md:text-4xl">
                {t(lang, section.titleEn, section.titleAr)}
              </h2>
            </header>

            <ul className="divide-y divide-border">
              {section.dishes.map((d, i) => (
                <li key={i} className="py-5 flex items-baseline gap-4">
                  <div className="flex-1">
                    <p className="font-serif text-xl text-foreground">
                      {t(lang, d.nameEn, d.nameAr)}
                    </p>
                    {(d.descEn || d.descAr) && (
                      <p className="mt-1 text-sm text-muted-foreground leading-6">
                        {t(lang, d.descEn ?? "", d.descAr ?? "")}
                      </p>
                    )}
                  </div>
                  <span className="font-serif italic text-jade-sage whitespace-nowrap">{d.price ?? "—"}</span>
                </li>
              ))}
            </ul>

            {(idx + 1) % 3 === 0 && (
              <div className="mt-12 text-center">
                <ReserveButton lang={lang} source={`menu_${section.id}`} />
              </div>
            )}
          </section>
        ))}

        <div className="mt-12 text-center border-t border-border pt-12">
          <p className="text-sm text-muted-foreground mb-4">
            {t(
              lang,
              "Prices and availability may vary. Please inform us of any allergies.",
              "قد تختلف الأسعار والتوفر. يُرجى إبلاغنا بأي حساسية غذائية."
            )}
          </p>
          <ReserveButton lang={lang} source="menu_footer" />
        </div>
      </div>
    </PageShell>
  );
}
