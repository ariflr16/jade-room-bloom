import { createFileRoute } from "@tanstack/react-router";
import { MenuPage } from "@/components/pages/MenuPage";

export const Route = createFileRoute("/ar/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "القائمة | جايد روم — مطعم صيني في الرياض" },
      { name: "description", content: "تصفّح قائمة جايد روم — ديم سم، مأكولات بحرية، أطباق على الووك، نودلز، أرز، وموكتيلز. مطعم صيني عصري في الملقا بالرياض." },
      { property: "og:title", content: "القائمة | جايد روم الرياض" },
      { property: "og:url", content: "/ar/menu" },
    ],
    links: [
      { rel: "canonical", href: "/ar/menu" },
      { rel: "alternate", hrefLang: "en", href: "/menu" },
      { rel: "alternate", hrefLang: "ar", href: "/ar/menu" },
    ],
  }),
});
