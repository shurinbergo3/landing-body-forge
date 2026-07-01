"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Dict } from "@/lib/dictionaries";
import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";

export default function ActiveShowcase({
  dict,
  locale,
}: {
  dict: Dict;
  locale: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 70, reduce ? 0 : -70]);
  const rotate = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 6, reduce ? 0 : -2]);

  return (
    <section
      id="active"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div className="glow-volt pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] blur-3xl" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <motion.div style={{ y, rotate }} className="order-2 mx-auto w-[clamp(15rem,38vw,20rem)] lg:order-1">
          <PhoneFrame
            src={`/screens/active-${locale === "ru" ? "ru" : "en"}.png`}
            alt={dict.active.eyebrow}
            glow
          />
        </motion.div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">{dict.active.eyebrow}</p>
            <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tightest text-white">
              {dict.active.title}{" "}
              <span className="text-volt">{dict.active.accentWord}</span>
            </h2>
            <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-ash-400">
              {dict.active.sub}
            </p>
          </Reveal>

          <div className="mt-9 space-y-5">
            {dict.active.points.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08}>
                <div className="flex gap-4">
                  <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-volt/12 text-[13px] font-bold text-volt">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 max-w-md text-[15px] leading-relaxed text-ash-400">
                      {p.text}
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
