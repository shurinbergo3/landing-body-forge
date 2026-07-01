import { NextRequest, NextResponse } from "next/server";

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

  // /ru живёт на чистом адресе - убираем префикс редиректом, чтобы не было дубля.
  if (pathname === "/ru" || pathname.startsWith("/ru/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url);
  }

  // Английская версия остаётся с префиксом /en.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return;
  }

  // Всё остальное отдаём русской версией, не меняя адрес в браузере.
  const url = req.nextUrl.clone();
  url.pathname = `/ru${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
