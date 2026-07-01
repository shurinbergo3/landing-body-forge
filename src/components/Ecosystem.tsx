import Image from "next/image";
import type { Dict } from "@/lib/dictionaries";
import Reveal from "./Reveal";

export default function Ecosystem({
  dict,
  locale,
}: {
  dict: Dict;
  locale: string;
}) {
  return (
    <section
      id="ecosystem"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div className="glow-volt pointer-events-none absolute left-1/2 top-0 h-[460px] w-[680px] -translate-x-1/2 blur-3xl" />
      <div className="container-x">
        <Reveal className="mx-auto max-w-narrow text-center">
          <p className="eyebrow justify-center">{dict.ecosystem.eyebrow}</p>
          <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tightest text-white">
            {dict.ecosystem.title}{" "}
            <span className="text-volt">{dict.ecosystem.accentWord}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ash-400">
            {dict.ecosystem.sub}
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1fr]">
          <Reveal className="mx-auto w-[min(22rem,90%)]">
            <div className="relative">
              <div className="glow-cool absolute -inset-8 -z-10 blur-2xl" />
              <Image
                src={`/shots/${locale}/ecosystem.png`}
                alt={dict.ecosystem.title}
                width={1242}
                height={2688}
                className="h-auto w-full rounded-[2rem] border border-white/[0.06]"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
            </div>
          </Reveal>

          <div className="space-y-4">
            {dict.ecosystem.items.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.1}>
                <div className="card flex items-start gap-4 p-6 transition-colors hover:border-white/12">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-volt/12 text-xl text-volt">
                    {["🏝", "⌚", "❤️", "✦"][i]}
                  </span>
                  <div>
                    <h3 className="text-[1.15rem] font-semibold text-white">
                      {it.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ash-400">
                      {it.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
