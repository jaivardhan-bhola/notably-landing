import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { InputWithButton } from "./ui/input-with-button";

export function CTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#0a0a0a] text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-1/4 top-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute left-1/4 bottom-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="bg-primary rounded-full w-3 h-3 animate-pulse"></span>
            <span className="text-sm font-medium">Beta out now</span>
          </div>
          
          <h2 className="font-ntype text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Get on the list. Don’t miss out.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Pagio is almost here. Sign up for early access and get perks you’ll brag about later.
          </p>
          
          <div className="max-w-md mx-auto mb-10">
            <InputWithButton />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <span role="img" aria-label="sparkles"></span>
              <span className="ml-2">Instant summaries</span>
            </div>            <div className="flex items-center">
              <span role="img" aria-label="canvas"></span>
              <span className="ml-2">Canvas & create</span>
            </div>
            <div className="flex items-center">
              <span role="img" aria-label="lightning"></span>
              <span className="ml-2">Notes → Tasks → Calendar</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}