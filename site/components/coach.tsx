import Image from "next/image";
import { MapPin, Phone, Mail, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

const badges = ["ICG Ambassador 2026", "Coach of the Year 2026", "30+ Years in Finance"];

export function Coach() {
  return (
    <section className="section-pad relative overflow-hidden bg-deep" id="about">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="absolute -inset-4 rounded-3xl border border-sage/15" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/brand/profile.png"
                  alt="Antonietta Muraca — Money Confidence and Empowerment Coach"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 flex items-center gap-3 rounded-xl bg-ivory px-5 py-3.5 shadow-elevated lg:-right-8">
                <Image
                  src="/images/awards/coach-of-the-year.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-lg object-contain"
                />
                <div>
                  <div className="text-xs font-semibold text-deep">Coach of the Year</div>
                  <div className="text-[0.6875rem] text-pebble">ICG 2026</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sage">Meet Your Coach</p>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="mb-8 text-[clamp(2rem,4vw,3.25rem)] text-ivory">Antonietta Muraca</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mb-6 text-[1.0625rem] leading-[1.85] text-sand/65">
                Money Confidence, Business and Personal Empowerment Coach with more than 30 years walking in the
                world of finance, business, and financial education.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mb-10 text-[1.0625rem] leading-[1.85] text-sand/65">
                Today, her mission is to equip women with the knowledge, confidence, and clarity to take control of
                their financial futures and live lives of purpose and freedom.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mb-10 flex flex-wrap gap-3">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-sage/8 px-4 py-2 text-xs font-medium text-sage-light"
                  >
                    <Star className="h-3 w-3 fill-sage text-sage" />
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="space-y-3 border-t border-sand/10 pt-8">
                <span className="flex items-center gap-3 text-sm text-sand/50 transition-colors hover:text-sage">
                  <MapPin className="h-4 w-4 shrink-0 text-sage/70" strokeWidth={1.5} />
                  54B Watton Street, Werribee (by appointment)
                </span>
                <a
                  href="tel:0415945641"
                  className="flex items-center gap-3 text-sm text-sand/50 transition-colors hover:text-sage"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sage/70" strokeWidth={1.5} />
                  0415 945 641
                </a>
                <a
                  href="mailto:Valuingourworth@gmail.com"
                  className="flex items-center gap-3 text-sm text-sand/50 transition-colors hover:text-sage"
                >
                  <Mail className="h-4 w-4 shrink-0 text-sage/70" strokeWidth={1.5} />
                  Valuingourworth@gmail.com
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex items-center gap-5 rounded-2xl border border-sage/15 bg-sage/5 p-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
                  <Image
                    src="/images/community/laughing-together.jpeg"
                    alt="Antonietta laughing closely together with four women clients"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <p className="text-[0.9375rem] italic leading-relaxed text-sand/60">
                  &ldquo;The women I work with become family — the laughter is as real as the growth.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
