import { createFileRoute } from "@tanstack/react-router";
import { OurStoryPage } from "@/components/pages/OurStoryPage";

export const Route = createFileRoute("/our-story")({
  component: OurStoryPage,
  head: () => ({
    meta: [
      { title: "Our Story | Jade Room Riyadh" },
      { name: "description", content: "A contemporary voice for Chinese dining in Riyadh — expressive flavours, refined hospitality and dishes made for sharing at Jade Room, Al Malqa." },
      { property: "og:title", content: "Our Story | Jade Room" },
      { property: "og:description", content: "Modern Chinese dining, thoughtfully composed for the table." },
      { property: "og:url", content: "/our-story" },
    ],
    links: [
      { rel: "canonical", href: "/our-story" },
      { rel: "alternate", hrefLang: "en", href: "/our-story" },
      { rel: "alternate", hrefLang: "ar", href: "/ar/our-story" },
    ],
  }),
});
