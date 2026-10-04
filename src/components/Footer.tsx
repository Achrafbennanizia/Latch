import { CONTENT } from "@/lib/content";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#hours", label: "Hours" },
  { href: "#location", label: "Location" },
  { href: "#catering", label: "Catering" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="display text-2xl text-ink">{CONTENT.brand}</p>
          <p className="mt-2 text-sm text-steam">
            {CONTENT.kind} · {CONTENT.address}, {CONTENT.city}
          </p>
          <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="link-ink text-steam">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="text-sm text-steam">
          <a href={`mailto:${CONTENT.email}`} className="link-ink">
            {CONTENT.email}
          </a>
          <p className="mt-1">© 2026 {CONTENT.brand} · portfolio concept</p>
        </div>
      </div>
    </footer>
  );
}
