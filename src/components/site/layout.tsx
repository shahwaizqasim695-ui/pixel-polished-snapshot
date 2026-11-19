import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Mail, Camera, Users, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { LampIcon, btnClass } from "./ui";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about-author", label: "About the Author" },
  { to: "/about-book", label: "About the Book" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border-2 px-4 py-2 transition-all duration-300 sm:px-6",
          scrolled ? "border-sun bg-background/95 shadow-soft backdrop-blur" : "border-transparent bg-background/80 backdrop-blur",
        )}
      >
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <LampIcon className="h-9 w-7 shrink-0" />
          <span className="truncate font-display text-xl font-bold text-navy">{site.author}</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 font-display font-medium text-navy transition-colors hover:bg-secondary/60"
              activeProps={{ className: "bg-secondary text-navy" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href={site.buyUrl} className={btnClass("lamp", "hidden px-5 py-2 sm:inline-flex")}>Buy Now</a>
          <button
            className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="parchment mx-auto mt-3 flex max-w-6xl flex-col gap-1 p-4 lg:hidden"
            aria-label="Mobile"
          >
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                className="rounded-2xl px-4 py-3 font-display text-lg font-medium text-navy hover:bg-secondary/60"
                activeProps={{ className: "bg-secondary" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={site.buyUrl} className={btnClass("lamp", "mt-2")}>Buy Now</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const icons = { Instagram: Camera, Facebook: Users, YouTube: PlayCircle } as const;
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <LampIcon className="h-10 w-8" />
            <span className="font-display text-2xl font-bold">{site.author}</span>
          </div>
          <p className="mt-3 max-w-xs text-primary-foreground/75">
            Author of <em>Little Lamp</em>, a joyful devotional adventure for little hearts.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-sun">Explore</h3>
          <ul className="mt-3 space-y-2">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-primary-foreground/80 hover:text-sun">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-sun">Say hello</h3>
          <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-2 text-primary-foreground/80 hover:text-sun"><Mail className="h-4 w-4" />{site.email}</a>
          <div className="mt-4 flex gap-3">
            {site.socials.map((s) => {
              const I = icons[s.name as keyof typeof icons];
              return (
                <a key={s.name} href={s.url} aria-label={s.name} className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 transition hover:bg-sun hover:text-navy">
                  <I className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <p className="border-t border-primary-foreground/10 py-5 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} {site.author}. All rights reserved.
      </p>
    </footer>
  );
}
