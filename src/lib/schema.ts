import { SITE } from "@/config/site";

export const RESTAURANT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://jaderoom.sa/#restaurant",
  name: SITE.name,
  alternateName: SITE.nameAr,
  description:
    "Jade Room is a modern Chinese restaurant in Al Malqa, Riyadh — expressive flavours, refined hospitality and dishes designed for sharing.",
  servesCuisine: ["Chinese", "Modern Chinese", "Dim Sum"],
  priceRange: SITE.priceRange,
  telephone: SITE.phone,
  url: "/",
  image: [
    "/og-image.jpg",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: SITE.address.line2,
    addressCountry: "SA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  hasMenu: "/menu",
  acceptsReservations: "True",
  potentialAction: {
    "@type": "ReserveAction",
    target: SITE.reservationUrl,
  },
};

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: "/",
  inLanguage: ["en", "ar"],
};

export function breadcrumbLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
