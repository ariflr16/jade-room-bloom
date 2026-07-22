import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { RESTAURANT_JSONLD } from "@/lib/schema";

export const Route = createFileRoute("/ar/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "جايد روم | مطعم صيني عصري في الرياض" },
      { name: "description", content: "اكتشف تجربة الطعام الصيني العصري في جايد روم بحي الملقا في الرياض. تصفح القائمة واحجز طاولتك أونلاين." },
      { property: "og:title", content: "جايد روم | مطعم صيني عصري في الرياض" },
      { property: "og:description", content: "مطعم صيني عصري في حي الملقا بالرياض — أطباق مصمّمة للمشاركة." },
      { property: "og:url", content: "/ar" },
      { property: "og:locale", content: "ar" },
      { property: "og:locale:alternate", content: "en" },
    ],
    links: [
      { rel: "canonical", href: "/ar" },
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "ar", href: "/ar" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(RESTAURANT_JSONLD) }],
  }),
});
