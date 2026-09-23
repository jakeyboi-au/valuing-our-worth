import Image from "next/image";
import { Reveal } from "@/components/reveal";

const pillars = [
  {
    title: "Rediscover Your Voice",
    body: "Find your courage and the joy of living fully aligned with who you really are.",
  },
  {
    title: "Build Financial Confidence",
    body: "Heal your relationship with money and break generational cycles of financial struggle.",
  },
  {
    title: "Step Into Your Power",
    body: "Create freedom, abundance, and a legacy that lasts for generations.",
  },
];

export function Mission() {
  return (
    <section className="section-pad bg-sand" id="mission">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest">Our Mission</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-8 max-w-lg text-[clamp(2rem,4vw,3.25rem)] text-deep">
                Empowering 100,000 women to rewrite their stories
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mb-10 max-w-md text-[1.0625rem] leading-[1.8] text-stone">
                Every woman deserves the confidence, freedom, and financial power to create a life she loves — on
                her terms. We&apos;re here to make that real.
              </p>
            </Reveal>
            <div className="space-y-8">
              {pillars.map((p, idx) => (
                <Reveal key={p.title} delay={0.3 + idx * 0.1}>
                  <div className="flex gap-5">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sage" />
                    <div>
                      <h3 className="mb-1 font-heading text-xl text-deep">{p.title}</h3>
                      <p className="text-[0.9375rem] leading-relaxed text-stone">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} y={60}>
            <div className="relative">
              <div className="relative aspect-[1400/2172] overflow-hidden rounded-2xl">
                <Image
                  src="/images/book/sovereign-woman-cover.jpg"
                  alt="The Sovereign Woman: Reclaim Your Worth, Build Your Wealth, Lead Your Legacy — book by Antonietta Muraca"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 max-w-xs rounded-xl bg-deep p-8 shadow-elevated lg:-left-12">
                <blockquote className="font-heading text-lg italic leading-snug text-sand">
                  &ldquo;When you change your story, you change your life.&rdquo;
                </blockquote>
                <cite className="mt-4 block text-sm font-medium not-italic text-sage">Antonietta Muraca</cite>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
