import Link from "next/link";
import {
  privacyDocs,
  privacyLocales,
  privacyLangShort,
  privacyLangLabels,
  privacyEmail,
  type PrivacyLocale,
} from "@/lib/privacy";

function ArrowUpRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden>
      <path
        d="M2.5 10.5L10.5 2.5M10.5 2.5H4M10.5 2.5V9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PrivacyPolicy({
  lang,
  homeHref,
}: {
  lang: PrivacyLocale;
  homeHref: string;
}) {
  const doc = privacyDocs[lang];

  return (
    <main className="relative overflow-hidden pb-32 pt-32 sm:pt-40">
      {/* мягкое свечение сверху */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(80% 60% at 50% -10%, rgba(191,255,0,0.10), rgba(191,255,0,0) 70%)",
        }}
        aria-hidden
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-[760px]">
          <Link
            href={homeHref}
            className="group inline-flex items-center gap-2 text-[13px] text-ash-400 transition-colors hover:text-white"
          >
            <span className="transition-transform duration-300 ease-apple group-hover:-translate-x-0.5">
              ‹
            </span>
            {doc.backLabel}
          </Link>

          {/* заголовок */}
          <header className="mt-8">
            <p className="eyebrow">{doc.eyebrow}</p>
            <h1 className="mt-4 text-balance text-[clamp(40px,7vw,76px)] font-semibold leading-[1.03] tracking-tightest text-white">
              {doc.title}
            </h1>
            <p className="mt-5 max-w-[46ch] text-[18px] leading-relaxed text-ash-300 sm:text-[19px]">
              {doc.lead}
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.02] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-volt" />
              <span className="text-[12px] uppercase tracking-[0.14em] text-ash-400">
                {doc.updatedLabel}
              </span>
              <span className="text-[12px] font-medium text-ash-300">
                {doc.updatedDate}
              </span>
            </div>
          </header>

          {/* переключатель языков - отдельная ссылка на каждый язык */}
          <nav
            aria-label={doc.langNavLabel}
            className="mt-10 flex flex-wrap items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] p-1.5 sm:inline-flex"
          >
            {privacyLocales.map((l) => {
              const active = l === lang;
              return (
                <Link
                  key={l}
                  href={`/privacy/${l}`}
                  hrefLang={l}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ease-apple ${
                    active
                      ? "bg-volt text-black shadow-[0_6px_24px_-8px_rgba(191,255,0,0.6)]"
                      : "text-ash-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span className="hidden sm:inline">{privacyLangLabels[l]}</span>
                  <span className="sm:hidden">{privacyLangShort[l]}</span>
                </Link>
              );
            })}
          </nav>

          {/* содержание */}
          <div className="mt-14 space-y-14">
            {doc.sections.map((section) => (
              <section key={section.n} className="scroll-mt-28">
                <div className="flex items-baseline gap-4">
                  <span className="select-none font-mono text-[14px] tabular-nums text-volt/70">
                    {section.n.padStart(2, "0")}
                  </span>
                  <h2 className="text-[24px] font-semibold tracking-tight text-white sm:text-[27px]">
                    {section.title}
                  </h2>
                </div>

                <div className="mt-5 space-y-5 pl-0 sm:pl-9">
                  {section.parts.map((part, i) => {
                    if (part.kind === "p") {
                      return (
                        <p
                          key={i}
                          className="text-[16px] leading-[1.7] text-ash-300"
                        >
                          {part.text}
                        </p>
                      );
                    }

                    if (part.kind === "sub") {
                      return (
                        <div key={i} className="space-y-3">
                          {part.title && (
                            <h3 className="text-[16px] font-semibold text-white">
                              {part.title}
                            </h3>
                          )}
                          {part.text && (
                            <p className="text-[16px] leading-[1.7] text-ash-300">
                              {part.text}
                            </p>
                          )}
                          {part.items && (
                            <ul className="space-y-2.5">
                              {part.items.map((it) => (
                                <li
                                  key={it}
                                  className="flex gap-3 text-[16px] leading-[1.6] text-ash-300"
                                >
                                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-volt/60" />
                                  <span>{it}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    }

                    if (part.kind === "list") {
                      return (
                        <ul key={i} className="space-y-2.5">
                          {part.items.map((it) => (
                            <li
                              key={it}
                              className="flex gap-3 text-[16px] leading-[1.6] text-ash-300"
                            >
                              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-volt/60" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    if (part.kind === "callout") {
                      return (
                        <div
                          key={i}
                          className="relative overflow-hidden rounded-2xl border border-volt/15 bg-volt/[0.04] p-5 pl-6"
                        >
                          <span className="absolute inset-y-0 left-0 w-[3px] bg-volt/60" />
                          <p className="text-[15px] leading-[1.65] text-white/85">
                            {part.text}
                          </p>
                        </div>
                      );
                    }

                    if (part.kind === "link") {
                      return (
                        <div key={i} className="space-y-2">
                          <p className="text-[16px] leading-[1.7] text-ash-300">
                            {part.text}
                          </p>
                          <a
                            href={part.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-volt transition-colors hover:text-volt-dim"
                          >
                            {part.label}
                            <span className="text-volt/70 transition-transform duration-300 ease-apple group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                              <ArrowUpRight />
                            </span>
                          </a>
                        </div>
                      );
                    }

                    if (part.kind === "contact") {
                      return (
                        <div
                          key={i}
                          className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 sm:p-8"
                        >
                          <p className="text-[16px] leading-[1.7] text-ash-300">
                            {part.text}
                          </p>
                          <a
                            href={`mailto:${privacyEmail}`}
                            className="btn-volt mt-5 !px-6 !py-3 text-[15px]"
                          >
                            {privacyEmail}
                          </a>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* низ */}
          <div className="mt-20 border-t border-white/[0.07] pt-8">
            <Link
              href={homeHref}
              className="group inline-flex items-center gap-2 text-[14px] text-ash-300 transition-colors hover:text-white"
            >
              <span className="transition-transform duration-300 ease-apple group-hover:-translate-x-0.5">
                ‹
              </span>
              {doc.backLabel}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
