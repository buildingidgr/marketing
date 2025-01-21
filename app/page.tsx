import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyMechLabs from "@/components/WhyMechLabs";
import Stats from "@/components/Stats";
import EngineerCTA from "@/components/EngineerCTA";
import NeedHelp from "@/components/NeedHelp";
import Footer from "@/components/Footer";
import ProjectTypes from "@/components/ProjectTypes";
import Architects from "@/components/architects";
import Mechanics from "@/components/mechanics";
import Electicts from "@/components/electicts";
import FAQ from "@/components/FAQ";
import Engineers from "@/components/Engineers";
import EngineersHeader from "@/components/EngineersHeader";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Stats />
      <WhyMechLabs />
      <EngineersHeader />
      <Engineers />
      <EngineerCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
