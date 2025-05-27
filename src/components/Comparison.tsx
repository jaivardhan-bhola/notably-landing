import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

interface FeatureDetail {
  featureName: string;
  statusText: string;
  iconType: 'check' | 'cross' | 'warning' | 'none';
}

interface Competitor {
  name: string;
  logoChar?: string;
  features: FeatureDetail[];
  highlight?: boolean;
}

const competitorsData: Competitor[] = [
  {
    name: "Pensa",
    features: [
      { featureName: "AI Summaries", statusText: "Yes", iconType: 'check' },
      { featureName: "Auto Tagging", statusText: "Yes", iconType: 'check' },
      { featureName: "Notes → Tasks Conversion", statusText: "Yes", iconType: 'check' },
      { featureName: "Simple, Fast UX", statusText: "Yes", iconType: 'check' },
      { featureName: "Built for Personal Productivity", statusText: "Yes", iconType: 'check' },
    ],
    highlight: true
  },
  {
    name: "NotebookLM",
    features: [
      { featureName: "AI Summaries", statusText: "Yes", iconType: 'check' },
      { featureName: "Auto Tagging", statusText: "No", iconType: 'cross' },
      { featureName: "Notes → Tasks Conversion", statusText: "No", iconType: 'cross' },
      { featureName: "Simple, Fast UX", statusText: "Moderate", iconType: 'warning' },
      { featureName: "Built for Personal Productivity", statusText: "Research", iconType: 'cross' },

    ]
  },
  {
    name: "Notion AI",
    features: [
      { featureName: "AI Summaries", statusText: "Yes", iconType: 'check' },
      { featureName: "Auto Tagging", statusText: "No", iconType: 'cross' },
      { featureName: "Notes → Tasks Conversion", statusText: "Yes", iconType: 'check' },
      { featureName: "Simple, Fast UX", statusText: "Cluttered", iconType: 'cross' },
      { featureName: "Built for Personal Productivity", statusText: "Mixed focus", iconType: 'warning' },

    ]
  },
  {
    name: "Obsidian + AI",
    features: [
      { featureName: "AI Summaries", statusText: "Requires setup", iconType: 'warning' },
      { featureName: "Auto Tagging", statusText: "No", iconType: 'cross' },
      { featureName: "Notes → Tasks Conversion", statusText: "Limited", iconType: 'warning' },
      { featureName: "Simple, Fast UX", statusText: "Steep learning", iconType: 'warning' },
      { featureName: "Built for Personal Productivity", statusText: "Dev-focused", iconType: 'cross' },
     
    ]
  }
];

export function Comparison() {
  return (
    <section className="relative py-24 px-4 overflow-hidden text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="font-ntype text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent text-center">
          How Pensa Compares
        </h2>
        <p className="text-xl text-gray-300 mb-10 text-center max-w-2xl mx-auto">
          See how Pensa stacks up against other popular note-taking apps.
        </p>
        <div className="overflow-x-auto pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-w-[1000px] md:min-w-[calc(4*250px)]">
            {competitorsData.map((comp) => (
              <Card
                key={comp.name}
                className={`flex flex-col h-full border border-white/10 bg-white/5 backdrop-blur-sm p-6 ${comp.highlight ? "border-primary shadow-lg" : ""}`}
              >
                <div className="flex items-center mb-6">
                  <span className={`text-2xl font-bold ${comp.highlight ? "text-primary" : "text-white"}`}>
                    {comp.name}
                    {comp.highlight && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold animate-pulse">
                        You are here
                      </span>
                    )}
                  </span>
                </div>
                <ul className="space-y-4 flex-1">
                  {comp.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300">
                      <span className="font-semibold text-white block mb-0.5 text-sm">{feature.featureName}</span>
                      <div className="flex items-center gap-1.5">
                        {feature.iconType === 'check' && <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${comp.highlight ? "text-primary" : "text-green-400"}`} />}
                        {feature.iconType === 'cross' && <XCircle className={`h-4 w-4 flex-shrink-0 ${comp.highlight ? "text-red-400" : "text-red-400"}`} />}
                        {feature.iconType === 'warning' && <AlertTriangle className={`h-4 w-4 flex-shrink-0 ${comp.highlight ? "text-yellow-400" : "text-yellow-400"}`} />}
                        <span className="text-sm">{feature.statusText}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
