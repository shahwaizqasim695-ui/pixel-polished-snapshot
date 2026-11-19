import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";
import { site } from "@/lib/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookMockup, Eyebrow, PageHero, Reveal, SectionTitle, Sparkle, btnClass } from "@/components/site/ui";
import { steps } from "@/components/site/steps";

export const Route = createFileRoute("/about-book")({
  head: () => ({
    meta: [
      { title: "Little Lamp Vol. 1: Shepherd Light — About the Book" },
      { name: "description", content: "A joyful devotional for kids ages 5 to 8: read, reflect, pray, then do something to put God's truth into action." },
      { property: "og:title", content: "Little Lamp Volume 1: Shepherd Light" },
      { property: "og:description", content: "A devotional for kids ages 5 to 8 from the Growing with God Series." },
    ],
  }),
  component: AboutBook,
});

const faqs = [
  { q: "What age is Little Lamp for?", a: "Little Lamp is written for children ages 5 to 8. Younger children can enjoy it read aloud with a grown-up." },
  { q: "How long does each devotion take?", a: "Each day is designed to be short and simple, so it fits easily into a morning, mealtime, or bedtime routine." },
  { q: "Can we read it together as a family?", a: "Yes! The Read, Reflect, Pray and Do Something steps are perfect for parents and children to share." },
  { q: "Is this part of a series?", a: `Yes — this is Volume 1 of the ${site.series}.` },
  { q: "Where can I buy the book?", a: "[Add purchase details and retailers here.]" },
];

function AboutBook() {
  return (
    <>
      <PageHero eyebrow={site.series} title="About the Book" intro="A joyful devotional adventure for little hearts." />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Reveal><BookMockup /></Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2"><Eyebrow>{site.ages}</Eyebrow><Eyebrow className="!bg-sky">A Devotional for Kids</Eyebrow></div>
            <h2 className="mt-5 text-5xl font-bold text-navy">Little <span className="text-accent">Lamp</span></h2>
            <p className="mt-2 font-display text-2xl text-primary">{site.volume}</p>
            <p className="mt-1 text-muted-foreground">by {site.author}</p>
            <p className="mt-6 text-lg text-muted-foreground">
              Under a big shady tree, beside a sparkling stream, a young shepherd opens God's Word with his little lamb close by. In <em>Little Lamp</em>, children learn that God is their loving Shepherd — and that they can shine His light wherever they go.
            </p>
            <ul className="mt-6 space-y-2">
              {["Daily devotions in simple, kid-friendly language", "Every day ends with a real activity", "Builds a lasting habit of time with God", "Great for home, Sunday school, and gifts"].map((t) => (
                <li key={t} className="flex items-start gap-2 text-navy"><Sparkle className="mt-1 h-4 w-4 shrink-0" />{t}</li>
              ))}
            </ul>
            <a href={site.buyUrl} className={btnClass("lamp", "mt-8")}>Buy Now</a>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted px-6 py-20">
        <SectionTitle eyebrow="How it works" title="Read • Reflect • Pray • Do Something!" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="text-center">
              <div className={`mx-auto grid h-20 w-20 place-items-center rounded-full ${s.tone} shadow-soft`}><s.icon className="h-9 w-9" /></div>
              <h3 className="mt-4 text-2xl font-bold text-navy">{s.title}</h3>
              <p className="mt-1 text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <SectionTitle eyebrow="Sneak peek" title="Inside the book" intro="Interior page previews coming soon." />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <Reveal key={n} delay={n * 0.08}>
              <div className="grid aspect-[3/4] place-items-center rounded-[1.5rem] border-2 border-dashed border-border bg-card text-muted-foreground transition hover:-rotate-1 hover:shadow-soft">
                <div className="text-center"><ImageIcon className="mx-auto h-10 w-10" /><p className="mt-2 font-display">[Preview page {n}]</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <SectionTitle eyebrow="Questions" title="Frequently asked" />
        <Reveal className="parchment mx-auto mt-10 max-w-3xl px-6 py-4 sm:px-10">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`}>
                <AccordionTrigger className="font-display text-lg text-navy">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <div className="mt-12 text-center"><a href={site.buyUrl} className={btnClass("sun")}>Get your copy</a></div>
      </section>
    </>
  );
}
