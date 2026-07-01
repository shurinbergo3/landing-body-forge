"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Dict } from "@/lib/dictionaries";
import { storeUrl } from "@/lib/config";
import PhoneFrame from "./PhoneFrame";
import AppStoreBadge from "./AppStoreBadge";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero({
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
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const ghostY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const labelLine = dict.hero.badge === "App Store" && locale === "ru"
    ? "Скачать в"
    : "Download on the";

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-36 lg:pt-48"
    >
      {/* фоновые свечения */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-volt absolute -left-32 top-10 h-[520px] w-[520px] animate-glow blur-3xl" />
        <div className="glow-warm absolute -right-24 top-40 h-[460px] w-[460px] blur-3xl" />
        <div className="glow-cool absolute bottom-0 left-1/3 h-[420px] w-[420px] blur-3xl" />
        <div className="grain absolute inset-0 opacity-[0.035]" />
      </div>

      {/* призрачное слово */}
      <motion.div
        style={{ y: ghostY }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 select-none text-center"
      >
        <span className="text-[26vw] font-black leading-none tracking-tightest text-white/[0.035]">
          {dict.hero.ghost}
        </span>
      </motion.div>

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="min-w-0 text-center lg:text-left"
        >
          <motion.p variants={item} className="eyebrow justify-center lg:justify-start">
            {dict.hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 text-balance text-[clamp(2.6rem,7vw,5.2rem)] font-bold leading-[1.02] tracking-tightest text-white"
          >
            {dict.hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block text-volt">{dict.hero.accentWord}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-narrow text-balance text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-ash-300 lg:mx-0"
          >
            {dict.hero.sub}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start"
          >
            <AppStoreBadge
              href={storeUrl(locale)}
              label={labelLine}
              store={dict.hero.badge}
            />
            <a href="#active" className="btn-ghost">
              {dict.hero.secondary}
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-7 flex items-center justify-center gap-2.5 text-[13px] text-ash-400 lg:justify-start"
          >
            <span className="text-volt" aria-hidden>
              ★★★★★
            </span>
            <span>{dict.hero.rating}</span>
          </motion.div>
        </motion.div>

        {/* мокап */}
        <motion.div
          style={{ y: phoneY }}
          initial={{ opacity: 0, y: 60, rotateZ: 4 }}
          animate={{ opacity: 1, y: 0, rotateZ: 0 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          className="relative mx-auto w-[clamp(15rem,42vw,21rem)]"
        >
          <PhoneFrame
            src="/screens/active.png"
            alt="Body Forge"
            priority
            glow
            video={`/video/hero-${locale === "ru" ? "ru" : "en"}.mp4`}
            poster={`/video/hero-${locale === "ru" ? "ru" : "en"}-poster.jpg`}
          />
        </motion.div>
      </div>
    </section>
  );
}
