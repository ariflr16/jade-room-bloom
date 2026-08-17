import { PageShell } from "@/components/PageShell";
import { ReserveButton } from "@/components/ReserveButton";
import { useLang, t } from "@/lib/i18n";
import interiorImg from "@/assets/interior.jpg";
import storyImg from "@/assets/story.jpg";

export function OurStoryPage() {
  const lang = useLang();

  return (
    <PageShell>
      <section className="pt-20 pb-16">
        <div className="container-editorial max-w-3xl text-center">
          <p className="eyebrow mb-5">{t(lang, "Our Story", "قصتنا")}</p>
          <h1 className="text-5xl md:text-7xl leading-[1.05]">
            {t(lang, "A modern voice for Chinese dining in Riyadh", "صوتٌ عصري للطعام الصيني في الرياض")}
          </h1>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-editorial">
          <img src={interiorImg} alt={t(lang, "Interior of Jade Room, Riyadh", "الجناح الداخلي لجايد روم بالرياض")}
            loading="lazy" width={1600} height={1200}
            className="w-full aspect-[16/9] object-cover" />
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-editorial max-w-3xl space-y-10 text-lg leading-8 text-foreground/85">
          <p>
            {t(
              lang,
              "Jade Room was created for the guests of Riyadh who want their Chinese dining to feel both expressive and refined — food with real personality, served in a room that is calm, warm and considered.",
              "أُسّس جايد روم لضيوف الرياض الذين يرغبون بتجربة طعام صيني تجمع بين التعبير والرقيّ — أطباق ذات شخصية حقيقية، تُقدَّم في قاعة هادئة ودافئة ومدروسة."
            )}
          </p>
          <p>
            {t(
              lang,
              "Our menu is built around dishes designed to be shared. Dim sum baskets arrive first, followed by wok-fired mains, seafood and vegetables to draw the table together. Nothing is overworked; everything is prepared with intention.",
              "بُنيت قائمتنا حول أطباق مصمّمة لتُقاسم على الطاولة. تبدأ التجربة بسلال الديم سم، ثم أطباق الووك، والمأكولات البحرية، والخضروات التي تجمع الحاضرين حول موائد واحدة."
            )}
          </p>
          <div className="hairline w-24" />
          <p>
            {t(
              lang,
              "The room itself takes its cues from contemporary Chinese design — deep jade tones, warm brass, quiet textures and generous space at the table. It is a setting made for long lunches, considered dinners and the quiet celebrations in between.",
              "استوحيت القاعة من التصميم الصيني المعاصر — درجات جايد عميقة، ونحاس دافئ، وملمس هادئ، ومساحة سخيّة على الطاولة. أجواء مصمّمة لغداءات ممتدة، وعشاءات مدروسة، ومناسبات هادئة."
            )}
          </p>
          <p>
            {t(
              lang,
              "Jade Room sits within Sama Gallery in Al Malqa, part of Riyadh's evolving dining scene — and part of a wider invitation to gather, share and stay a little longer at the table.",
              "يقع جايد روم في سما جاليري بحي الملقا، ضمن مشهد الرياض المتطوّر لتجارب الطعام — ودعوة أوسع للاجتماع والمشاركة والبقاء لوقت أطول حول الطاولة."
            )}
          </p>
        </div>
      </section>

      <section className="relative py-24 my-8">
        <img src={storyImg} alt="" aria-hidden="true" loading="lazy"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 surface-jade grain/75" />
        <div className="relative container-editorial text-center text-ivory">
          <h2 className="text-4xl md:text-5xl mb-8 max-w-2xl mx-auto">
            {t(lang, "Join us at the table.", "انضمّوا إلينا حول الطاولة.")}
          </h2>
          <ReserveButton lang={lang} source="our_story_cta" />
        </div>
      </section>
    </PageShell>
  );
}
