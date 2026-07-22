import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/pages/GalleryPage";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery | Jade Room — Chinese Restaurant Riyadh" },
      { name: "description", content: "See the food, interiors and shared moments at Jade Room, a modern Chinese restaurant in Al Malqa, Riyadh." },
      { property: "og:title", content: "Gallery | Jade Room Riyadh" },
      { property: "og:description", content: "Food, interiors and moments at Jade Room, Al Malqa." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [
      { rel: "canonical", href: "/gallery" },
      { rel: "alternate", hrefLang: "en", href: "/gallery" },
      { rel: "alternate", hrefLang: "ar", href: "/ar/gallery" },
    ],
  }),
});
