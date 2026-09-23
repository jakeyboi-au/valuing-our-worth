import { Reveal } from "@/components/reveal";

export function Podcast() {
  return (
    <section className="section-pad bg-ivory" id="podcast">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest">As Heard On</p>
              <h2 className="mb-6 text-[clamp(2rem,4vw,3.25rem)] text-deep">
                Your net worth is determined by your self worth
              </h2>
              <p className="text-[1.0625rem] leading-[1.85] text-stone">
                Antonietta joins Rashid Mubashir on the{" "}
                <span className="font-medium text-deep">How to Become a Successful Coach</span> podcast to talk
                about why so many capable women keep their distance from financial decisions, where our money
                story comes from, and the four buckets she teaches every client.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <iframe
              title="Antonietta Muraca: Your Net Worth Is Determined by Your Self Worth — How to Become a Successful Coach"
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              height={175}
              style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px" }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.podcasts.apple.com/au/podcast/antonietta-muraca-your-net-worth-is-determined-by-your/id6798534585?i=1000791216722"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
