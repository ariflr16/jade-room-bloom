import { useRouterState } from "@tanstack/react-router";

export type Lang = "en" | "ar";

export function useLang(): Lang {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

export function otherLangPath(pathname: string): string {
  if (pathname === "/ar") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3) || "/";
  if (pathname === "/") return "/ar";
  return `/ar${pathname}`;
}

export const t = <T>(lang: Lang, en: T, ar: T): T => (lang === "ar" ? ar : en);
