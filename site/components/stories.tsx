import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";

const testimonials = [
  {
    quote:
      "Working with Antonietta was so powerful and eye-opening. Her energy is safe, clear, and empowering.",
    name: "Ayke",
    role: "Coaching Client",
    shift: false,
  },
  {
    quote:
      "I had the pleasure of attending one of Antonietta’s impactful workshops. She created such a warm, welcoming environment for growth.",
    name: "Silvana D",
    role: "Workshop Attendee",
    shift: true,
  },
  {
    quote:
      "What stands out most is her heart-driven approach. I urge every woman with questions about her finances to connect with Antonietta.",
    name: "Mary K",
    role: "Coaching Client",
    shift: false,
  },
];

export function Stories() {
  return (
    <section className="section-pad bg-sand" id="testimonials">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 lg:mb-20">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Stories of Transformation
            </p>
            <h2 className="max-w-lg text-[clamp(2rem,4vw,3.25rem)] text-deep">What women are saying</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-14 grid gap-4 sm:grid-cols-[1.3fr_1fr]">
            <div className="relative h-72 overflow-hidden rounded-2xl sm:h-80">
              <Image
                src="/images/community/workshop-attendees-group.jpeg"
                alt="A large group of workshop attendees, including testimonial client Ayke, gathered together with name tags at a Valuing Our Worth event"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 60vw"
              />
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-linen bg-ivory p-8">
              <p className="font-heading text-lg italic leading-snug text-deep">
                &ldquo;These are the faces behind the quotes — real women, real community, real transformation.&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.15em] text-pebble">
                Clients &amp; workshop attendees
              </p>
            </div>
          </div>
        </Reveal>

        <RevealStagger className="grid gap-8 md:grid-cols-3" stagger={0.15}>
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <div className={`relative rounded-2xl border border-linen bg-ivory p-10 ${t.shift ? "md:translate-y-6" : ""}`}>
                <div className="absolute -top-5 left-8 font-heading text-7xl leading-none text-sage/20">&ldquo;</div>
                <p className="relative z-10 mb-8 text-[1.0625rem] italic leading-[1.8] text-stone">{t.quote}</p>
                <div>
                  <div className="font-heading text-lg text-deep">{t.name}</div>
                  <div className="text-xs text-pebble">{t.role}</div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
