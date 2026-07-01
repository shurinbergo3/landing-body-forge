"use client";

import { motion } from "framer-motion";
import type { Dict } from "@/lib/dictionaries";
import { storeUrl } from "@/lib/config";
import PhoneFrame from "./PhoneFrame";
import AppStoreBadge from "./AppStoreBadge";

const ease = [0.16, 1, 0.3, 1] as const;

export default function DownloadCTA({
  dict,
  locale,
}: {
  dict: Dict;
  locale: string;
}) {
  const labelLine = locale === "ru" ? "Скачать в" : "Download on the";

  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="glow-volt pointer-events-none absolute left-1/2 top-1/4 h-[560px] w-[760px] -translate-x-1/2 animate-glow blur-3xl" />
      <div className="container-x relative">
        <div className="card relative overflow-hidden px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="glow-volt pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[680px] -translate-x-1/2 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative"
          >
            <h2 className="mx-auto max-w-3xl text-balance text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.04] tracking-tightest text-white">
              {dict.cta.title}{" "}
              <span className="text-volt">{dict.cta.accentWord}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-balance text-[1.1rem] leading-relaxed text-ash-300">
              {dict.cta.sub}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
              <AppStoreBadge
                href={storeUrl(locale)}
                label={labelLine}
                store={dict.hero.badge}
              />
              <a href="#features" className="btn-ghost">
                {dict.cta.secondary}
              </a>
            </div>
          </motion.div>

          {/* три парящих мокапа */}
          <div className="pointer-events-none mt-16 flex items-end justify-center gap-3 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -8 }}
              whileInView={{ opacity: 0.85, y: 0, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="hidden w-[clamp(8rem,16vw,11rem)] translate-y-6 sm:block"
            >
              <PhoneFrame src="/screens/programs.png" alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.2 }}
              className="z-10 w-[clamp(11rem,22vw,15rem)]"
            >
              <PhoneFrame src="/screens/active.png" alt="" glow />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 8 }}
              whileInView={{ opacity: 0.85, y: 0, rotate: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="hidden w-[clamp(8rem,16vw,11rem)] translate-y-6 sm:block"
            >
              <PhoneFrame src="/screens/library.png" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
