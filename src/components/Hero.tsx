"use client";

import { motion } from "motion/react";
import { asset } from "@/lib/asset";
import { CONTENT, PHOTOS } from "@/lib/content";
import { smoothScrollToId } from "@/lib/scroll-to";

export function Hero() {
  return (
    <section id="top" className="section-panel relative overflow-hidden">
      {/* Full-bleed shop photo — edge to edge */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(PHOTOS.hero.src)}
        alt={PHOTOS.hero.alt}
        className="absolute inset-0 h-full w-full object-cover object-[50%_42%]"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(23,28,25,0.45) 0%, rgba(23,28,25,0.2) 38%, rgba(23,28,25,0.72) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex h-full min-h-[100dvh] max-w-7xl flex-col justify-end px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-28 md:px-8 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] font-semibold tracking-[0.28em] text-butter uppercase"
        >
          {CONTENT.kind} · {CONTENT.neighborhood}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-3 text-[clamp(4.8rem,18vw,9.5rem)] text-mist"
        >
          {CONTENT.brand}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-md text-lg text-mist/90 md:text-xl"
        >
          {CONTENT.heroLine}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToId("menu", 1.45);
            }}
            className="btn-butter"
          >
            {CONTENT.heroCta}
          </a>
          <a
            href="#catering"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToId("catering", 1.45);
            }}
            className="btn-ghost"
          >
            {CONTENT.heroSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
