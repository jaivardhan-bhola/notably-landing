
import { InputWithButton } from "./ui/input-with-button";
import { ThemeToggle } from "./ThemeToggle";

export function Hero() {
  return (
    <section className="py-20 px-4 text-center relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold tracking-tight animate-fade-in">
          Notes that think with you
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform raw thoughts into refined insights with AI-powered note-taking. 
          Capture, organize, and focus with smart automation.
        </p>
        <div className="flex justify-center">
          <InputWithButton />
        </div>
      </div>
    </section>
  );
}
