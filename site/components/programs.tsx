import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { links } from "@/lib/links";

const programs = [
  {
    tag: "Flagship Program",
    title: "Financially Fit Females",
    body: "A powerful group program where money becomes a source of empowerment, not stress. Through shared learning and community support, women discover that financial literacy is self-care and financial confidence is freedom.",
    href: links.workshopOnline,
    featured: true,
  },
  {
    tag: "1:1 Coaching",
    title: "Financial Empowerment",
    body: "Go deep into your money beliefs, break patterns, and build a relationship with money rooted in confidence and clarity.",
    href: links.calendly,
    featured: false,
  },
  {
    tag: "1:1 Coaching",
    title: "Navigating Transitions",
    body: "A safe space for support through divorce, career shifts, or personal reinvention. Rediscover inner strength and rebuild on your terms.",
    href: links.calendly,
    featured: false,
  },
  {
    tag: "1:1 Coaching",
    title: "Life & Career Coaching",
    body: "Reconnect with your worth, reclaim your voice, and step into work and life you were meant for with purpose and clarity.",
    href: links.calendly,
    featured: false,
  },
  {
    tag: "Workshop",
    title: "Entrepreneurship Workshop",
    body: "Your launchpad. A powerful space for women ready to build self-trust, back their ideas, and start their business journey.",
    href: links.workshopOnline,
    featured: false,
  },
  {
    tag: "Education",
    title: "School Programs (Yrs 9–12)",
    body: "Interactive workshops empowering young women with self-belief, financial literacy, and the tools to step confidently into their future.",
    href: links.calendly,
    featured: false,
  },
];

export function Programs() {
  return (
    <section className="section-pad bg-linen" id="programs">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest">Signature Programs</p>
            <h2 className="mx-auto mb-6 max-w-2xl text-[clamp(2rem,4vw,3.25rem)] text-deep">Programs & resources</h2>
            <p className="mx-auto max-w-lg text-[1.0625rem] leading-[1.8] text-stone">
              Personalised coaching and group workshops designed to transform your relationship with money and
              self.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-10 relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
            <Image
              src="/images/community/financially-fit-females-workshop.jpeg"
              alt="Ten women gathered around a conference table with workbooks during a Financially Fit Females workshop session"
              fill
              loading="lazy"
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="font-heading text-xl text-ivory sm:text-2xl">Financially Fit Females, in the room</p>
              <p className="mt-1 text-sm text-sand/70">
                Our flagship program brings women together to build real financial confidence, side by side.
              </p>
            </div>
          </div>
        </Reveal>

        <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {programs.map((p) => (
            <RevealItem key={p.title}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 ${
                  p.featured
                    ? "border-sage/30 bg-deep text-sand hover:shadow-elevated"
                    : "border-sand bg-ivory text-ink hover:border-sage/30 hover:shadow-lifted"
                }`}
              >
                <span
                  className={`mb-4 inline-block w-fit rounded-full px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider ${
                    p.featured ? "bg-sage/20 text-sage" : "bg-sand text-forest"
                  }`}
                >
                  {p.tag}
                </span>
                <h3 className={`mb-3 font-heading text-2xl ${p.featured ? "text-sage-light" : "text-deep"}`}>
                  {p.title}
                </h3>
                <p className={`mb-6 flex-1 text-[0.9375rem] leading-relaxed ${p.featured ? "text-sand/60" : "text-stone"}`}>
                  {p.body}
                </p>
                <div
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    p.featured ? "text-sage group-hover:text-sage-light" : "text-sage group-hover:text-forest"
                  }`}
                >
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
