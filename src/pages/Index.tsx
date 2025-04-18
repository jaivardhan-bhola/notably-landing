import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";

export default function Index() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Features />
        <Benefits />
      </main>
    </div>
  );
}
