import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 border-b border-border/50 backdrop-blur-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-2xl font-bold transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}>
            Pagio
          </h1>
        </motion.div>
      </div>
    </header>
  );
}