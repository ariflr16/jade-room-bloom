import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Instagram } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ReserveButton } from "@/components/ReserveButton";
import { useLang, t } from "@/lib/i18n";
import { SITE, track } from "@/config/site";
import heroImg from "@/assets/hero.jpg";
import storyImg from "@/assets/story.jpg";
import interiorImg from "@/assets/interior.jpg";
import dimsumImg from "@/assets/dimsum.jpg";
import beefImg from "@/assets/beef.jpg";
import seafoodImg from "@/assets/seafood.jpg";
import mocktailImg from "@/assets/mocktail.jpg";
import sharingImg from "@/assets/sharing.jpg";

export function HomePage() {
  const lang = useLang();
  const menuLink = lang === "ar" ? "/ar/menu" : "/menu";
  const contactLink = lang === "ar" ? "/ar/contact" : "/contact";

  const pillars = lang === "ar"
    ? [
        { title: "مطبخ صيني عصري", body: "أطباق مُعدّة بحرفية عالية تجمع بين النكهات الأصيلة والحضور المعاصر." },
        { title: "طعام مُعدّ للمشاركة", body: "قوائم مصمّمة لتُقاسم على الطاولة، من الديم سم إلى الأطباق الكبيرة." },
        { title: "ضيافة رياضية راقية", body: "تجربة دافئة وأنيقة في قلب حي الملقا، مصنوعة للمناسبات المميزة." },
      ]
    : [
        { title: "Modern Chinese Cuisine", body: "Precisely executed dishes that bring expressive flavours into a contemporary voice." },
        { title: "Made for Sharing", body: "Menus composed around the table — from dim sum baskets to large-format plates." },
        { title: "Refined Riyadh Hospitality", body: "A warm, considered experience in the heart of Al Malqa, made for occasions worth remembering." },
      ];

  const categories = lang === "ar"
    ? ["الشوربات", "ديم سم", "المأكولات البحرية", "اللحوم", "الدجاج", "الخضروات", "النودلز والأرز", "الموكتيلز"]
    : ["Soups", "Dim Sum", "Seafood", "Beef", "Chicken", "Vegetables", "Noodles & Rice", "Mocktails"];

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt={t(lang, "Jade Room dining room in Riyadh", "قاعة الطعام في جايد روم بالرياض")}
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/80" />
        <div className="relative z-10 h-full flex items-end pb-20 md:pb-28">
          <div className="container-editorial text-ivory">
            <p className="eyebrow text-jade-sage mb-6">
              {t(lang, "Al Malqa · Riyadh", "الملقا · الرياض")}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[92px] leading-[0.95] max-w-4xl">
              {lang === "ar" ? (
                <>الطعام الصيني العصري <em className="text-jade-sage not-italic block">في الرياض</em></>
              ) : (
                <>Modern Chinese <em className="text-jade-sage italic block">Dining in Riyadh</em></>
              )}
            </h1>
            <p className={`mt-6 max-w-xl text-ivory/85 ${lang === "ar" ? "text-lg leading-8" : "text-base leading-7"}`}>
              {t(
                lang,
                "An elevated Chinese dining experience where expressive flavours, refined hospitality and dishes made for sharing come together in the heart of Al Malqa.",
                "تجربة طعام صيني راقية تجمع بين النكهات المميزة والضيافة الأنيقة والأطباق المُعدّة للمشاركة، في قلب حي الملقا."
              )}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ReserveButton lang={lang} source="hero" />
              <Link
                to={menuLink}
                onClick={() => track("view_menu", { source: "hero" })}
                className="on-dark btn-outline text-ivory"
              >
                {t(lang, "Explore the Menu", "تصفح القائمة")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container-editorial max-w-4xl text-center">
          <p className="eyebrow mb-6">{t(lang, "Introducing", "تعريف")}</p>
          <p className={`font-serif text-3xl md:text-5xl leading-[1.15] text-foreground ${lang === "ar" ? "font-arabic font-medium" : ""}`}>
            {t(
              lang,
              "Jade Room brings a contemporary perspective to Chinese dining in Riyadh — expressive flavours, thoughtfully prepared dishes and a setting designed for memorable lunches, dinners and shared occasions.",
              "يقدّم جايد روم رؤية عصرية للطعام الصيني في الرياض — نكهات مميزة، أطباق مُعدّة بعناية، وأجواء صُمّمت لتكون وجهةً لغداءات وعشاءات ومناسبات لا تُنسى."
            )}
          </p>
          <div className="hairline mt-12 mx-auto w-40" />
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 bg-secondary/50">
        <div className="container-editorial">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {pillars.map((p, i) => (
              <div key={i}>
                <span className="font-serif italic text-jade-sage text-lg">0{i + 1}</span>
                <div className="hairline w-12 my-4" />
                <h3 className="text-2xl md:text-3xl text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-7 text-[15px]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">{t(lang, "The Menu", "القائمة")}</p>
            <h2 className="text-4xl md:text-5xl">
              {t(lang, "Dishes designed for the table", "أطباق مصمّمة للطاولة")}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 mb-12">
            {categories.map((c) => (
              <div key={c} className="border-t border-border pt-4 text-sm md:text-base font-serif text-foreground/80">
                {c}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: dimsumImg, en: "Dim Sum", ar: "ديم سم" },
              { img: beefImg, en: "Wok Beef", ar: "لحم الووك" },
              { img: seafoodImg, en: "Seafood", ar: "المأكولات البحرية" },
            ].map((d) => (
              <figure key={d.en} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={d.img}
                    alt={t(lang, `${d.en} at Jade Room Riyadh`, `${d.ar} في جايد روم الرياض`)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 font-serif italic text-lg text-foreground/80">
                  {t(lang, d.en, d.ar)}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to={menuLink}
              onClick={() => track("view_menu", { source: "home_highlights" })}
              className="btn-primary"
            >
              {t(lang, "View the Menu", "عرض القائمة")}
              <ArrowRight size={16} className={lang === "ar" ? "rotate-180" : ""} />
            </Link>
          </div>
        </div>
      </section>

      {/* VISUAL STORY — magazine grid */}
      <section className="py-20 surface-jade grain text-ivory">
        <div className="container-editorial">
          <p className="eyebrow mb-4">{t(lang, "A Visual Story", "حكاية بصرية")}</p>
          <h2 className="text-4xl md:text-5xl max-w-2xl mb-14">
            {t(lang, "Inside the Jade Room experience", "من داخل تجربة جايد روم")}
          </h2>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <figure className="col-span-12 md:col-span-7 md:row-span-2">
              <img src={interiorImg} alt={t(lang, "Jade Room dining room interior", "الجناح الداخلي لجايد روم")}
                loading="lazy" className="w-full h-full object-cover aspect-[4/5]" />
            </figure>
            <figure className="col-span-6 md:col-span-5">
              <img src={sharingImg} alt={t(lang, "Sharing dishes at Jade Room", "أطباق المشاركة في جايد روم")}
                loading="lazy" className="w-full h-full object-cover aspect-square" />
            </figure>
            <figure className="col-span-6 md:col-span-5">
              <img src={mocktailImg} alt={t(lang, "Signature jade mocktail", "موكتيل جايد المميّز")}
                loading="lazy" className="w-full h-full object-cover aspect-square" />
            </figure>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 md:py-32">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">{t(lang, "Find Us", "زوروا جايد روم")}</p>
            <h2 className="text-4xl md:text-5xl mb-6">
              {t(lang, "In Al Malqa, at Sama Gallery", "في الملقا، سما جاليري")}
            </h2>
            <address className="not-italic text-foreground/85 leading-8 text-lg">
              {SITE.name}<br />
              {t(lang, SITE.address.line1, SITE.address.line1Ar)}<br />
              {t(lang, SITE.address.line2, SITE.address.line2Ar)}<br />
              {t(lang, SITE.address.country, SITE.address.countryAr)}
            </address>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-foreground/80">
                <Phone size={16} className="text-jade" />
                <a href={SITE.phoneHref} onClick={() => track("phone_click", { source: "home_location" })}
                  className="hover:text-jade">{SITE.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Instagram size={16} className="text-jade" />
                <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer"
                  onClick={() => track("instagram_click", { source: "home_location" })}
                  className="hover:text-jade">@jaderoom</a>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin size={16} className="text-jade" />
                <span>{SITE.openingHours}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ReserveButton lang={lang} source="home_location" />
              <a
                href={SITE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("get_directions", { source: "home_location" })}
                className="btn-outline"
              >
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
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 overflow-hidden">
        <img src={storyImg} alt="" aria-hidden="true" loading="lazy"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-jade-deep/75" />
        <div className="relative z-10 container-editorial text-center text-ivory">
          <p className="eyebrow text-jade-sage mb-6">{t(lang, "Reservations", "الحجوزات")}</p>
          <h2 className="text-5xl md:text-7xl max-w-3xl mx-auto leading-tight">
            {t(lang, "Your table at Jade Room awaits.", "طاولتكم في جايد روم بانتظاركم.")}
          </h2>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <ReserveButton lang="en" source="home_final_cta" />
            <ReserveButton lang="ar" source="home_final_cta" variant="outline" className="on-dark text-ivory" />
          </div>
          <p className="mt-6 text-sm text-ivory/60">
            <Link to={contactLink} className="underline underline-offset-4 hover:text-jade-sage">
              {t(lang, "Or contact us directly", "أو تواصلوا معنا مباشرة")}
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
