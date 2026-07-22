import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/pages/PrivacyPage";

export const Route = createFileRoute("/ar/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "سياسة الخصوصية | جايد روم" },
      { name: "description", content: "سياسة الخصوصية لمطعم جايد روم في الرياض." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/ar/privacy" }],
  }),
});
