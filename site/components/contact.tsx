"use client";

import { useState, type ComponentProps, type FormEvent } from "react";
import { CircleCheckBig, Send } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

// Web3Forms access key — this is the same public key already wired up in the
// live site's compiled JS bundle (commit "wire up contact form to web3forms").
// Web3Forms access keys are meant to be embedded client-side; it only allows
// submissions to be forwarded to the mailbox that key was created for.
const WEB3FORMS_ACCESS_KEY = "474c7f64-1888-4c62-8da5-4cc5db8806fd";

function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      className={cn("flex items-center gap-2 text-sm font-medium leading-none text-deep", className)}
      {...props}
    />
  );
}

function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-10 w-full min-w-0 rounded-lg border border-sand bg-linen px-3 py-2 text-base outline-none transition-colors placeholder:text-stone/40 focus-visible:ring-3 focus-visible:ring-sage disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-lg border border-sand bg-linen px-3 py-2 text-base outline-none transition-colors placeholder:text-stone/40 focus-visible:ring-3 focus-visible:ring-sage disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New contact form submission — Valuing Our Worth");
    formData.append("from_name", "Valuing Our Worth website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        setSent(true);
      } else {
        setError(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section-pad bg-sand" id="contact">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest">Get in Touch</p>
              <h2 className="mb-6 text-[clamp(2rem,4vw,3.25rem)] text-deep">Start a conversation</h2>
              <p className="mb-10 max-w-md text-[1.0625rem] leading-[1.8] text-stone">
                Whether you&apos;re curious about our programs, ready to book a session, or just want to say hello —
                we&apos;d love to hear from you.
              </p>
              <div className="space-y-2 text-sm text-stone">
                <p>
                  <span className="font-medium text-deep">Email:</span> Valuingourworth@gmail.com
                </p>
                <p>
                  <span className="font-medium text-deep">Phone:</span> 0415 945 641
                </p>
                <p>
                  <span className="font-medium text-deep">Studio:</span> 54B Watton Street, Werribee
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {sent ? (
              <div className="rounded-2xl border border-sage/20 bg-ivory p-12 text-center">
                <CircleCheckBig className="mx-auto mb-4 h-12 w-12 text-sage" />
                <h3 className="mb-2 font-heading text-2xl text-deep">Message Sent</h3>
                <p className="text-stone">Thank you for reaching out. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-linen bg-ivory p-8 shadow-soft md:p-10"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-forest">*</span>
                    </Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-forest">*</span>
                    </Label>
                    <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-forest">*</span>
                  </Label>
                  <Textarea id="message" name="message" required rows={5} placeholder="How can we help you?" />
                </div>
                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="cursor-pointer rounded-full bg-forest px-8 py-3 font-semibold text-ivory transition-all hover:-translate-y-px hover:bg-sage disabled:opacity-50"
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <span className="inline-flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
