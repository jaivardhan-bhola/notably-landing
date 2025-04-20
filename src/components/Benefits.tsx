import { CheckCircle, Sparkles, Star, Users, Zap, Construction } from "lucide-react";
import { InputWithButton } from "./ui/input-with-button";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

// Coming soon placeholder - will be replaced with actual benefits later
const benefits = [
  {
    icon: Star,
    title: "Coming Soon",
    description: "Exciting new features will be announced here."
  },
  {
    icon: Zap,
    title: "Under Development",
    description: "Our team is working on crafting valuable benefits for early adopters."
  },
  {
    icon: Users,
    title: "Stay Tuned",
    description: "Sign up to be notified when our benefits program launches."
  }
];

export function Benefits() {
  return (
    <section className="relative py-36 px-4 overflow-hidden bg-[#0a0a0a] text-white">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black/60 to-purple-900/20 opacity-40 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "1s" }} />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-[10%] w-60 h-60 border border-blue-500/10 rounded-full" />
      <div className="absolute bottom-20 left-[20%] w-40 h-40 border border-purple-500/10 rounded-full" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-left"
          >
            <Badge variant="outline" className="mb-6 px-4 py-2 border-white/10 bg-white/5 backdrop-blur-sm">
              <Construction className="w-4 h-4 mr-2 text-yellow-500 animate-pulse" />
              <span>Under Development</span>
            </Badge>
            
            <h2 className="font-ntype text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">Notably</span> benefits <br />coming soon
            </h2>
            
            <p className="text-xl text-gray-300 mb-10">
              We're still working on our early access program. Join our waitlist to be the first to know when it launches.
            </p>
            
            <div className="space-y-8 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Decorative Dots Background */}
              <div className="absolute -inset-10 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
              
              {/* Glass Card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/2 rounded-2xl border border-white/10 p-1 backdrop-blur-sm shadow-[0_0_60px_-15px_rgba(139,92,246,0.25)]">
                <div className="bg-black/40 rounded-xl p-8">

                  <div className="flex items-center mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-800 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Join Our Waitlist</h3>
                        <p className="text-sm text-gray-400">Be the first to know</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div className="space-y-4">
                      {[
                        "Get notified when our beta program launches",
                        "Early access to new features",
                        "Special offers for waitlist members",
                      ].map((benefit, index) => (
                        <motion.div 
                          key={benefit} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="w-full">
                    <InputWithButton placeholder="Enter your email for updates" />
                  </div>
                  
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20"></div>
              <div className="absolute -bottom-8 -left-4 w-16 h-16 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
