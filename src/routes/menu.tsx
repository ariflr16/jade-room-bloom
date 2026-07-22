import { createFileRoute } from "@tanstack/react-router";
import { MenuPage } from "@/components/pages/MenuPage";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu | Jade Room — Modern Chinese in Riyadh" },
      { name: "description", content: "Explore the Jade Room menu — dim sum, seafood, wok-fired mains, noodles, rice and mocktails. Modern Chinese dining in Al Malqa, Riyadh." },
      { property: "og:title", content: "Menu | Jade Room Riyadh" },
      { property: "og:description", content: "Dim sum, seafood, wok-fired mains and mocktails at Jade Room, Al Malqa Riyadh." },
      { property: "og:url", content: "/menu" },
    ],
    links: [
      { rel: "canonical", href: "/menu" },
      { rel: "alternate", hrefLang: "en", href: "/menu" },
      { rel: "alternate", hrefLang: "ar", href: "/ar/menu" },
    ],
  }),
});
