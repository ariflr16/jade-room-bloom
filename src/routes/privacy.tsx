import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/pages/PrivacyPage";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Jade Room" },
      { name: "description", content: "Privacy policy for Jade Room, Riyadh." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});
