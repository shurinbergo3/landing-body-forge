"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dict } from "@/lib/dictionaries";
import Reveal from "./Reveal";

export default function Gallery({
  dict,
  locale,
}: {
  dict: Dict;
  locale: string;
}) {
  const shots = dict.gallery.shots;
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const src = (i: number) => `/shots/${locale}/${shots[i].src}.png`;

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({
        left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        Array.from(track.children).forEach((c, i) => {
          const el = c as HTMLElement;
          const cardCenter = el.offsetLeft + el.clientWidth / 2;
          const d = Math.abs(cardCenter - center);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setActive(best);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const step = (dir: number) => {
    const next = Math.min(Math.max(active + dir, 0), shots.length - 1);
    scrollTo(next);
  };

  const lightboxMove = useCallback(
    (dir: number) => {
      setLightbox((cur) =>
        cur === null
          ? cur
          : Math.min(Math.max(cur + dir, 0), shots.length - 1),
      );
    },
    [shots.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") lightboxMove(1);
      if (e.key === "ArrowLeft") lightboxMove(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, lightboxMove]);

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
        <div className="relative mt-12">
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 sm:px-6 lg:px-8"
          >
            {shots.map((s, i) => (
              <figure
                key={s.src}
                className="group relative w-[240px] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/[0.06] sm:w-[280px]"
              >
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={s.alt}
                  className="block w-full cursor-zoom-in outline-none"
                >
                  <Image
                    src={src(i)}
                    alt={s.alt}
                    width={560}
                    height={1212}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 240px, 280px"
                    loading={i < 2 ? "eager" : "lazy"}
                    priority={i === 0}
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              </figure>
            ))}
            <div className="w-2 shrink-0" />
          </div>

          <button
            type="button"
            onClick={() => step(-1)}
            disabled={active === 0}
            aria-label="Назад"
            className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition hover:bg-black/70 disabled:opacity-0 md:flex lg:left-6"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={active === shots.length - 1}
            aria-label="Вперёд"
            className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur transition hover:bg-black/70 disabled:opacity-0 md:flex lg:right-6"
          >
            <ChevronRight />
          </button>

          <div className="mt-2 flex justify-center gap-2">
            {shots.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Закрыть"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/15"
            onClick={() => setLightbox(null)}
          >
            <Close />
          </button>

          <button
            type="button"
            aria-label="Назад"
            disabled={lightbox === 0}
            onClick={(e) => {
              e.stopPropagation();
              lightboxMove(-1);
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/15 disabled:opacity-0 sm:left-8"
          >
            <ChevronLeft />
          </button>

          <figure
            className="relative max-h-[88vh] w-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src(lightbox)}
              alt={shots[lightbox].alt}
              width={560}
              height={1212}
              className="max-h-[88vh] w-auto rounded-[2rem]"
              sizes="90vw"
              priority
            />
            <figcaption className="mt-3 text-center text-sm text-white/60">
              {shots[lightbox].alt}
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Вперёд"
            disabled={lightbox === shots.length - 1}
            onClick={(e) => {
              e.stopPropagation();
              lightboxMove(1);
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/15 disabled:opacity-0 sm:right-8"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function Close() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
