import Image from "next/image";
import EnergySection from "@/components/EnergySection/EnergySection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import SustainableSection from "@/components/SustainableSection/SustainableSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <EnergySection />
      <SustainableSection />
      <Footer />
    </>
  );
}
