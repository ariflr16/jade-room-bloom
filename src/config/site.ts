// Central restaurant configuration. Update these values as final info is confirmed.

export const SITE = {
  name: "Jade Room",
  nameAr: "جايد روم",
  tagline: "Modern Chinese Dining in Riyadh",
  taglineAr: "مطعم صيني عصري في الرياض",
  address: {
    line1: "Sama Gallery",
    line2: "Al Malqa, Riyadh",
    country: "Saudi Arabia",
    line1Ar: "سما جاليري",
    line2Ar: "حي الملقا، الرياض",
    countryAr: "المملكة العربية السعودية",
  },
  // Placeholders — replace with confirmed values
  reservationUrl: "[SEVENROOMS_RESERVATION_URL]",
  phone: "[PHONE_NUMBER]",
  phoneHref: "tel:+966000000000",
  instagramUrl: "[INSTAGRAM_URL]",
  googleMapsUrl: "[GOOGLE_MAPS_URL]",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Sama+Gallery+Al+Malqa+Riyadh&output=embed",
  openingHours: "[OPENING_HOURS]",
  openingHoursShort: [
    { days: "Daily", hours: "12:00 – 00:00" }, // placeholder
  ],
  cuisine: "Chinese",
  priceRange: "$$$",
  geo: { lat: 24.7936, lng: 46.6280 }, // approximate Al Malqa — replace with confirmed
} as const;

export const CTA = {
  reserveEn: "Reserve a Table",
  reserveAr: "احجز طاولتك",
  exploreMenuEn: "Explore the Menu",
  exploreMenuAr: "تصفح القائمة",
  directionsEn: "Get Directions",
  directionsAr: "الاتجاهات",
};

// GA4 / GTM helper
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
  if (typeof w.gtag === "function") w.gtag("event", event, params);
}
