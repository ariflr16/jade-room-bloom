import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { RESTAURANT_JSONLD, WEBSITE_JSONLD } from "@/lib/schema";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Jade Room | Modern Chinese Restaurant in Riyadh" },
      { name: "description", content: "Discover modern Chinese dining at Jade Room in Al Malqa, Riyadh. Explore our menu, experience dishes made for sharing, and reserve your table online." },
      { property: "og:title", content: "Jade Room | Modern Chinese Restaurant in Riyadh" },
      { property: "og:description", content: "Modern Chinese dining in Al Malqa, Riyadh. Dishes made for sharing. Reserve online." },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en" },
      { property: "og:locale:alternate", content: "ar" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "ar", href: "/ar" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(RESTAURANT_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(WEBSITE_JSONLD) },
    ],
  }),
});
