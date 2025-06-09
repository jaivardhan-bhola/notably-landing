import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ContactForm } from "./ui/contact-form";

export function Pricing() {
  const [isIndia, setIsIndia] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://get.geojs.io/v1/ip/country.json');
        const data = await response.json();
        setIsIndia(data.country === 'IN');
      } catch (error) {
        console.log('Failed to detect location, defaulting to USD');
        setIsIndia(false);
      } finally {
        setLoading(false);
      }
    };

    detectLocation();
  }, []);
  const plans = [
    {
      name: "Free",
      priceUSD: "$0",
      priceINR: "₹0",
      description: "Perfect for getting started",
      features: [
        "AI Summarization (5/day)",
        "AI-generated Sub-tasks",
        "Chat with Notes",
        "Sub-pages in Notes",
        "Draw with Excalidraw",
        "Daily Task Calendar",
        "Multi-device Sync",        "Storage Limit: 500 notes"
      ],
      popular: false
    },
    {
      name: "Plus",
      priceUSD: "$9",
      priceINR: "₹299",
      description: "For productive individuals",
      features: [
        "Everything in Free, plus:",
        "AI Summarization (20/day)",
        "AI Tagging",
        "Google Calendar Integration",
        "Collaboration & Shared Notes",
        "Export Notes (PDF/Markdown)",        "Storage Limit: 2,000 notes"
      ],
      popular: true
    },
    {
      name: "Pro",
      priceUSD: "$15",
      priceINR: "₹499",
      description: "For power users and teams",
      features: [
        "Everything in Plus, plus:",
        "AI Summarization (Unlimited)",
        "Priority Support",
        "Fireflies (Auto Meeting Notes – when launched)",
        "Themes / Customization (When launched)",        "Storage Limit: Unlimited"
      ],
      popular: false
    }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your workflow. Start free, upgrade when you need more.
          </p>
          {loading && (
            <div className="text-sm text-muted-foreground mt-2">
              Loading pricing for your region...
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg flex flex-col ${
                plan.popular
                  ? "border-primary bg-gradient-to-b from-primary/5 to-primary/10 shadow-xl scale-105"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center space-x-1 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">
                    {isIndia ? plan.priceINR : plan.priceUSD}
                  </span>
                  {(isIndia ? plan.priceINR : plan.priceUSD) !== (isIndia ? "₹0" : "$0") && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
              </div>              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className={`text-sm ${
                      feature.includes("Everything in") 
                        ? "font-medium text-foreground" 
                        : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
           <p className="text-sm text-muted-foreground">
            Need something custom? <button onClick={() => setIsContactFormOpen(true)} className="text-primary hover:underline">Contact us</button> for enterprise pricing.
          </p>
        </motion.div>

        {/* Contact Form Modal */}
        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={() => setIsContactFormOpen(false)} 
        />
      </div>
    </section>
  );
}
