import { NextRequest, NextResponse } from "next/server";
import { locales } from "./lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/privacy") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  // выбираем локаль по заголовку браузера: русский - на /ru, остальные - на /en
  const accept = req.headers.get("accept-language") ?? "";
  const preferred = accept.toLowerCase().startsWith("ru") ? "ru" : "en";

  const url = req.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
