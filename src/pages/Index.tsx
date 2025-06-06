import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HowItWorks } from "@/components/HowItWorks";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />      <main>
        <Hero />
        <HowItWorks />
        <Comparison />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
