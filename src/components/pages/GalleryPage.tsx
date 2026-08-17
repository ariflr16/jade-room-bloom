import { useState } from "react";
import { X } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { useLang, t } from "@/lib/i18n";
import heroImg from "@/assets/hero.jpg";
import storyImg from "@/assets/story.jpg";
import interiorImg from "@/assets/interior.jpg";
import dimsumImg from "@/assets/dimsum.jpg";
import beefImg from "@/assets/beef.jpg";
import seafoodImg from "@/assets/seafood.jpg";
import mocktailImg from "@/assets/mocktail.jpg";
import sharingImg from "@/assets/sharing.jpg";

type GalleryItem = { src: string; category: "food" | "interior" | "experience"; alt: { en: string; ar: string } };

const ITEMS: GalleryItem[] = [
  { src: heroImg, category: "food", alt: { en: "Signature dim sum arrangement at Jade Room Riyadh", ar: "تشكيلة ديم سم مميزة في جايد روم الرياض" } },
  { src: dimsumImg, category: "food", alt: { en: "Steamed dumplings in bamboo basket", ar: "دمبلينغ مطبوخ بالبخار في سلة بامبو" } },
  { src: beefImg, category: "food", alt: { en: "Wok-fired beef on jade ceramic", ar: "لحم الووك على طبق جايد" } },
  { src: seafoodImg, category: "food", alt: { en: "Steamed whole sea bass", ar: "سمك القاروص المطبوخ بالبخار" } },
  { src: mocktailImg, category: "food", alt: { en: "Jade Garden mocktail", ar: "موكتيل حديقة جايد" } },
  { src: interiorImg, category: "interior", alt: { en: "Jade Room dining room, Al Malqa Riyadh", ar: "قاعة الطعام في جايد روم، الملقا الرياض" } },
  { src: storyImg, category: "experience", alt: { en: "Shared dishes at Jade Room", ar: "أطباق المشاركة في جايد روم" } },
  { src: sharingImg, category: "experience", alt: { en: "Guests sharing dim sum", ar: "ضيوف يتشاركون الديم سم" } },
];

export function GalleryPage() {
  const lang = useLang();
  const [filter, setFilter] = useState<"all" | "food" | "interior" | "experience">("all");
  const [open, setOpen] = useState<GalleryItem | null>(null);

  const filters = lang === "ar"
    ? [{ k: "all", l: "الكل" }, { k: "food", l: "الطعام" }, { k: "interior", l: "الداخلية" }, { k: "experience", l: "التجربة" }]
    : [{ k: "all", l: "All" }, { k: "food", l: "Food" }, { k: "interior", l: "Interiors" }, { k: "experience", l: "The Experience" }];

  const items = filter === "all" ? ITEMS : ITEMS.filter((i) => i.category === filter);

  return (
    <PageShell>
      <section className="pt-16 pb-8">
        <div className="container-editorial text-center max-w-2xl">
          <p className="eyebrow mb-5">{t(lang, "Gallery", "المعرض")}</p>
          <h1 className="text-5xl md:text-6xl mb-4">
            {t(lang, "Inside Jade Room", "من داخل جايد روم")}
          </h1>
          <p className="text-muted-foreground leading-7">
            {t(
              lang,
              "A closer look at the food, the room and the moments shared around the table.",
              "نظرة أقرب على الطعام والقاعة واللحظات التي تُقاسم حول الطاولة."
            )}
          </p>
        </div>
      </section>

      <div className="container-editorial mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((f) => (
            <button
              key={f.k}
              onClick={() => setFilter(f.k as typeof filter)}
              className={`px-4 py-2 text-sm border transition ${
                filter === f.k
                  ? "bg-jade-deep text-ivory border-jade-deep"
                  : "border-border text-foreground/70 hover:border-jade"
              }`}
            >
              {f.l}
            </button>
          ))}
        </div>
      </div>

      <section className="container-editorial pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setOpen(it)}
              className={`group overflow-hidden bg-muted ${i % 5 === 0 ? "md:row-span-2 md:col-span-2 aspect-square md:aspect-auto" : "aspect-[4/5]"}`}
              aria-label={t(lang, it.alt.en, it.alt.ar)}
            >
              <img
                src={it.src}
                alt={t(lang, it.alt.en, it.alt.ar)}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] surface-jade grain/95 flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-6 right-6 text-ivory/80 hover:text-ivory"
            onClick={() => setOpen(null)}
            aria-label={t(lang, "Close", "إغلاق")}
          >
            <X size={28} />
          </button>
          <img
            src={open.src}
            alt={t(lang, open.alt.en, open.alt.ar)}
            className="max-w-[92vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </PageShell>
  );
}
