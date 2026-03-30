import { StatsSection } from "./GlobalPartnerSection";
import { CTASection } from "./CTASection";
import HeroSection from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { WhyUsSection } from "./WhyUsSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <CTASection />
    </div>
  );
}

export default Home;
