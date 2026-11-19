import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import cover from "@/assets/little-lamp-front-cover.jpg.asset.json";
import { cn } from "@/lib/utils";

export const coverUrl = cover.url;

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const btn = {
  primary: "bg-primary text-primary-foreground shadow-pop hover:-translate-y-0.5 active:translate-y-0.5",
  sun: "ribbon hover:-translate-y-0.5 active:translate-y-0.5",
  lamp: "bg-accent text-accent-foreground shadow-[0_6px_0_0_var(--wood)] hover:-translate-y-0.5",
  ghost: "border-2 border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground/15",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
};
export type BtnVariant = keyof typeof btn;
export const btnClass = (v: BtnVariant = "primary", extra?: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40",
    btn[v],
    extra,
  );

export function NavButton({ to, variant, children }: { to: "/" | "/about-author" | "/about-book" | "/contact"; variant?: BtnVariant; children: ReactNode }) {
  return <Link to={to} className={btnClass(variant)}>{children}</Link>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("ribbon inline-block px-4 py-1 font-display text-sm font-semibold", className)}>{children}</span>;
}

export function SectionTitle({ eyebrow, title, intro, light }: { eyebrow?: string; title: ReactNode; intro?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={cn("mt-4 text-4xl font-bold sm:text-5xl", light ? "text-primary-foreground" : "text-navy")}>{title}</h2>
      {intro && <p className={cn("mt-4 text-lg", light ? "text-primary-foreground/85" : "text-muted-foreground")}>{intro}</p>}
    </div>
  );
}

export function BookMockup({ className, size = "lg" }: { className?: string; size?: "md" | "lg" }) {
  return (
    <div className={cn("relative mx-auto [perspective:1600px]", size === "lg" ? "w-64 sm:w-80 lg:w-[22rem]" : "w-56 sm:w-64", className)}>
      <div className="absolute -inset-10 rounded-full bg-sun/50 blur-3xl animate-glow" aria-hidden />
      <motion.div
        className="relative [transform-style:preserve-3d]"
        initial={{ rotateY: -8 }}
        whileHover={{ rotateY: -2, scale: 1.02 }}
        animate={{ rotateY: -18 }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
      >
        <div className="absolute inset-y-1 -left-4 w-5 origin-right rounded-l-md bg-secondary [transform:rotateY(-90deg)]" aria-hidden />
        <div className="absolute inset-y-2 -right-2 w-3 rounded-r-sm bg-card" aria-hidden />
        <img
          src={coverUrl}
          alt="Little Lamp Volume 1: Shepherd Light book cover by Kudirat Ayoola"
          className="relative block w-full rounded-r-lg rounded-l-sm shadow-book"
          width={884}
          height={1202}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-navy/35 to-transparent" aria-hidden />
      </motion.div>
    </div>
  );
}

/* Small decorative SVGs inspired by the cover */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("text-sun", className)} aria-hidden>
      <path fill="currentColor" d="M20 0c1.5 10 5 13.5 20 20-15 6.5-18.5 10-20 20-1.5-10-5-13.5-20-20C15 13.5 18.5 10 20 0z" />
    </svg>
  );
}
export function LampIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 64" className={className} aria-hidden>
      <path d="M24 2a10 10 0 0 1 10 10" fill="none" stroke="var(--wood)" strokeWidth="4" strokeLinecap="round" />
      <rect x="12" y="12" width="24" height="6" rx="2" fill="var(--wood)" />
      <rect x="14" y="18" width="20" height="30" rx="4" fill="var(--sun)" stroke="var(--wood)" strokeWidth="3" />
      <ellipse cx="24" cy="34" rx="5" ry="8" fill="var(--accent)" />
      <rect x="10" y="48" width="28" height="7" rx="2" fill="var(--wood)" />
    </svg>
  );
}
export function Sheep({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 56" className={className} aria-hidden>
      <g fill="var(--card)" stroke="var(--border)" strokeWidth="1.5">
        <circle cx="22" cy="26" r="12" /><circle cx="36" cy="20" r="13" /><circle cx="50" cy="26" r="12" /><circle cx="36" cy="32" r="13" />
      </g>
      <ellipse cx="62" cy="24" rx="9" ry="8" fill="var(--wood-light)" />
      <circle cx="64" cy="22" r="1.5" fill="var(--navy)" />
      <rect x="24" y="40" width="4" height="12" rx="2" fill="var(--wood)" /><rect x="44" y="40" width="4" height="12" rx="2" fill="var(--wood)" />
    </svg>
  );
}
export function HillsDivider({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={cn("block h-16 w-full sm:h-24", className)} aria-hidden>
      <path fill="var(--meadow)" d="M0 70 C240 10 420 110 720 60 S1200 0 1440 50 V120 H0Z" opacity=".6" />
      <path fill="currentColor" d="M0 95 C300 40 520 120 820 80 S1250 50 1440 85 V120 H0Z" />
    </svg>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-sky-gradient pt-32 pb-28 text-center">
      <Sparkle className="absolute left-[8%] top-32 w-8 animate-float" />
      <Sparkle className="absolute right-[12%] top-44 w-5 animate-float [animation-delay:1.5s]" />
      <div className="absolute right-[6%] top-24 h-24 w-24 rounded-full bg-sun/80 blur-xl animate-glow" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 text-5xl font-bold text-primary-foreground drop-shadow-[0_4px_0_var(--navy)] sm:text-6xl">{title}</h1>
        {intro && <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/95">{intro}</p>}
        {children}
      </div>
      <HillsDivider className="absolute bottom-0 left-0 text-background" />
    </section>
  );
}
