"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { BlogFaq } from "@/lib/blog";

export default function BlogFAQ({
  items,
  title,
}: {
  items: BlogFaq[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  if (!items.length) return null;

  return (
    <section className="mt-16">
      <h2 className="text-[clamp(1.5rem,3vw,2.05rem)] font-bold tracking-tightest text-white">
        {title}
      </h2>
      <div className="mt-6 divide-y divide-white/[0.07] border-t border-white/[0.07]">
        {items.map((it, i) => {
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
                    <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-ash-400">
                      {it.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
