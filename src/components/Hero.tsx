
import { InputWithButton } from "./ui/input-with-button";
import { ThemeToggle } from "./ThemeToggle";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 px-4 text-center relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        <div className="flex items-center justify-center gap-3">
          <Sparkles className="w-10 h-10 text-primary animate-pulse" />
          <h1 className="text-5xl font-bold tracking-tight animate-fade-in inline-block">
            Notes that think with you
          </h1>
          <Sparkles className="w-10 h-10 text-primary animate-pulse" />
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
          Transform raw thoughts into refined insights with AI-powered note-taking. 
          Capture, organize, and focus with smart automation.
        </p>
        <div className="flex justify-center">
          <InputWithButton />
        </div>
      </div>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10 opacity-50"></div>
    </section>
  );
}
