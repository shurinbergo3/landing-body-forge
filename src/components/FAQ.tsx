"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Dict } from "@/lib/dictionaries";
import Reveal from "./Reveal";

export default function FAQ({ dict }: { dict: Dict }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1fr]">
        <Reveal>
          <p className="eyebrow">{dict.faq.eyebrow}</p>
          <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.05] tracking-tightest text-white">
            {dict.faq.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-white/[0.07] border-t border-white/[0.07]">
            {dict.faq.items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={it.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[1.05rem] font-semibold text-white">
                      {it.q}
                    </span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-volt transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-ash-400">
                          {it.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
