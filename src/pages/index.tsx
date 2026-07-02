import { CustomerStorySection } from "@/components/customer-history-section";
import { FeatureSection } from "@/components/feature-section/feature-section";
import { HeroSection } from "@/components/hero-section"
import { SupportSection } from "@/components/support-section"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    < >
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
        <CallToAction />
      </article>
    </>
  );
}
