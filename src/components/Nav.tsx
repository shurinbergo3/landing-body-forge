"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/lib/dictionaries";
import { storeUrl } from "@/lib/config";
import { localePath } from "@/lib/i18n";

export default function Nav({ dict, locale }: { dict: Dict; locale: string }) {
  const [scrolled, setScrolled] = useState(false);
  const other = locale === "ru" ? "en" : "ru";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`flex w-full max-w-container items-center justify-between gap-2 rounded-full px-2.5 py-2 transition-all duration-300 ease-apple sm:px-4 ${
          scrolled
            ? "glass"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link href={localePath(locale)} className="flex min-w-0 items-center gap-2 pl-0.5 sm:gap-2.5 sm:pl-1">
          <Image
            src="/logo/logo.png"
            alt="Body Forge"
            width={34}
            height={34}
            className="rounded-[10px]"
            priority
          />
          <span className="hidden truncate text-[15px] font-bold tracking-tight text-white min-[360px]:inline">
            BODY<span className="text-volt">FORGE</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {dict.nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[14px] text-ash-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href={dict.blog.href}
              className="rounded-full px-3.5 py-2 text-[14px] text-ash-300 transition-colors hover:text-white"
            >
              {dict.blog.nav}
            </Link>
          </li>
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={localePath(other)}
            aria-label={dict.nav.langLabel}
            className="rounded-full border border-white/12 px-2.5 py-2 text-[13px] font-medium text-ash-300 transition-colors hover:border-white/25 hover:text-white sm:px-3"
          >
            {dict.nav.langLabel}
          </Link>
          <a
            href={storeUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-volt !px-4 !py-2 text-[14px] sm:!px-5"
          >
            {dict.nav.download}
          </a>
        </div>
      </nav>
    </div>
  );
}
