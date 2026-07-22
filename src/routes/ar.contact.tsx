import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/ContactPage";

export const Route = createFileRoute("/ar/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "التواصل والموقع | جايد روم الرياض" },
      { name: "description", content: "جايد روم في سما جاليري، الملقا، الرياض. العنوان وأوقات العمل ومعلومات التواصل ورابط الحجز." },
      { property: "og:title", content: "التواصل | جايد روم" },
      { property: "og:url", content: "/ar/contact" },
    ],
    links: [
      { rel: "canonical", href: "/ar/contact" },
      { rel: "alternate", hrefLang: "en", href: "/contact" },
      { rel: "alternate", hrefLang: "ar", href: "/ar/contact" },
    ],
  }),
});
