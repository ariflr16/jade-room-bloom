import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/ContactPage";

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Where is Jade Room located?", acceptedAnswer: { "@type": "Answer", text: "Jade Room is located at Sama Gallery, Al Malqa, Riyadh, Saudi Arabia." } },
    { "@type": "Question", name: "How can I reserve a table?", acceptedAnswer: { "@type": "Answer", text: "Reservations are made through our SevenRooms page — use the ‘Reserve a Table’ button on any page." } },
    { "@type": "Question", name: "What type of cuisine does Jade Room serve?", acceptedAnswer: { "@type": "Answer", text: "Modern Chinese — dim sum, wok-fired plates, seafood and shared mains." } },
    { "@type": "Question", name: "Is the menu designed for sharing?", acceptedAnswer: { "@type": "Answer", text: "Yes — most of the menu is composed for the table." } },
    { "@type": "Question", name: "Can Jade Room accommodate group reservations?", acceptedAnswer: { "@type": "Answer", text: "Yes — please contact us directly to arrange private dining and larger groups." } },
  ],
};

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Location | Jade Room Riyadh" },
      { name: "description", content: "Jade Room is at Sama Gallery, Al Malqa, Riyadh. Find our address, opening hours, contact details and reservation link." },
      { property: "og:title", content: "Contact | Jade Room Riyadh" },
      { property: "og:description", content: "Visit Jade Room at Sama Gallery, Al Malqa, Riyadh." },
      { property: "og:url", content: "/contact" },
    ],
    links: [
      { rel: "canonical", href: "/contact" },
      { rel: "alternate", hrefLang: "en", href: "/contact" },
      { rel: "alternate", hrefLang: "ar", href: "/ar/contact" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FAQ_LD) }],
  }),
});
