import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";

const pillars = [
  {
    title: "Personal Empowerment",
    body: "Guiding women from self-doubt to self-worth with clarity and courage.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&q=80&auto=format",
    shift: false,
  },
  {
    title: "Money Mindset",
    body: "Rewrite your money story, reclaim your worth, and own every room you walk into.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format",
    shift: true,
  },
  {
    title: "Business & Leadership",
    body: "Empowering women to lead with confidence in business and life.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format",
    shift: false,
  },
  {
    title: "Community & Youth",
    body: "Connection, accountability, and school programs building the next generation of confident women.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format",
    shift: true,
  },
];

export function Approach() {
  return (
    <section className="section-pad bg-sand" id="approach">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-20 max-w-xl lg:max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest">Our Approach</p>
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.25rem)] text-deep">Empowerment through action</h2>
            <p className="text-[1.0625rem] leading-[1.8] text-stone">
              Comprehensive support to transform every dimension of your life — from mindset to money to meaning.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {pillars.map((p) => (
            <RevealItem key={p.title}>
              <div className={`group ${p.shift ? "sm:translate-y-8" : ""}`}>
                <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep/40 to-transparent" />
                </div>
                <h3 className="mb-2 font-heading text-xl text-deep">{p.title}</h3>
                <p className="text-[0.875rem] leading-relaxed text-stone">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
