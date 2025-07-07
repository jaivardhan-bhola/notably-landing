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
  ];  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 text-white">
      <div className="max-w-6xl mx-auto">
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
            <div className="text-sm text-gray-400 mt-2">
              Loading pricing for your region...
            </div>
          )}
        </motion.div>        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-4">
          {plans.map((plan, index) => {
            const isMiddle = index === 1;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative w-full max-w-sm ${
                  isMiddle ? 'lg:transform lg:scale-105 lg:z-10' : 'lg:z-0'
                }`}
              >
                <div
                  className={`relative rounded-3xl p-8 border transition-all duration-300 hover:shadow-2xl flex flex-col h-[600px] ${
                    isMiddle
                      ? "bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-800/20 border-purple-500/50 shadow-2xl backdrop-blur-xl"
                      : "bg-gray-900/50 border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50"
                  }`}
                >
                  {isMiddle && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center space-x-1 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold">
                        <Star className="w-4 h-4" />
                        <span>POPULAR</span>
                      </span>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>                    <div className="mb-4">
                      <div className="flex items-center justify-center">
                        <div className="flex items-baseline">
                          <span className="text-2xl font-bold text-white mr-1">
                            {isIndia ? '₹' : '$'}
                          </span>
                          <span className="text-5xl font-bold text-white">
                            {isIndia 
                              ? plan.priceINR.replace('₹', '') 
                              : plan.priceUSD.replace('$', '')
                            }
                          </span>
                        </div>
                        {(isIndia ? plan.priceINR : plan.priceUSD) !== (isIndia ? "₹0" : "$0") && (
                          <span className="text-sm text-gray-400 ml-2">per month</span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Get Started Button */}
                  <div className="mb-8">
                    <button
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        isMiddle
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg"
                          : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-600"
                      }`}
                    >
                      Get started
                    </button>
                  </div>                  {/* Features Section */}
                  <div className="flex-grow overflow-y-auto">
                    <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
                      FEATURES
                    </h4>
                    <ul className="space-y-3 min-h-[200px]">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            isMiddle ? 'text-purple-400' : 'text-green-400'
                          }`} />
                          <span className={`text-sm ${
                            feature.includes("Everything in") 
                              ? "font-medium text-white" 
                              : "text-gray-300"
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
