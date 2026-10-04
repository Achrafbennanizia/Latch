"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { CONTENT } from "@/lib/content";

export function Catering() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const date = String(data.get("date") || "").trim();
    const guests = String(data.get("guests") || "").trim();
    const notes = String(data.get("notes") || "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Event date: ${date}`,
      `Guests: ${guests}`,
      "",
      notes,
    ].join("\n");

    const href = `mailto:${CONTENT.email}?subject=${encodeURIComponent(
      `LATCH catering — ${name || "request"}`,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("ready");
    window.location.href = href;
  }

  return (
    <section id="catering" className="section-panel section flex items-center bg-ink text-mist">
      <div className="section-inner grid w-full gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] text-butter uppercase">
            {CONTENT.cateringEyebrow}
          </p>
          <h2 className="display mt-3 text-[clamp(2.4rem,6vw,3.8rem)]">
            {CONTENT.cateringTitle}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-mist/75">
            {CONTENT.cateringBody}
          </p>
          <p className="mt-6 text-sm text-mist/55">
            Or write directly:{" "}
            <a
              href={`mailto:${CONTENT.email}`}
              className="text-butter transition-colors hover:text-white hover:underline"
            >
              {CONTENT.email}
            </a>
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[1.5rem] border border-mist/15 bg-mist/[0.04] p-5 md:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-[11px] tracking-[0.16em] text-mist/55 uppercase">
                Name
              </span>
              <input
                name="name"
                required
                autoComplete="name"
                className="field !bg-mist !text-ink"
                placeholder="Alex Rivera"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-[11px] tracking-[0.16em] text-mist/55 uppercase">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="field !bg-mist !text-ink"
                placeholder="alex@studio.com"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[11px] tracking-[0.16em] text-mist/55 uppercase">
                Event date
              </span>
              <input name="date" type="date" required className="field !bg-mist !text-ink" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[11px] tracking-[0.16em] text-mist/55 uppercase">
                Guests
              </span>
              <input
                name="guests"
                type="number"
                min={1}
                required
                className="field !bg-mist !text-ink"
                placeholder="24"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-[11px] tracking-[0.16em] text-mist/55 uppercase">
                What do you need?
              </span>
              <textarea
                name="notes"
                required
                rows={4}
                className="field !bg-mist !text-ink resize-y"
                placeholder="Breakfast trays, coffee service, dietary notes…"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button type="submit" className="btn-butter">
              {CONTENT.cateringCta}
            </button>
            {status === "ready" && (
              <p className="text-sm text-mist/60">Opening your mail app…</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
