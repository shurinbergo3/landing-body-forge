import Image from "next/image";
import type { Dict } from "@/lib/dictionaries";
import Reveal from "./Reveal";

export default function Gallery({
  dict,
  locale,
}: {
  dict: Dict;
  locale: string;
}) {
  return (
    <section className="overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="max-w-narrow">
          <p className="eyebrow">{dict.gallery.eyebrow}</p>
          <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tightest text-white">
            {dict.gallery.title}
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-6 lg:px-8">
          {dict.gallery.shots.map((s) => (
            <figure
              key={s.src}
              className="relative w-[240px] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/[0.06] sm:w-[280px]"
            >
              <Image
                src={`/shots/${locale}/${s.src}.png`}
                alt={s.alt}
                width={560}
                height={1212}
                className="h-auto w-full"
                sizes="280px"
              />
            </figure>
          ))}
          <div className="w-2 shrink-0" />
        </div>
      </Reveal>
    </section>
  );
}
