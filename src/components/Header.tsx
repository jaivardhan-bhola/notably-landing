import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X} from "lucide-react";

// Google Form URL
const GOOGLE_FORM_URL = "https://forms.gle/1BuVjhTxHwXqUFa87";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Empty left section to maintain spacing */}
        <div></div>        {/* Desktop Navigation */}        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">            {["Home", "Contact Us"].map((item) => (
              item === "Contact Us" ? (
                <a
                  key={item}
                  href="mailto:support@pagio.tech"
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? "text-muted-foreground hover:text-foreground" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              ) : (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? "text-muted-foreground hover:text-foreground" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              )
            ))}
          </div>
          <div className="flex items-center">
            <Button 
              variant="default" 
              size="sm" 
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            >
              Join the beta waitlist
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={isScrolled ? "text-foreground" : "text-white"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col space-y-4">              {["Home", "Contact Us"].map((item) => (
                item === "Contact Us" ? (
                  <a
                    key={item}
                    href="mailto:support@pagio.tech"
                    className="text-lg font-medium py-2 border-b border-border/30 text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ) : (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-lg font-medium py-2 border-b border-border/30 text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              ))}
              <Button 
                className="mt-4 w-full"
                onClick={() => {
                  window.open(GOOGLE_FORM_URL, '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                Join the beta waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}