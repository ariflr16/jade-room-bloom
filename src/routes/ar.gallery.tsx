import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/pages/GalleryPage";

export const Route = createFileRoute("/ar/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "المعرض | جايد روم — مطعم صيني بالرياض" },
      { name: "description", content: "شاهد الطعام والأجواء واللحظات المُشاركة في جايد روم، مطعم صيني عصري في حي الملقا بالرياض." },
      { property: "og:title", content: "المعرض | جايد روم" },
      { property: "og:url", content: "/ar/gallery" },
    ],
    links: [
      { rel: "canonical", href: "/ar/gallery" },
      { rel: "alternate", hrefLang: "en", href: "/gallery" },
      { rel: "alternate", hrefLang: "ar", href: "/ar/gallery" },
    ],
  }),
});
