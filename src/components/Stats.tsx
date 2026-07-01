import type { Dict } from "@/lib/dictionaries";
import Reveal from "./Reveal";

export default function Stats({ dict }: { dict: Dict }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {dict.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center lg:text-left">
            <p className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-none tracking-tightest text-transparent">
              {s.value}
            </p>
            <p className="mt-3 text-[14px] leading-snug text-ash-400">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
