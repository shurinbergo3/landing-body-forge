import type { Dict } from "@/lib/dictionaries";
import Reveal from "./Reveal";

export default function Purpose({ dict }: { dict: Dict }) {
  const p = dict.purpose;
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-volt pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 blur-3xl opacity-70" />
      <div className="container-x">
        <Reveal className="mx-auto max-w-narrow text-center">
          <p className="eyebrow justify-center">{p.eyebrow}</p>
          <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tightest text-white">
            {p.title} <span className="text-volt">{p.accentWord}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-[1.05rem] leading-relaxed text-ash-400">
            {p.sub}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.outcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.08}>
              <div className="card h-full p-7 transition-colors hover:border-white/12">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-volt/12 text-2xl">
                  {o.icon}
                </span>
                <h3 className="mt-5 text-[1.15rem] font-semibold text-white">
                  {o.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ash-400">
                  {o.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
