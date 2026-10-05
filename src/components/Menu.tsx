"use client";

import { motion } from "motion/react";
import { asset } from "@/lib/asset";
import { CONTENT, MENU, PHOTOS } from "@/lib/content";

export function Menu() {
  return (
    <section id="menu" className="section-panel section flex items-center bg-mist">
      <div className="section-inner w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{CONTENT.menuEyebrow}</p>
          <h2 className="display mt-3 text-[clamp(2.4rem,6vw,4rem)] text-ink">
            {CONTENT.menuTitle}
          </h2>
          <p className="lead mt-4">{CONTENT.menuLead}</p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="media-frame"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(PHOTOS.pastry.src)}
              alt={PHOTOS.pastry.alt}
              width={1152}
              height={864}
              className="aspect-[4/3] h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <MenuBlock title="Bakery" items={MENU.bakery} />
            <MenuBlock title="Café" items={MENU.cafe} />
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuBlock({
  title,
  items,
}: {
  title: string;
  items: readonly { name: string; note: string; price: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="text-sm font-semibold tracking-[0.18em] text-sage uppercase">
        {title}
      </h3>
      <ul className="mt-2">
        {items.map((item) => (
          <li key={item.name} className="menu-row">
            <div className="min-w-0">
              <p className="font-medium text-ink">{item.name}</p>
              <p className="mt-0.5 text-sm text-steam">{item.note}</p>
            </div>
            <p className="menu-row__price shrink-0 font-semibold tabular-nums text-ink transition-colors">
              {item.price}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
