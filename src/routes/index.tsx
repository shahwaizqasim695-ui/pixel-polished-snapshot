import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, Users, Smile, Clock } from "lucide-react";
import { steps } from "@/components/site/steps";
import meadow from "@/assets/meadow-landscape.jpg";
import { site } from "@/lib/content";
import { BookMockup, Eyebrow, HillsDivider, LampIcon, NavButton, Reveal, SectionTitle, Sheep, Sparkle, btnClass } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Little Lamp by Kudirat Ayoola — A Devotional for Kids 5–8" },
      { name: "description", content: "Little Hearts. Big Faith. A Light That Shines. Discover Little Lamp Volume 1: Shepherd Light, a joyful devotional for children." },
      { property: "og:title", content: "Little Lamp by Kudirat Ayoola" },
      { property: "og:description", content: "A joyful devotional adventure for little hearts, ages 5 to 8." },
    ],
  }),
  component: Home,
});


function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={meadow} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/45 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-32 pb-32 lg:grid-cols-[1.1fr_1fr] lg:pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Eyebrow>{site.series} · {site.ages}</Eyebrow>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl">
              Little Hearts. <span className="text-sun">Big Faith.</span><br />A Light That <span className="text-lamp">Shines.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-primary-foreground/90">
              Join a young shepherd and his lamb on a joyful devotional adventure — where every day your child reads, reflects, prays, and then does something to let God's light shine.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <NavButton to="/about-book" variant="sun">Explore the Book</NavButton>
              <NavButton to="/about-author" variant="ghost">Meet the Author</NavButton>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="animate-float">
            <BookMockup />
          </motion.div>
        </div>
        <Sparkle className="absolute left-[46%] top-36 w-6 animate-float" />
        <HillsDivider className="absolute bottom-0 left-0 text-background" />
      </section>

      {/* Welcome */}
      <section className="relative px-6 py-24">
        <Reveal className="parchment relative mx-auto max-w-3xl px-8 py-14 text-center sm:px-14">
          <LampIcon className="absolute -top-10 left-1/2 h-20 w-14 -translate-x-1/2" />
          <h2 className="text-4xl font-bold text-navy sm:text-5xl">Welcome to <span className="text-accent">Little Lamp</span></h2>
          <p className="mt-5 text-lg text-muted-foreground">
            “Your word is a lamp to my feet and a light to my path.” Little Lamp turns that promise into a daily habit — bite‑sized devotions filled with wonder, warmth, and simple steps that help children grow with God.
          </p>
        </Reveal>
        <Sheep className="absolute bottom-6 left-[6%] hidden w-24 animate-float md:block" />
        <Sheep className="absolute right-[8%] top-16 hidden w-16 -scale-x-100 animate-float [animation-delay:2s] md:block" />
      </section>

      {/* Featured book */}
      <section className="bg-primary px-6 py-24 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Reveal><BookMockup size="md" /></Reveal>
          <Reveal delay={0.1}>
            <span className="wood-sign inline-block px-5 py-2 font-display text-lg font-semibold">Volume 1 · Shepherd Light</span>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">A devotional for kids, ages 5 to 8</h2>
            <p className="mt-5 text-lg text-primary-foreground/85">
              Like a shepherd caring for his sheep, God watches over every little one. This first volume of the {site.series} helps children discover God's love through stories, prayers, and hands‑on activities.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Daily devotions", "Kid‑friendly prayers", "Real‑life activities", "Read together as a family"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Sparkle className="h-4 w-4 shrink-0" />{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.buyUrl} className={btnClass("sun")}>Buy Now</a>
              <NavButton to="/about-book" variant="ghost">Learn more</NavButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-24">
        <SectionTitle eyebrow="Every day, four little steps" title={<>Read • Reflect • Pray • <span className="text-accent">Do Something!</span></>} intro="Every day ends with a real activity to put God's truth into action." />
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group h-full rounded-[2rem] border-2 border-border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft">
                <div className={`grid h-14 w-14 place-items-center rounded-2xl ${s.tone} transition-transform group-hover:rotate-6`}><s.icon className="h-7 w-7" /></div>
                <p className="mt-5 font-display text-sm font-semibold text-muted-foreground">Step {i + 1}</p>
                <h3 className="text-2xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Meet the author */}
      <section className="relative overflow-hidden bg-meadow/25 px-6 py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[auto_1fr]">
          <Reveal>
            <div className="storybook-frame mx-auto grid h-64 w-64 place-items-center rounded-full bg-sky-gradient shadow-soft">
              <span className="font-display text-6xl font-bold text-primary-foreground">KA</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Meet the Author</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">{site.author}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kudirat Ayoola writes to help little hearts know God's love early and live it out every day. [Add a short author introduction here.]
            </p>
            <div className="mt-7"><NavButton to="/about-author">Read her story</NavButton></div>
          </Reveal>
        </div>
      </section>

      {/* Why families */}
      <section className="px-6 py-24">
        <SectionTitle eyebrow="For parents & teachers" title="Why families will love Little Lamp" />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {[
            { icon: Clock, t: "Just a few minutes a day", d: "Short devotions that fit busy mornings and cosy bedtimes." },
            { icon: Smile, t: "Made for ages 5 to 8", d: "Simple words, warm illustrations, and ideas kids can understand." },
            { icon: Users, t: "Brings families together", d: "Read side by side and talk about faith in everyday life." },
            { icon: Heart, t: "Faith in action", d: "Kids don't just learn about God's love — they get to share it." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 0.08}>
              <div className="flex gap-5 rounded-[2rem] bg-muted p-7">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-navy"><f.icon className="h-6 w-6" /></div>
                <div className="min-w-0"><h3 className="text-xl font-bold text-navy">{f.t}</h3><p className="mt-1 text-muted-foreground">{f.d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Scripture */}
      <section className="relative overflow-hidden bg-sky-gradient px-6 py-28 text-center">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun/60 blur-3xl animate-glow" aria-hidden />
        <Reveal className="relative mx-auto max-w-3xl">
          <Sparkle className="mx-auto w-10" />
          <blockquote className="mt-6 font-display text-3xl font-semibold leading-snug text-primary-foreground drop-shadow-[0_3px_0_var(--navy)] sm:text-5xl">
            “The Lord is my shepherd; I shall not want.”
          </blockquote>
          <p className="mt-5 font-display text-xl text-primary-foreground/90">Psalm 23:1</p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-navy px-8 py-14 text-primary-foreground sm:px-14">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-4xl font-bold sm:text-5xl">Light a little lamp <span className="text-sun">at home</span></h2>
              <p className="mt-4 text-lg text-primary-foreground/80">Give your child a daily moment with God that they'll look forward to.</p>
              <a href={site.buyUrl} className={btnClass("sun", "mt-8")}>Buy Little Lamp</a>
            </div>
            <BookMockup size="md" className="!w-40 sm:!w-48" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
