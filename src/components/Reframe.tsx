import type { Dict } from "@/lib/dictionaries";
import Reveal from "./Reveal";

export default function Reframe({ dict }: { dict: Dict }) {
  const r = dict.reframe;
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-volt pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[560px] -translate-x-1/2 blur-3xl opacity-60" />
      <div className="container-x">
        <Reveal className="mx-auto max-w-narrow text-center">
          <p className="eyebrow justify-center">{r.eyebrow}</p>
          <h2 className="mt-5 text-balance text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-tightest">
            <span className="text-ash-400">{r.titleLead}</span>
            <br />
            <span className="text-white">
              {r.titleAccent.split("Body Forge").length > 1 ? (
                <>
                  <span className="text-volt">Body Forge</span>
                  {r.titleAccent.replace("Body Forge", "")}
                </>
              ) : (
                r.titleAccent
              )}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-[1.05rem] leading-relaxed text-ash-400">
            {r.sub}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {r.points.map((p, i) => (
            <Reveal key={p.title} delay={0.08 + i * 0.08}>
              <div className="card h-full p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-volt/12 text-[13px] font-bold text-volt">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-[1.1rem] font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ash-400">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
