"use client";

import { motion } from "motion/react";
import { CONTENT } from "@/lib/content";
import { smoothScrollToId } from "@/lib/scroll-to";

const LINKS = [
  { id: "menu", label: "Menu" },
  { id: "hours", label: "Hours" },
  { id: "location", label: "Location" },
  { id: "catering", label: "Catering" },
] as const;

function go(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollToId(id, 1.45);
  };
}

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]"
    >
      <div
        className="absolute inset-0 border-b border-white/10"
        style={{
          background: "rgba(23, 28, 25, 0.94)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 md:px-8 md:py-4">
        <a
          href="#top"
          onClick={go("top")}
          className="display text-lg tracking-[0.08em] transition-opacity hover:opacity-80 md:text-xl"
          style={{ color: "#f6f7f5" }}
        >
          {CONTENT.brand}
        </a>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={go(link.id)}
              className="nav-link"
              style={{ color: "rgba(246, 247, 245, 0.82)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#catering"
          onClick={go("catering")}
          className="nav-cta rounded-full px-3 py-2 text-[10px] font-bold tracking-[0.14em] sm:px-4 sm:text-xs"
          style={{
            background: "#d9a93a",
            color: "#171c19",
          }}
        >
          CATERING
        </a>
      </div>
    </motion.header>
  );
}
