"use client";

import { motion } from "motion/react";
import { asset } from "@/lib/asset";
import { CONTENT, HOURS, PHOTOS } from "@/lib/content";

export function Hours() {
  return (
    <section id="hours" className="section-panel relative overflow-hidden">
      {/* Full-bleed shop plane */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(PHOTOS.coffee.src)}
        alt={PHOTOS.coffee.alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(23,28,25,0.92) 0%, rgba(23,28,25,0.78) 48%, rgba(23,28,25,0.45) 100%)",
        }}
        aria-hidden
      />

      <div className="section relative z-10 flex h-full min-h-[100dvh] items-center">
        <div className="section-inner grid w-full gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] text-butter uppercase">
              {CONTENT.hoursEyebrow}
            </p>
            <h2 className="display mt-3 text-[clamp(2.4rem,6vw,3.8rem)] text-mist">
              {CONTENT.hoursTitle}
            </h2>
            <p className="mt-4 max-w-sm text-mist/75">
              Last bread call is usually thirty minutes before close. Coffee until we run the final pull.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-mist/20"
          >
            {HOURS.map((row) => (
              <li key={row.day} className="hours-row text-mist">
                <span className="tracking-[0.04em]">{row.day}</span>
                <span className="tabular-nums text-mist/80">{row.time}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
