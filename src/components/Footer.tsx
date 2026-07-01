import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/lib/dictionaries";

export default function Footer({
  dict,
  locale,
}: {
  dict: Dict;
  locale: string;
}) {
  const year = 2026;
  return (
    <footer className="border-t border-white/[0.07] py-16">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-2.5">
              <Image
                src="/logo/logo.png"
                alt="Body Forge"
                width={36}
                height={36}
                className="rounded-[10px]"
              />
              <span className="text-[16px] font-bold tracking-tight text-white">
                BODY<span className="text-volt">FORGE</span>
              </span>
            </Link>
            <p className="mt-4 text-[13px] uppercase tracking-[0.16em] text-ash-400">
              {dict.footer.tagline}
            </p>
          </div>

          {dict.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ash-400">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-ash-300 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/[0.07] pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-col gap-2">
                {dict.footer.notes.map((n) => (
                  <p
                    key={n}
                    className="text-[12px] leading-relaxed text-ash-400/70"
                  >
                    {n}
                  </p>
                ))}
              </div>
              <p className="mt-5 text-[12px] text-ash-400/70">
                © {year} {dict.footer.rights}
              </p>
            </div>

            <a
              href={`https://buildbyalex.com${locale === "en" ? "/en" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 self-start rounded-full border border-white/[0.09] bg-white/[0.02] py-2.5 pl-5 pr-2.5 transition-all duration-300 ease-apple hover:border-orange-brand/40 hover:bg-white/[0.04] lg:self-auto"
            >
              <span
                className="pointer-events-none absolute -inset-px rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,138,61,0.18), rgba(255,138,61,0) 75%)",
                }}
                aria-hidden
              />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ash-400">
                {dict.footer.credit}
              </span>
              <span className="h-px w-6 bg-gradient-to-r from-white/10 to-orange-brand/40" />
              <span className="text-[17px] font-bold tracking-tight text-white">
                build<span className="text-ash-400">by</span>
                <span className="text-orange-brand">alex</span>
                <span className="text-orange-brand">.</span>
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.09] text-orange-brand transition-all duration-300 group-hover:border-orange-brand/40 group-hover:bg-orange-brand/10">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M2.5 10.5L10.5 2.5M10.5 2.5H4M10.5 2.5V9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
