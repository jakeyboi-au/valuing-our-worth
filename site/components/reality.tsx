import { Lock, MessageCircle, TrendingDown } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";

const stats = [
  {
    icon: Lock,
    stat: "47%",
    label: "Superannuation gap",
    body: "Gender stereotypes and financial abuse create systemic inequality for Australian women.",
  },
  {
    icon: MessageCircle,
    stat: "2 in 5",
    label: "Uncomfortable discussing finances",
    body: "Women feel unable to talk about money with their partners, reinforcing isolation and silence.",
  },
  {
    icon: TrendingDown,
    stat: "13.3%",
    label: "Gender pay gap",
    body: "Pink tax and unpaid care responsibilities compound economic disadvantage across generations.",
  },
];

export function Reality() {
  return (
    <section className="section-pad relative bg-linen">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest">The Reality</p>
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.25rem)] text-deep">Challenges women face in Australia</h2>
            <p className="text-[1.0625rem] leading-[1.8] text-stone">
              These realities create a perfect storm that often leaves women feeling overwhelmed and undervalued.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid gap-6 md:grid-cols-3" stagger={0.15}>
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="group relative overflow-hidden rounded-2xl border border-sand bg-ivory p-10 transition-all duration-500 hover:border-warm/30 hover:shadow-lifted">
                <s.icon className="mb-6 h-6 w-6 text-sage" strokeWidth={1.5} />
                <div className="mb-2 font-heading text-4xl text-deep">{s.stat}</div>
                <div className="mb-4 text-sm font-medium uppercase tracking-wider text-forest">{s.label}</div>
                <p className="text-[0.9375rem] leading-relaxed text-stone">{s.body}</p>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-sage/5 transition-transform duration-500 group-hover:scale-150" />
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block h-[30px] w-full md:h-[50px]" aria-hidden="true">
          <path d="M0,60 L0,30 Q480,60 960,20 Q1200,0 1440,30 L1440,60 Z" fill="#F6F1EB" />
        </svg>
      </div>
    </section>
  );
}
