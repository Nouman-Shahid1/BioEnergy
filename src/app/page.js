import Image from "next/image";
import EnergySection from "@/components/EnergySection/EnergySection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import SustainableSection from "@/components/SustainableSection/SustainableSection";
import SustainableEnergy from "@/components/SustainableEnergy/SustainableEnergy";
import ValueProposition from "@/components/ValueProposition/ValueProposition";
import SEO from "@/components/SEO";
export const generateMetadata = () => ({
  title:
    "Bio Energy – Fulfill your heat energy demand reliably and efficiently",
  description: "Sindh BioEnergy – Clean and Cost-Effective Energy Solution",
});
export default function Home() {
  return (
    <>
    <SEO
        title="Home | sindh bio energy"
        description="Sindh bio energy is biomass power plant in sindh operating under pakistan's Renewable energy policy."
        keywords="sindh bio energy, pak energy, bio fuel, sindh fuel, wood pellets, sindh bio energy tando muhammad khan, pellets in pakistan, biomass energy pakistan, renewabdle energy, alternative to gas, wood pellets for boiler, sustainable fuel, boiler fuel wood pellets, clean energy for businesses, industrial heating source, gas, lpg, wood pellets kha se mily gy, gas loadshedding, where to buy wood pellets in sindh, how to save energy in factories,"
      />
      <HeroSection />
      <EnergySection />
      <SustainableSection />
      <SustainableEnergy />
      <ValueProposition />
      <Footer />
    </>
  );
}
