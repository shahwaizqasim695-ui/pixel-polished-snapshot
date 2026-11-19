import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Camera, Users, PlayCircle, Send, Info } from "lucide-react";
import { site } from "@/lib/content";
import { validate, type Fields } from "@/lib/contact-validation";
import { PageHero, Reveal, btnClass } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kudirat Ayoola — Little Lamp" },
      { name: "description", content: "Get in touch with Kudirat Ayoola about Little Lamp, readings, events, and bulk orders." },
      { property: "og:title", content: "Contact Kudirat Ayoola" },
      { property: "og:description", content: "Send a message to the author of Little Lamp." },
    ],
  }),
  component: Contact,
});



const field = "mt-2 w-full rounded-2xl border-2 border-input bg-background px-4 py-3 text-navy outline-none transition focus:border-primary focus:ring-4 focus:ring-ring/20";

function Contact() {
  const [f, setF] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [notice, setNotice] = useState(false);
  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  function submit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(f);
    setErrors(errs);
    setNotice(Object.keys(errs).length === 0);
  }
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`)}`;
  const socials = [Camera, Users, PlayCircle];

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's say hello!" intro="Questions, school visits, church events or bulk orders — I'd love to hear from you." />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-5">
            <div className="rounded-[2rem] bg-primary p-8 text-primary-foreground">
              <h2 className="text-3xl font-bold">Get in touch</h2>
              <p className="mt-2 text-primary-foreground/80">I'll do my best to reply soon.</p>
              <div className="mt-6 space-y-4">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-sun" />{site.email}</p>
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-sun" />{site.location}</p>
              </div>
              <div className="mt-7 flex gap-3">
                {site.socials.map((s, i) => {
                  const I = socials[i];
                  return <a key={s.name} href={s.url} aria-label={s.name} className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/15 transition hover:bg-sun hover:text-navy"><I className="h-5 w-5" /></a>;
                })}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={submit} noValidate className="parchment grid gap-5 p-8 sm:grid-cols-2">
              {([["name", "Full Name", "text"], ["email", "Email", "email"]] as const).map(([k, l, t]) => (
                <label key={k} className="block font-display font-medium text-navy">{l}
                  <input type={t} value={f[k]} onChange={set(k)} className={field} aria-invalid={!!errors[k]} />
                  {errors[k] && <span className="mt-1 block font-sans text-sm text-destructive">{errors[k]}</span>}
                </label>
              ))}
              <label className="block font-display font-medium text-navy sm:col-span-2">Subject
                <input value={f.subject} onChange={set("subject")} className={field} aria-invalid={!!errors.subject} />
                {errors.subject && <span className="mt-1 block font-sans text-sm text-destructive">{errors.subject}</span>}
              </label>
              <label className="block font-display font-medium text-navy sm:col-span-2">Message
                <textarea rows={6} value={f.message} onChange={set("message")} className={field} aria-invalid={!!errors.message} />
                {errors.message && <span className="mt-1 block font-sans text-sm text-destructive">{errors.message}</span>}
              </label>
              <div className="sm:col-span-2">
                <button type="submit" className={btnClass("primary")}><Send className="h-4 w-4" />Send Message</button>
              </div>
              {notice && (
                <div role="status" className="flex gap-3 rounded-2xl bg-secondary/50 p-4 text-navy sm:col-span-2">
                  <Info className="mt-0.5 h-5 w-5 shrink-0" />
                  <p>Online sending isn't set up yet, so your message has not been sent. <a href={mailto} className="font-semibold underline">Open it in your email app</a> to send it now.</p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
