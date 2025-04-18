
import { Brain, Search, FileText, Link2, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Auto-Summarization",
    description: "Instantly distill long notes or meetings into concise takeaways.",
  },
  {
    icon: Search,
    title: "Semantic Search",
    description: "Find notes based on intent and meaning, not just keywords.",
  },
  {
    icon: FileText,
    title: "AI Note Generation",
    description: "Turn audio/video recordings into clean, structured notes.",
  },
  {
    icon: Link2,
    title: "Smart Linking",
    description: "Automatically detect and connect related ideas across your notes.",
  },
  {
    icon: MessageSquare,
    title: "Q&A Chat with Notes",
    description: "Interact with your notes like a personal research assistant.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow duration-300">
              <feature.icon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
