import { Mail, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Footer() {
  const handleEmailClick = () => {
    window.location.href = "mailto:support@pagio.tech";
  };

  return (
    <footer className="relative py-12 px-4 overflow-hidden text-white bg-gray-900/50 backdrop-blur-sm border-t border-white/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand and shutdown notice */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold mb-4">Pagio</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Thank you for being part of our journey. We're grateful for the time we've shared.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Service ended July 5th, 2025</span>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Need Help?</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={handleEmailClick}
                  className="text-gray-400 hover:text-white transition-colors text-left flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>support@pagio.tech</span>
                </button>
              </li>
              <li>
                <p className="text-gray-400 text-xs">
                  For questions about the shutdown or if you had important data
                </p>
              </li>
            </ul>
          </div>

          {/* Legal and Final Message */}
          <div>
            <h3 className="text-white font-semibold mb-4">Final Words</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            
            <p className="text-gray-400 text-xs italic">
              "Pagio started as a tool we built just for ourselves — a small side project to solve our problems."
            </p>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Pagio. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              <span className="text-purple-300">Warm regards, Team Pagio</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
