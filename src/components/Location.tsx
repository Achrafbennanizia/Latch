"use client";

import { motion } from "motion/react";
import { asset } from "@/lib/asset";
import { CONTENT, PHOTOS } from "@/lib/content";

export function Location() {
  return (
    <section id="location" className="section-panel section flex items-center bg-linen">
      <div className="section-inner grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{CONTENT.locationEyebrow}</p>
          <h2 className="display mt-3 text-[clamp(2.4rem,6vw,3.8rem)] text-ink">
            {CONTENT.locationTitle}
          </h2>
          <p className="lead mt-4">{CONTENT.locationBody}</p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="tracking-[0.16em] text-steam uppercase">Address</dt>
              <dd className="mt-1 text-base text-ink">
                {CONTENT.address}
                <br />
                {CONTENT.city}
              </dd>
            </div>
            <div>
              <dt className="tracking-[0.16em] text-steam uppercase">Phone</dt>
              <dd className="mt-1 text-base text-ink">
                <a
                  href={`tel:${CONTENT.phone.replace(/\D/g, "")}`}
                  className="link-ink"
                >
                  {CONTENT.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="tracking-[0.16em] text-steam uppercase">Transit</dt>
              <dd className="mt-1 text-base text-ink">
                Vine Street stop · 4 min walk
              </dd>
            </div>
          </dl>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(`${CONTENT.address}, ${CONTENT.city}`)}`}
            target="_blank"
            rel="noreferrer"
            className="btn-ink mt-8"
          >
            Open in maps
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="media-frame relative"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(PHOTOS.bread.src)}
            alt={PHOTOS.bread.alt}
            width={864}
            height={1152}
            className="aspect-[3/4] w-full object-cover md:aspect-[4/5]"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-5 pb-5 pt-16">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-butter uppercase">
              Shop floor
            </p>
            <p className="display mt-1 text-3xl text-mist">Fresh racks by 7:30</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
