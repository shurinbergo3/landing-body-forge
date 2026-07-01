import type { Dict } from "@/lib/dictionaries";
import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";

export default function Programs({ dict }: { dict: Dict }) {
  const p = dict.programs;
  return (
    <section
      id="programs"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div className="glow-warm pointer-events-none absolute -left-40 bottom-10 h-[440px] w-[440px] blur-3xl" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow">{p.eyebrow}</p>
            <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tightest text-white">
              {p.title} <span className="text-volt">{p.accentWord}</span>
            </h2>
            <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-ash-400">
              {p.sub}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-7 flex flex-wrap gap-2">
            {p.goals.map((g) => (
              <span
                key={g}
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-ash-300"
              >
                {g}
              </span>
            ))}
          </Reveal>

          <div className="mt-8 space-y-5">
            {p.points.map((pt, i) => (
              <Reveal key={pt.title} delay={0.12 + i * 0.08}>
                <div className="flex gap-4">
                  <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-volt/12 text-[13px] font-bold text-volt">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold text-white">
                      {pt.title}
                    </h3>
                    <p className="mt-1 max-w-md text-[15px] leading-relaxed text-ash-400">
                      {pt.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.05} className="mx-auto w-[clamp(15rem,38vw,20rem)]">
          <PhoneFrame src="/screens/programs.png" alt={p.title} glow />
        </Reveal>
      </div>
    </section>
  );
}
