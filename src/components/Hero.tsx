
import { InputWithButton } from "./ui/input-with-button";
import { ThemeToggle } from "./ThemeToggle";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen py-32 px-4 text-center relative overflow-hidden bg-black dark:bg-black">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      {/* Colorful gradient background */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl opacity-30" />
      
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-12 h-12 text-primary animate-pulse-glow" />
            <h1 className="font-ntype text-6xl md:text-7xl font-bold tracking-tight animate-fade-in inline-block bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Notes that think with you
            </h1>
            <Sparkles className="w-12 h-12 text-primary animate-pulse-glow" />
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto animate-fade-in font-light">
            Transform raw thoughts into refined insights with AI-powered note-taking. 
            Capture, organize, and focus with smart automation.
          </p>
        </div>
        
        <div className="flex justify-center scale-110">
          <InputWithButton />
        </div>
      </div>
    </section>
  );
}
