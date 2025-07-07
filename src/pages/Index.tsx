import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  const handleEmailClick = () => {
    window.location.href = "mailto:support@pagio.tech";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-purple-900">
      <Header />
      <main className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
        

          {/* Shutdown Announcement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-purple-950/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-purple-800/50 shadow-2xl mb-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-purple-900/60 border border-purple-700/40">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-purple-200 font-medium">Service Ended</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-purple-100 mb-6">
              Pagio has officially shut down
            </h2>

            <div className="text-lg md:text-xl text-purple-300 space-y-6 max-w-3xl mx-auto leading-relaxed">
              <p>
                Pagio started as a tool we built just for ourselves — a small side project to solve our problems. 
                Making it public was never the original plan; it just grew organically as we shared it. 
                We're grateful it could help others along the way.
              </p>
              
              <p>
                As of July 5th, 2025, Pagio has officially shut down. We've made the difficult decision to close down Pagio 
                as we shift focus to new ideas. The service is no longer available, and all data has been permanently removed.
              </p>

              <p>
                If you had data stored with Pagio and missed the backup deadline, we sincerely apologize. 
                Please reach out to our support team if you have any questions.
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            {/* Buttons removed - service has ended */}
          </motion.div>

          {/* Gratitude Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 text-purple-400 mb-4">
              <Heart className="w-5 h-5 text-purple-500" />
              <span className="text-lg">Thanks for being part of our journey</span>
              <Heart className="w-5 h-5 text-purple-500" />
            </div>
            
            <div className="text-purple-300">
              <p className="mb-2">Warm regards,</p>
              <p className="font-semibold text-purple-100">Team Pagio</p>
            </div>
          </motion.div>

          {/* Status Update */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 p-6 bg-purple-950/40 border border-purple-800/50 rounded-xl"
          >
            <p className="text-purple-200 font-semibold mb-2">📅 Service Status</p>
            <p className="text-purple-100">
              Service ended on <span className="font-bold text-purple-50">July 5th, 2025</span>
            </p>
            <p className="text-purple-300 text-sm mt-2">
              All data has been permanently removed
            </p>
          </motion.div>
        </motion.div>
      </main>
      <div className="pb-20"></div>
      <Footer />
    </div>
  );
}
