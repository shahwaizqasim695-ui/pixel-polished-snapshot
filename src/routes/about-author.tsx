import { createFileRoute } from "@tanstack/react-router";
import { Quote, User } from "lucide-react";
import { site } from "@/lib/content";
import { Eyebrow, LampIcon, NavButton, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/about-author")({
  head: () => ({
    meta: [
      { title: "About Kudirat Ayoola — Author of Little Lamp" },
      { name: "description", content: "Meet Kudirat Ayoola, author of the Little Lamp devotional for children in the Growing with God Series." },
      { property: "og:title", content: "About Kudirat Ayoola" },
      { property: "og:description", content: "Meet the author behind Little Lamp, a devotional for kids ages 5 to 8." },
    ],
  }),
  component: AboutAuthor,
});

function AboutAuthor() {
  return (
    <>
      <PageHero eyebrow="About the Author" title={site.author} intro="Helping little hearts grow with God, one joyful day at a time." />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="storybook-frame relative mx-auto grid aspect-[4/5] w-full max-w-sm place-items-center rounded-[2.5rem] bg-muted shadow-soft">
              <div className="text-center text-muted-foreground"><User className="mx-auto h-20 w-20" /><p className="mt-3 font-display">[Author portrait]</p></div>
              <span className="wood-sign absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-6 py-2 font-display text-lg font-semibold">{site.author}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-10">
            <div>
              <Eyebrow>Biography</Eyebrow>
              <h2 className="mt-4 text-4xl font-bold text-navy">Hello, friend!</h2>
              <p className="mt-4 text-lg text-muted-foreground">{site.author} is the author of <em>Little Lamp</em>, part of the {site.series}.</p>
              <p className="mt-3 text-lg text-muted-foreground">[Add the author's biography here — background, family, ministry, and what she loves.]</p>
            </div>
            <div className="parchment p-8">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-navy"><LampIcon className="h-10 w-8" />The inspiration behind the book</h3>
              <p className="mt-3 text-muted-foreground">[Share the story of why Little Lamp was written and what inspired the Shepherd Light theme.]</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-primary px-6 py-20 text-primary-foreground">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-12 w-12 text-sun" />
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">A personal message</h2>
          <p className="mt-5 font-display text-xl leading-relaxed text-primary-foreground/90">“[Add a warm personal note from the author to parents and young readers.]”</p>
          <p className="mt-4 text-sun">— {site.author}</p>
        </Reveal>
      </section>
      <section className="px-6 py-20 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold text-navy">Ready to meet Little Lamp?</h2>
          <div className="mt-7"><NavButton to="/about-book" variant="lamp">Explore the Book</NavButton></div>
        </Reveal>
      </section>
    </>
  );
}
