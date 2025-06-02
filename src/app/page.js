import Image from "next/image";
import EnergySection from "@/components/EnergySection/EnergySection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import SustainableSection from "@/components/SustainableSection/SustainableSection";
import SustainableEnergy from "@/components/SustainableEnergy/SustainableEnergy";
import ValueProposition from "@/components/ValueProposition/ValueProposition";
export const generateMetadata = () => ({
  title:
    "Bio Energy – Fulfill your heat energy demand reliably and efficiently",
  description: "Sindh BioEnergy – Clean and Cost-Effective Energy Solution",
});
export default function Home() {
  return (
    <>
      <HeroSection />
      <EnergySection />
      <SustainableSection />
      <SustainableEnergy />
      <ValueProposition />
      <Footer />
    </>
  );
}
