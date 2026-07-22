import { createFileRoute } from "@tanstack/react-router";
import { OurStoryPage } from "@/components/pages/OurStoryPage";

export const Route = createFileRoute("/ar/our-story")({
  component: OurStoryPage,
  head: () => ({
    meta: [
      { title: "قصتنا | جايد روم الرياض" },
      { name: "description", content: "صوت عصري للطعام الصيني في الرياض — نكهات مميزة وضيافة راقية وأطباق مُعدّة للمشاركة في جايد روم بحي الملقا." },
      { property: "og:title", content: "قصتنا | جايد روم" },
      { property: "og:url", content: "/ar/our-story" },
    ],
    links: [
      { rel: "canonical", href: "/ar/our-story" },
      { rel: "alternate", hrefLang: "en", href: "/our-story" },
      { rel: "alternate", hrefLang: "ar", href: "/ar/our-story" },
    ],
  }),
});
