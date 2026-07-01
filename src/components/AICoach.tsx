"use client";

import { motion } from "framer-motion";
import type { Dict } from "@/lib/dictionaries";
import Reveal from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

const levelStyles: Record<string, string> = {
  green: "bg-volt text-volt",
  amber: "bg-orange-brand text-orange-brand",
  red: "bg-red-500 text-red-500",
};

export default function AICoach({ dict }: { dict: Dict }) {
  const ai = dict.ai;
  return (
    <section id="ai" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="glow-cool pointer-events-none absolute -right-32 top-10 h-[460px] w-[460px] blur-3xl" />
      <div className="glow-volt pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] blur-3xl" />

      <div className="container-x">
        {/* интро */}
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{ai.eyebrow}</p>
          <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tightest text-white">
            {ai.title} <span className="text-volt">{ai.accentWord}</span>
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ash-400">{ai.sub}</p>
        </Reveal>

        {/* доверие: модель и безопасность */}
        <Reveal delay={0.05} className="mt-8 grid gap-3 sm:grid-cols-3">
          {ai.trust.map((t) => (
            <div key={t.label} className="card p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ash-400">
                {t.label}
              </p>
              <p className="mt-1.5 font-mono text-[1.4rem] font-semibold text-volt">
                {t.value}
              </p>
              <p className="mt-1.5 text-[13.5px] leading-snug text-ash-400">{t.text}</p>
            </div>
          ))}
        </Reveal>

        {/* чат + что читает */}
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
          {/* окно чата */}
          <Reveal>
            <div className="card relative overflow-hidden p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3 border-b border-white/[0.06] pb-4">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-volt/15 text-volt">
                  ✦
                </span>
                <div className="leading-tight">
                  <p className="text-[15px] font-semibold text-white">AI Coach</p>
                  <p className="text-[12px] text-ash-400">gpt-5-mini · Body Forge</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-[12px] text-volt">
                  <span className="h-2 w-2 rounded-full bg-volt" /> online
                </span>
              </div>

              <div className="space-y-3">
                {ai.chat.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.18 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <p
                      className={`max-w-[85%] rounded-3xl px-4 py-3 text-[14.5px] leading-relaxed ${
                        m.role === "user"
                          ? "rounded-br-lg bg-volt text-black"
                          : "rounded-bl-lg bg-white/[0.05] text-ash-300"
                      }`}
                    >
                      {m.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* что читает */}
          <Reveal delay={0.1}>
            <h3 className="text-[1.3rem] font-semibold tracking-tight text-white">
              {ai.readsTitle}
            </h3>
            <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-ash-400">
              {ai.readsSub}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {ai.reads.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.05 }}
                  className="card p-4"
                >
                  <span className="text-lg">{r.icon}</span>
                  <p className="mt-2 text-[14.5px] font-semibold text-white">{r.title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-ash-400">{r.text}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* как анализирует */}
        <Reveal className="mt-20 max-w-2xl">
          <h3 className="text-balance text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-tight tracking-tightest text-white">
            {ai.analysisTitle}
          </h3>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ash-400">
            {ai.analysisSub}
          </p>
        </Reveal>

        {/* вердикт готовности */}
        <Reveal delay={0.05} className="mt-8">
          <div className="card overflow-hidden p-7 sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="eyebrow !text-ash-400">Readiness</p>
                <h4 className="mt-3 text-[1.4rem] font-semibold leading-snug tracking-tight text-white">
                  {ai.readiness.title}
                </h4>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ash-400">
                  {ai.readiness.text}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {ai.readiness.levels.map((lv, i) => (
                  <motion.div
                    key={lv.tag}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.1 }}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                  >
                    <span
                      className={`block h-2.5 w-2.5 rounded-full ${levelStyles[lv.tag]} shadow-[0_0_14px_currentColor]`}
                    />
                    <p className="mt-3 text-[13.5px] font-semibold text-white">{lv.label}</p>
                    <p className="mt-1.5 text-[12.5px] leading-snug text-ash-400">{lv.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* движки анализа */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ai.engines.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 0.07}>
              <div className="card h-full p-6 transition-colors hover:border-white/12">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-volt/12 text-xl text-volt">
                  {e.icon}
                </span>
                <h4 className="mt-4 text-[1.1rem] font-semibold text-white">{e.title}</h4>
                <p className="mt-2 text-[14px] leading-relaxed text-ash-400">{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* стили тренера */}
        <Reveal className="mt-16">
          <h3 className="text-[1.3rem] font-semibold tracking-tight text-white">
            {ai.stylesTitle}
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ai.styles.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="card flex items-center gap-3 p-4"
              >
                <span className="text-2xl">{s.emoji}</span>
                <div>
                  <p className="text-[14.5px] font-semibold text-white">{s.title}</p>
                  <p className="text-[12.5px] leading-snug text-ash-400">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* безопасность */}
        <Reveal delay={0.05}>
          <p className="mt-12 flex max-w-3xl items-start gap-2.5 text-[13.5px] leading-relaxed text-ash-400">
            <span className="mt-0.5 text-volt">🔒</span>
            {ai.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
