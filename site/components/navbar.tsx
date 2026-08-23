"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { links } from "@/lib/links";

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Approach", href: "#approach" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "bg-linen/90 shadow-soft backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
          <Link href="#" className="relative z-10 flex items-center gap-3" aria-label="Valuing Our Worth home">
            <Image src="/images/brand/logo-nav.png" alt="" width={44} height={44} className="h-10 w-auto" />
            <span
              className={cn(
                "hidden font-heading text-xl tracking-tight sm:block transition-colors duration-500",
                scrolled ? "text-deep" : "text-ivory"
              )}
            >
              Valuing Our Worth
            </span>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[0.8125rem] font-medium tracking-wide uppercase transition-colors duration-300",
                  scrolled ? "text-stone hover:text-deep" : "text-ivory/80 hover:text-ivory"
                )}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-forest px-6 py-2.5 text-[0.8125rem] font-semibold text-ivory transition-all hover:-translate-y-px hover:bg-sage"
            >
              Book a Call
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={cn("relative z-10 rounded-full p-2 lg:hidden transition-colors", scrolled ? "text-deep" : "text-ivory")}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-deep"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-3xl text-sand transition-colors hover:text-sage"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={links.calendly}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-sage px-8 py-3.5 text-base font-semibold text-deep transition-all hover:bg-sage-light"
              >
                Book a Call
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
