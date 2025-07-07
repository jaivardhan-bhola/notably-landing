// filepath: /home/jai/Code/Pagio/landing/src/pages/PrivacyPolicy.tsx
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-black/80">
      <Header />
      <main className="relative container mx-auto px-4 pt-32 pb-16 overflow-hidden">
        {/* Gradient Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-background/90 to-purple-900/10 opacity-50 blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
          <div className="absolute top-20 right-[10%] w-60 h-60 border border-blue-500/5 rounded-full opacity-20" />
          <div className="absolute bottom-20 left-[20%] w-40 h-40 border border-purple-500/5 rounded-full opacity-20" />
        </div>
        
        <div className="relative z-10">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-2 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h1 className="text-4xl font-bold text-white">Pagio Privacy Policy</h1>
          </div>
          <p className="text-gray-400 mb-2">Effective Date: May 9, 2025</p>
          <p className="text-gray-400 mb-8">Last Updated: May 9, 2025</p>
          
          <p className="text-gray-300 mb-6">
            At Pagio, we care deeply about your privacy. This policy explains what we collect, why we collect it, and how we protect it.
          </p>
        </motion.div>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">What We Collect</h2>
          </div>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                <strong className="text-white/90">Account Information:</strong> Email address and name (via Appwrite authentication).
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                <strong className="text-white/90">Notes and Content:</strong> Text you write or upload for summaries, tagging, and task generation.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                <strong className="text-white/90">Google Calendar Access (optional):</strong> Only when you explicitly connect your Google account, and only to create events you approve.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                <strong className="text-white/90">Usage Data:</strong> Basic analytics (e.g., which features are used) to improve the product.
              </span>
            </li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">How We Use Your Data</h2>
          </div>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                To provide core functionality like note summaries, tagging, task scheduling, and calendar sync.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                To personalize your experience and make features smarter over time.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                To improve our algorithms and user experience (aggregated/anonymized only).
              </span>
            </li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">What We Don't Do</h2>
          </div>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                We do not sell your data.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                We do not read your private notes.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                We do not access your Google Calendar without your explicit permission every time.
              </span>
            </li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">Data Security</h2>
          </div>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Your data is stored securely using Appwrite infrastructure.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                All communication is encrypted (HTTPS).
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Access tokens for services like Google Calendar are not stored permanently.
              </span>
            </li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">Your Control</h2>
          </div>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                You can delete your notes or account anytime.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                You can revoke calendar permissions via your Google account settings.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                You can contact us at <a href="mailto:Pagioai@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">Pagioai@gmail.com</a> for any privacy-related concerns.
              </span>
            </li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">Data Sharing and Disclosure</h2>
          </div>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                We do not sell, rent, or share your personal data with third parties except as necessary to provide Pagio's core services, comply with the law, or protect our rights.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                We may share your data with trusted service providers (such as Appwrite for authentication and storage) strictly for the purpose of operating and improving Pagio. These providers are contractually obligated to protect your information and use it only for the services we request.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                We do not transfer your data internationally except as required for service operation, and always in compliance with applicable data protection laws.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                We do not share your Google user data with any third parties except as required to provide the features you explicitly request (such as creating calendar events you approve).
              </span>
            </li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">Use of Google Workspace APIs and Data</h2>
          </div>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Pagio's use and transfer of information received from Google APIs to any other app will adhere to Google API Services User Data Policy, including the Limited Use requirements.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                We do not use data obtained from Google Workspace APIs to develop, improve, or train generalized artificial intelligence (AI) or machine learning (ML) models.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Google user data is only used to provide the specific features you request (such as creating calendar events) and is not used for any other purpose.
              </span>
            </li>
          </ul>
        </motion.section>

        <motion.div
          className="flex flex-col items-center justify-center p-8 rounded-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-3">Have questions about our Privacy Policy?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl">
            We're committed to transparency and protecting your privacy. If you have any concerns or questions, please don't hesitate to reach out.
          </p>
          <a 
            href="mailto:Pagioai@gmail.com" 
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Contact Our Privacy Team
          </a>
        </motion.div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
