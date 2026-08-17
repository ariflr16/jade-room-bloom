import { Instagram, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ReserveButton } from "@/components/ReserveButton";
import { useLang, t } from "@/lib/i18n";
import { SITE, track } from "@/config/site";

export function ContactPage() {
  const lang = useLang();

  const faqs = lang === "ar"
    ? [
        { q: "أين يقع جايد روم؟", a: "يقع جايد روم في سما جاليري بحي الملقا في الرياض، المملكة العربية السعودية." },
        { q: "كيف يمكنني حجز طاولة؟", a: "يمكنكم الحجز مباشرةً عبر منصّة SevenRooms من خلال زر «احجز طاولتك» في أعلى الصفحة." },
        { q: "ما نوع المطبخ الذي يقدّمه جايد روم؟", a: "نقدّم مطبخًا صينيًا عصريًا يجمع بين الديم سم والمأكولات البحرية والأطباق المُعدّة على الووك، مع تركيز على أطباق المشاركة." },
        { q: "هل قائمة الطعام مصمّمة للمشاركة؟", a: "نعم، معظم القائمة مصمّمة للمشاركة بين ضيوف الطاولة، مع خيارات مناسبة لعدد الأشخاص." },
        { q: "ما هي أوقات عمل جايد روم؟", a: "[أوقات العمل قيد التأكيد]" },
        { q: "هل تتوفر مواقف للسيارات؟", a: "[معلومات المواقف قيد التأكيد]" },
        { q: "هل تستقبلون حجوزات المجموعات الكبيرة؟", a: "نعم، تواصلوا معنا مباشرةً لترتيب المناسبات الخاصة والمجموعات الكبيرة." },
      ]
    : [
        { q: "Where is Jade Room located?", a: "Jade Room is located at Sama Gallery, Al Malqa, Riyadh, Saudi Arabia." },
        { q: "How can I reserve a table?", a: "Reservations are made through our SevenRooms page — use the ‘Reserve a Table’ button at the top of any page." },
        { q: "What type of cuisine does Jade Room serve?", a: "Modern Chinese — dim sum, wok-fired plates, seafood and shared mains, with a considered mocktail list." },
        { q: "Is the menu designed for sharing?", a: "Yes. Most of our menu is composed for the table, with dishes to be enjoyed together." },
        { q: "What are Jade Room's opening hours?", a: "[Opening hours to be confirmed]" },
        { q: "Is parking available?", a: "[Parking information to be confirmed]" },
        { q: "Can Jade Room accommodate group reservations?", a: "Yes — please contact us directly to arrange private dining and larger groups." },
      ];

  return (
    <PageShell>
      <section className="pt-16 pb-8">
        <div className="container-editorial text-center max-w-2xl">
          <p className="eyebrow mb-5">{t(lang, "Contact & Location", "التواصل والموقع")}</p>
          <h1 className="text-5xl md:text-6xl mb-4">
            {t(lang, "Visit us in Al Malqa", "زوروا جايد روم في الملقا")}
          </h1>
          <p className="text-muted-foreground">
            {t(lang, "We look forward to welcoming you.", "يسعدنا استقبالكم.")}
          </p>
        </div>
      </section>

      <section className="container-editorial py-12 grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-8">
          <div>
            <p className="eyebrow mb-3">{t(lang, "Address", "العنوان")}</p>
            <address className="not-italic text-lg leading-8">
              {SITE.name}<br />
              {t(lang, SITE.address.line1, SITE.address.line1Ar)}<br />
              {t(lang, SITE.address.line2, SITE.address.line2Ar)}<br />
              {t(lang, SITE.address.country, SITE.address.countryAr)}
            </address>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-jade-sage" />
              <a href={SITE.phoneHref} onClick={() => track("phone_click", { source: "contact" })}
                className="hover:text-jade-sage">{SITE.phone}</a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram size={16} className="text-jade-sage" />
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer"
                onClick={() => track("instagram_click", { source: "contact" })}
                className="hover:text-jade-sage">@jaderoom</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-jade-sage" />
              <span>{SITE.openingHours}</span>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">{t(lang, "Arrival & Parking", "الوصول والمواقف")}</p>
            <p className="text-muted-foreground leading-7">
              {t(lang, "[Parking and arrival details to be confirmed]", "[تفاصيل الوصول والمواقف قيد التأكيد]")}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ReserveButton lang={lang} source="contact_top" />
            <a href={SITE.googleMapsUrl} target="_blank" rel="noopener noreferrer"
              onClick={() => track("get_directions", { source: "contact_top" })}
              className="btn-outline">
              {t(lang, "Get Directions", "الاتجاهات")}
            </a>
          </div>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden border border-border">
          <iframe
            title={t(lang, "Map to Jade Room", "خريطة إلى جايد روم")}
            src={SITE.googleMapsEmbedUrl}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="container-editorial py-20 max-w-3xl">
        <p className="eyebrow mb-4">{t(lang, "FAQ", "الأسئلة الشائعة")}</p>
        <h2 className="text-4xl md:text-5xl mb-10">
          {t(lang, "Frequently asked", "أسئلة يتكرّر طرحها")}
        </h2>
        <div className="divide-y divide-border">
          {faqs.map((f, i) => (
            <details key={i} className="group py-5">
              <summary className="cursor-pointer list-none flex justify-between items-center gap-4">
                <span className="font-serif text-xl text-foreground">{f.q}</span>
                <span className="text-jade-sage text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-7">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
