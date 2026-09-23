import { Reveal } from "@/components/reveal";

export function Podcast() {
  return (
    <section className="section-pad bg-ivory" id="podcast">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest">As Featured & Heard</p>
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.25rem)] text-deep">
              Your net worth is determined by your self worth
            </h2>
            <p className="text-[1.0625rem] leading-[1.85] text-stone">
              Antonietta joins Rashid Mubashir on the{" "}
              <span className="font-medium text-deep">How to Become a Successful Coach</span> podcast to talk about
              why so many capable women keep their distance from financial decisions, where our money story comes
              from, and the four buckets she teaches every client — and sits down with The Coaching Institute to
              share her own journey from chartered accountant to wealth coach.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-linen bg-white p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-pebble">Podcast Episode</p>
              <iframe
                title="Antonietta Muraca: Your Net Worth Is Determined by Your Self Worth — How to Become a Successful Coach"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                height={175}
                style={{ width: "100%", overflow: "hidden", borderRadius: "10px" }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.podcasts.apple.com/au/podcast/antonietta-muraca-your-net-worth-is-determined-by-your/id6798534585?i=1000791216722"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-linen bg-white p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-pebble">
                From Accountant to Wealth Coach
              </p>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  title="Antonietta Muraca | The Coaching Institute Review | Accountant to Wealth Coach Empowering Women"
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/n5qXQyhKjeg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
