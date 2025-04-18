
import { CheckCircle } from "lucide-react";
import { InputWithButton } from "./ui/input-with-button";

export function Benefits() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">How It Helps</h2>
          <p className="text-xl text-muted-foreground">
            Tired of drowning in raw notes? Notably turns messy thoughts into actionable clarity.
          </p>
        </div>
        
        <div className="bg-secondary/30 p-8 rounded-lg space-y-8">
          <h3 className="text-2xl font-semibold">Join Our Early Access</h3>
          <ul className="space-y-4 max-w-xl mx-auto text-left">
            {[
              "Get exclusive access to beta features",
              "Shape the product roadmap directly",
              "Join a community of early adopters",
            ].map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center pt-4">
            <InputWithButton />
          </div>
        </div>
      </div>
    </section>
  );
}
