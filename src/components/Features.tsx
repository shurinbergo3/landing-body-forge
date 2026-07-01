"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Dict } from "@/lib/dictionaries";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

// иконки по группам, в порядке плиток словаря (язык не важен - эмодзи одни)
const icons: Record<string, string[]> = {
  training: ["📝", "📋", "🏆", "⏱"],
  health: ["❤️", "🎯", "🌙", "📐"],
  progress: ["📈", "🔥", "🎖", "📚"],
};

export default function Features({ dict }: { dict: Dict }) {
  const [active, setActive] = useState(dict.features.groups[0].id);
  const group =
    dict.features.groups.find((g) => g.id === active) ?? dict.features.groups[0];

  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-narrow text-center">
          <p className="eyebrow justify-center">{dict.features.eyebrow}</p>
          <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tightest text-white">
            {dict.features.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-[1.05rem] leading-relaxed text-ash-400">
            {dict.features.sub}
          </p>
        </Reveal>

        {/* табы */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {dict.features.groups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`rounded-full px-5 py-2.5 text-[14px] font-medium transition-all duration-200 ease-apple ${
                active === g.id
                  ? "bg-volt text-black"
                  : "border border-white/12 text-ash-300 hover:border-white/25 hover:text-white"
              }`}
            >
              {g.label}
            </button>
          ))}
        </Reveal>

        {/* плитки */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {group.tiles.map((t, i) => (
                <motion.article
                  key={t.title}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease, delay: 0.05 + i * 0.07 }}
                  className="card group relative flex h-full flex-col overflow-hidden p-6 transition-colors duration-300 hover:border-white/12"
                >
                  <div className="glow-volt absolute -right-16 -top-16 h-40 w-40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-volt/12 text-2xl">
                    {icons[group.id]?.[i] ?? "▹"}
                  </span>
                  <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ash-400">
                    {t.tag}
                  </span>
                  <h3 className="mt-2 text-[1.2rem] font-semibold leading-tight tracking-tight text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ash-400">
                    {t.text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
