import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { links } from "@/lib/links";

export function CTA() {
  return (
    <section className="section-pad relative overflow-hidden bg-linen">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div
            id="ready-to-rise"
            style={{ scrollMarginTop: "6rem" }}
            className="relative overflow-hidden rounded-3xl bg-deep"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(82,183,136,0.1)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_20%,rgba(196,149,106,0.06)_0%,transparent_40%)]" />
            <div className="relative z-10 px-8 py-20 text-center md:px-16 md:py-28">
              <h2 className="mx-auto mb-6 max-w-2xl font-heading text-[clamp(2rem,4.5vw,3.5rem)] text-ivory">
                Ready to rise?
              </h2>
              <p className="mx-auto mb-10 max-w-md text-[1.0625rem] leading-[1.8] text-sand/50">
                Take the first step toward financial confidence, personal empowerment, and a life lived on your own
                terms.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5">
                <a
                  href={links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-sage px-8 py-4 text-[0.9375rem] font-semibold text-deep transition-all hover:-translate-y-px hover:bg-sage-light hover:shadow-elevated"
                >
                  Book Your Free Call
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </a>
                <a
                  href={links.workshopInPerson}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-sand/15 px-8 py-4 text-[0.9375rem] font-medium text-sand/60 transition-all hover:border-sage/40 hover:text-sage"
                >
                  Join 2026 In-Person Workshop
                </a>
                <a
                  href={links.workshopOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-sand/15 px-8 py-4 text-[0.9375rem] font-medium text-sand/60 transition-all hover:border-sage/40 hover:text-sage"
                >
                  Join 2026 Online Workshop
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <RevealStagger className="mt-20 grid gap-8 md:grid-cols-3" stagger={0.12}>
          <RevealItem>
            <div className="group">
              <div className="mb-4 font-heading text-4xl text-sage/25">01</div>
              <h3 className="mb-3 font-heading text-xl text-deep">Self-Assessment</h3>
              <p className="mb-5 text-[0.9375rem] leading-relaxed text-stone">
                Begin with the free Meta Dynamics Mini Profile Tool to discover your thinking style and growth
                areas.
              </p>
              <a
                href={links.assessment}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sage transition-colors hover:text-forest"
              >
                Take Assessment
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="group">
              <div className="mb-4 font-heading text-4xl text-sage/25">02</div>
              <h3 className="mb-3 font-heading text-xl text-deep">Introductory Call</h3>
              <p className="mb-5 text-[0.9375rem] leading-relaxed text-stone">
                Schedule a complimentary 30-minute consultation to discuss your goals and explore our programs.
              </p>
              <a
                href={links.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sage transition-colors hover:text-forest"
              >
                Book Your Call
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="group">
              <div className="mb-4 font-heading text-4xl text-sage/25">03</div>
              <h3 className="mb-3 font-heading text-xl text-deep">Join Our Community</h3>
              <p className="mb-5 text-[0.9375rem] leading-relaxed text-stone">
                Attend an upcoming workshop to start taking control of your financial future today.
              </p>
              <div className="relative mb-5 h-36 w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/community/graduation-celebration.jpeg"
                  alt="A festive group of women celebrating together, some wearing flower crowns and tiaras, at a Valuing Our Worth community event"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <a
                href="#ready-to-rise"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sage transition-colors hover:text-forest"
              >
                View Workshops
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}
