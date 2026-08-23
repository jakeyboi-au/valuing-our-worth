import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-deep text-sand/70">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/images/brand/logo-nav.png" alt="" width={48} height={48} className="h-10 w-auto opacity-90" />
              <span className="font-heading text-xl text-sage-pale">Valuing Our Worth</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">Rise in Worth. Build Wealth. Create Legacy.</p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-sage">Programs</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="#programs" className="transition-colors hover:text-sage-light">
                Financially Fit Females
              </Link>
              <Link href="#programs" className="transition-colors hover:text-sage-light">
                1:1 Coaching
              </Link>
              <Link href="#programs" className="transition-colors hover:text-sage-light">
                Workshops
              </Link>
              <Link href="#programs" className="transition-colors hover:text-sage-light">
                School Programs
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-sage">Company</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="#mission" className="transition-colors hover:text-sage-light">
                Our Mission
              </Link>
              <Link href="#about" className="transition-colors hover:text-sage-light">
                About Antonietta
              </Link>
              <Link href="#testimonials" className="transition-colors hover:text-sage-light">
                Stories
              </Link>
              <Link href="#contact" className="transition-colors hover:text-sage-light">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-sage">Connect</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={links.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-sage-light"
              >
                Book a Consultation
              </a>
              <a href="mailto:Valuingourworth@gmail.com" className="transition-colors hover:text-sage-light">
                Valuingourworth@gmail.com
              </a>
              <a href="tel:0415945641" className="transition-colors hover:text-sage-light">
                0415 945 641
              </a>
              <span>54B Watton Street, Werribee</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-sand/10 pt-8 text-xs text-sand/40">
          <span>© 2026 Valuing Our Worth. All rights reserved.</span>
          <span>Melbourne, Australia · By appointment</span>
        </div>
      </div>
    </footer>
  );
}
