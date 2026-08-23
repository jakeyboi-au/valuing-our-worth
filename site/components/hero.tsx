"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ArrowUpRight, ArrowDown } from "lucide-react";
import { FadeIn } from "@/components/reveal";
import { links } from "@/lib/links";

const stats = [
  { num: "30+", label: "Years in Finance" },
  { num: "100K", label: "Women — Our Mission" },
  { num: "2026", label: "Coach of the Year" },
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-deep">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(82,183,136,0.1)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(82,183,136,0.05)_0%,transparent_50%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-between px-6 pt-32 pb-12 lg:px-12 lg:pt-40 lg:pb-16">
        <div className="flex flex-1 flex-col justify-center">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_340px]">
            <div>
              <FadeIn delay={0.3}>
                <h1 className="mb-8 font-heading text-[clamp(2.75rem,6.5vw,6rem)] leading-[1.05] text-ivory">
                  Reclaim your
                  <br />
                  <span className="italic text-sage">power.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p className="mb-12 max-w-md text-lg leading-relaxed text-sand/50 md:text-[1.125rem]">
                  Empowering women to rediscover their voice, build financial confidence, and step boldly into
                  purpose, prosperity, and legacy.
                </p>
              </FadeIn>
              <FadeIn delay={0.7}>
                <div className="flex flex-wrap items-center gap-5">
                  <a
                    href={links.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-sage px-8 py-4 text-[0.9375rem] font-semibold text-deep transition-all hover:-translate-y-px hover:bg-sage-light hover:shadow-elevated"
                  >
                    Book a Free Consultation
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={2.5}
                    />
                  </a>
                  <a
                    href="#ready-to-rise"
                    className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-sand/40 transition-colors hover:text-sage"
                  >
                    View 2026 Workshops
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="hidden lg:flex lg:items-center lg:justify-center">
                <Image
                  src="/images/brand/logo.png"
                  alt="Valuing Our Worth"
                  width={300}
                  height={300}
                  className="h-[400px] w-[400px] object-contain"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="hidden lg:block">
                <div className="rounded-2xl border border-sage/12 bg-sage/5 px-10 pt-8 pb-8">
                  <div className="mb-5 flex items-center justify-center gap-2">
                    <Award className="h-5 w-5 text-sage" strokeWidth={1.5} />
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-sage">2026 Winner</span>
                  </div>
                  <Image
                    src="/images/awards/coach-of-the-year.png"
                    alt="Coach of the Year 2026"
                    width={220}
                    height={220}
                    className="mx-auto mb-6 h-40 w-40 object-contain"
                  />
                  <h3 className="mb-1 text-center font-heading text-2xl text-ivory">Coach of the Year</h3>
                  <p className="mb-8 text-center text-sm text-sand/40">International Coaching Guild</p>
                  <div className="space-y-3 border-t border-sand/8 pt-6">
                    <div className="flex items-start gap-2.5">
                      <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sage/50" strokeWidth={1.5} />
                      <span className="text-[0.8125rem] leading-snug text-sand/45">
                        ICG Ambassador 2026 — Victorian Ambassador
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sage/50" strokeWidth={1.5} />
                      <span className="text-[0.8125rem] leading-snug text-sand/45">
                        Community Contribution Coach of the Year 2026 — Winner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={1}>
          <div className="flex items-end justify-between border-t border-sand/8 pt-8">
            <div className="flex items-center gap-5 lg:hidden">
              <Image
                src="/images/awards/coach-of-the-year.png"
                alt="Coach of the Year 2026"
                width={48}
                height={48}
                className="h-11 w-11 rounded-lg object-contain"
              />
              <div>
                <div className="text-sm font-medium text-sage">Coach of the Year 2026</div>
                <div className="text-xs text-sand/35">International Coaching Guild</div>
              </div>
            </div>

            <div className="hidden gap-12 lg:flex">
              {stats.map((s) => (
                <div key={s.num}>
                  <div className="font-heading text-2xl text-sage/60">{s.num}</div>
                  <div className="mt-1 text-xs text-sand/30">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-sand/25">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.div>
              <span className="text-xs uppercase tracking-[0.15em]">Scroll</span>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-[40px] w-full md:h-[60px] lg:h-[80px]"
          aria-hidden="true"
        >
          <path d="M0,80 L0,40 Q360,80 720,35 Q1080,-10 1440,40 L1440,80 Z" fill="#F0F7F4" />
        </svg>
      </div>
    </section>
  );
}
