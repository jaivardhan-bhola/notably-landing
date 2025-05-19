import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}
