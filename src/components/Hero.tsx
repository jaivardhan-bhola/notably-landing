
import { InputWithButton } from "./ui/input-with-button";
import { ThemeToggle } from "./ThemeToggle";
import { Sparkles, Code, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black dark:bg-[#0a0a0a] text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/50 to-blue-900/30 opacity-50 blur-3xl" />
      
      {/* Theme Toggle Positioned */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      
      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-5xl px-6 text-center"
      >
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Sparkles className="w-12 h-12 text-primary animate-pulse-glow" />
          <h1 className="font-ntype text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
            Notes that think with you
          </h1>
          <Sparkles className="w-12 h-12 text-primary animate-pulse-glow" />
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Transform raw thoughts into refined insights with AI-powered note-taking. 
          Capture, organize, and focus with intelligent automation.
        </p>
        
        {/* Enhanced Action Area */}
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full max-w-xl scale-105">
            <InputWithButton />
          </div>
          
          {/* Feature Highlights */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400 opacity-70">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4" />
              <span>Smart Organization</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span>Seamless Integration</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
