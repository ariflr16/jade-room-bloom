import { PageShell } from "@/components/PageShell";
import { useLang, t } from "@/lib/i18n";

export function PrivacyPage() {
  const lang = useLang();
  return (
    <PageShell>
      <section className="container-editorial py-20 max-w-3xl">
        <p className="eyebrow mb-4">{t(lang, "Legal", "قانوني")}</p>
        <h1 className="font-serif text-5xl mb-8">{t(lang, "Privacy Policy", "سياسة الخصوصية")}</h1>
        <div className="space-y-6 text-foreground/85 leading-7">
          <p>
            {t(
              lang,
              "This website is operated by Jade Room, Riyadh. We respect your privacy and are committed to protecting the personal data you share with us.",
              "يُدار هذا الموقع من قِبل مطعم جايد روم في الرياض. نحترم خصوصيتكم ونلتزم بحماية بياناتكم الشخصية."
            )}
          </p>
          <h2 className="font-serif text-2xl">{t(lang, "Information we collect", "المعلومات التي نجمعها")}</h2>
          <p>
            {t(
              lang,
              "When you make a reservation through our SevenRooms partner or contact us directly, we collect your name, contact details and reservation preferences.",
              "عند إجراء حجز عبر شريكنا SevenRooms أو التواصل معنا مباشرة، نجمع اسمكم وبيانات التواصل وتفضيلات الحجز."
            )}
          </p>
          <h2 className="font-serif text-2xl">{t(lang, "How we use it", "كيف نستخدمها")}</h2>
          <p>
            {t(
              lang,
              "We use your information solely to manage reservations, communicate about your visit and improve the guest experience.",
              "نستخدم بياناتكم فقط لإدارة الحجوزات، والتواصل بشأن زيارتكم، وتحسين تجربة الضيافة."
            )}
          </p>
          <h2 className="font-serif text-2xl">{t(lang, "Analytics", "تحليلات الاستخدام")}</h2>
          <p>
            {t(
              lang,
              "We use privacy-conscious analytics to understand how visitors use the website. No personal identifying information is shared with third parties for advertising.",
              "نستخدم أدوات تحليلية تحترم الخصوصية لفهم كيفية استخدام الموقع، دون مشاركة بيانات شخصية مع أطراف خارجية لأغراض إعلانية."
            )}
          </p>
          <h2 className="font-serif text-2xl">{t(lang, "Contact", "التواصل")}</h2>
          <p>
            {t(
              lang,
              "For any privacy questions, please contact us directly at Jade Room, Sama Gallery, Al Malqa, Riyadh.",
              "لأي استفسار يتعلّق بالخصوصية، يُرجى التواصل معنا مباشرة في جايد روم، سما جاليري، الملقا، الرياض."
            )}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
