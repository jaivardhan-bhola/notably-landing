import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HowItWorks } from "@/components/HowItWorks";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const sectionId = hash.substring(1);
      // Small delay to ensure components are rendered
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

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
