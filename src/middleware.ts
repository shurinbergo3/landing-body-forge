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

  // /en живёт на чистом адресе - убираем префикс редиректом, чтобы не было дубля.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url);
  }

  // Русская версия остаётся с префиксом /ru.
  if (pathname === "/ru" || pathname.startsWith("/ru/")) {
    return;
  }

  // Всё остальное отдаём английской версией, не меняя адрес в браузере.
  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
