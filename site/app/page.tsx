import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { Reality } from "@/components/reality";
import { Approach } from "@/components/approach";
import { Programs } from "@/components/programs";
import { Coach } from "@/components/coach";
import { Podcast } from "@/components/podcast";
import { Stories } from "@/components/stories";
import { CTA } from "@/components/cta";
import { ContactSection } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Reality />
      <Approach />
      <Programs />
      <Coach />
      <Podcast />
      <Stories />
      <CTA />
      <ContactSection />
    </>
  );
}
