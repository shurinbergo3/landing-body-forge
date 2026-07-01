import Image from "next/image";
import type { Dict } from "@/lib/dictionaries";
import { storeUrl } from "@/lib/config";

export default function BlogCTA({
  dict,
  locale,
}: {
  dict: Dict;
  locale: string;
}) {
  return (
    <div className="relative my-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-ink-700 to-ink-800 p-7 sm:p-9">
      <div className="glow-volt pointer-events-none absolute -right-16 -top-16 h-56 w-56 blur-3xl" />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <Image
            src="/logo/logo.png"
            alt="Body Forge"
            width={52}
            height={52}
            className="rounded-[14px]"
          />
          <div>
            <p className="text-[1.15rem] font-bold tracking-tight text-white">
              {dict.blog.ctaTitle}
            </p>
            <p className="mt-1.5 max-w-md text-[14px] leading-relaxed text-ash-400">
              {dict.blog.ctaText}
            </p>
          </div>
        </div>
        <a
          href={storeUrl(locale)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-volt shrink-0 whitespace-nowrap"
        >
          {dict.blog.ctaButton}
        </a>
      </div>
    </div>
  );
}
