"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/lib/dictionaries";
import { storeUrl } from "@/lib/config";

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
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        className={`flex w-full max-w-container items-center justify-between rounded-full px-3 py-2 transition-all duration-300 ease-apple sm:px-4 ${
          scrolled
            ? "glass"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link href={`/${locale}`} className="flex items-center gap-2.5 pl-1">
          <Image
            src="/logo/logo.png"
            alt="Body Forge"
            width={34}
            height={34}
            className="rounded-[10px]"
            priority
          />
          <span className="text-[15px] font-bold tracking-tight text-white">
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
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={`/${other}`}
            aria-label={dict.nav.langLabel}
            className="rounded-full border border-white/12 px-3 py-2 text-[13px] font-medium text-ash-300 transition-colors hover:border-white/25 hover:text-white"
          >
            {dict.nav.langLabel}
          </Link>
          <a
            href={storeUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-volt !px-5 !py-2 text-[14px]"
          >
            {dict.nav.download}
          </a>
        </div>
      </nav>
    </div>
  );
}
