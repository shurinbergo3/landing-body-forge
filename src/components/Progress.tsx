import type { Dict } from "@/lib/dictionaries";
import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";

export default function Progress({ dict }: { dict: Dict }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-warm pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] blur-3xl" />
      <div className="container-x">
        <Reveal className="max-w-narrow">
          <p className="eyebrow">{dict.progress.eyebrow}</p>
          <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tightest text-white">
            {dict.progress.title}{" "}
            <span className="text-volt">{dict.progress.accentWord}</span>
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ash-400">
            {dict.progress.sub}
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.8fr_1fr]">
          <Reveal className="order-2 mx-auto w-[clamp(14rem,34vw,18rem)] lg:order-1">
            <PhoneFrame src="/screens/stats.png" alt={dict.progress.title} glow />
          </Reveal>

          <div className="order-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-2">
            {dict.progress.cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <div className="card h-full p-6">
                  <p className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-none tracking-tightest text-transparent">
                    {c.value}
                  </p>
                  <p className="mt-3 text-[15px] font-semibold text-white">
                    {c.label}
                  </p>
                  <p className="mt-1 text-[13px] text-ash-400">{c.hint}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
