"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Dict } from "@/lib/dictionaries";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

// раскладка плиток bento: первая крупнее
const span = [
  "sm:col-span-2 lg:row-span-2",
  "",
  "",
  "sm:col-span-2",
];

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
              className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {group.tiles.map((t, i) => (
                <motion.article
                  key={t.title}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease, delay: 0.05 + i * 0.07 }}
                  className={`card group relative flex flex-col justify-between overflow-hidden p-7 transition-colors duration-300 hover:border-white/12 ${span[i] ?? ""}`}
                >
                  <div className="glow-volt absolute -right-16 -top-16 h-40 w-40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="eyebrow !text-ash-400">{t.tag}</span>
                  <div className="mt-auto pt-10">
                    <h3 className="text-[clamp(1.25rem,2vw,1.6rem)] font-semibold tracking-tight text-white">
                      {t.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-ash-400">
                      {t.text}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
