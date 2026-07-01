import type { Dict } from "@/lib/dictionaries";
import Reveal from "./Reveal";

export default function Loop({ dict }: { dict: Dict }) {
  const l = dict.loop;
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-cool pointer-events-none absolute -left-32 top-24 h-[440px] w-[440px] blur-3xl" />
      <div className="glow-warm pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] blur-3xl" />
      <div className="container-x">
        <Reveal className="mx-auto max-w-narrow text-center">
          <p className="eyebrow justify-center">{l.eyebrow}</p>
          <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tightest text-white">
            {l.title} <span className="text-volt">{l.accentWord}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-[1.05rem] leading-relaxed text-ash-400">
            {l.sub}
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* соединительная линия на десктопе */}
          <div className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-white/12 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-3">
            {l.steps.map((s, i) => (
              <Reveal key={s.tag} delay={i * 0.12}>
                <div className="relative flex flex-col">
                  <div className="relative z-10 mb-6 flex items-center gap-3">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-ink-800 font-mono text-[1.1rem] font-bold text-volt shadow-[0_0_24px_-6px_rgba(191,255,0,0.5)]">
                      {s.tag}
                    </span>
                    {i < l.steps.length - 1 && (
                      <span className="hidden text-2xl text-white/20 lg:ml-auto lg:block">
                        →
                      </span>
                    )}
                  </div>
                  <div className="card h-full p-7">
                    <h3 className="text-[1.3rem] font-semibold tracking-tight text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ash-400">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[13px] font-medium text-ash-300">
                <span className="animate-glow text-volt">↻</span>
                {l.repeat}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
