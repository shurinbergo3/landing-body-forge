import type { Dict } from "@/lib/dictionaries";
import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";

// тинты под категории, повторяют цветовое кодирование справочника в приложении
const tints = [
  "bg-volt/12 text-volt",
  "bg-violet-brand/15 text-violet-brand",
  "bg-mint-brand/15 text-mint-brand",
  "bg-red-500/15 text-red-400",
  "bg-blue-400/15 text-blue-300",
  "bg-orange-brand/15 text-orange-brand",
];

export default function Library({ dict }: { dict: Dict }) {
  const l = dict.library;
  return (
    <section
      id="library"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div className="glow-cool pointer-events-none absolute -right-40 top-20 h-[460px] w-[460px] blur-3xl" />
      <div className="container-x">
        <Reveal className="max-w-narrow">
          <p className="eyebrow">{l.eyebrow}</p>
          <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tightest text-white">
            {l.title} <span className="text-volt">{l.accentWord}</span>
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ash-400">
            {l.sub}
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.8fr_1fr]">
          <Reveal className="order-2 mx-auto w-[clamp(14rem,34vw,18rem)] lg:order-1">
            <PhoneFrame src="/screens/library.png" alt={l.title} glow />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="card relative overflow-hidden p-8">
                <div className="glow-volt absolute -right-16 -top-16 h-40 w-40 opacity-70 blur-2xl" />
                <p className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-[clamp(3rem,7vw,4.5rem)] font-bold leading-none tracking-tightest text-transparent">
                  {l.headline}
                </p>
                <p className="mt-3 text-[15px] text-ash-400">{l.headlineHint}</p>
              </div>
            </Reveal>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {l.categories.slice(1).map((c, i) => (
                <Reveal key={c.title} delay={0.05 + i * 0.06}>
                  <div className="card h-full p-5 transition-colors hover:border-white/12">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg ${tints[(i + 1) % tints.length]}`}
                      >
                        {c.icon}
                      </span>
                      <div>
                        <h3 className="text-[1rem] font-semibold leading-tight text-white">
                          {c.title}
                        </h3>
                        <p className="text-[11px] uppercase tracking-[0.12em] text-ash-400">
                          {c.tag}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-ash-400">
                      {c.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
