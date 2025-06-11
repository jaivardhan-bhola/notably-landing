import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
            <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
          </div>
          <p className="text-gray-400 mb-2">Effective Date: June 10, 2025</p>
          <p className="text-gray-300 mb-6">
            Welcome to Pagio, a Software-as-a-Service (SaaS) platform. These Terms of Service ("Terms") govern your access to and use of Pagio's services, websites, and applications (collectively, the "Service"). By using Pagio, you agree to these Terms.
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
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
          </div>
          <p className="text-gray-300">
            By accessing or using Pagio, you agree to be bound by these Terms and our Privacy Policy. If you are using Pagio on behalf of an organization, you represent that you have the authority to bind that organization.
          </p>
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
            <h2 className="text-2xl font-semibold text-white">2. Services</h2>
          </div>
          <p className="text-gray-300">
            Pagio provides AI-powered productivity tools that help you organize, manage, and optimize your workflow effortlessly. We reserve the right to modify or discontinue the Service at any time, with or without notice.
          </p>
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
            <h2 className="text-2xl font-semibold text-white">3. Account Registration</h2>
          </div>
          <p className="text-gray-300 mb-4">
            To use Pagio, you must create an account and provide accurate information. You are responsible for:
          </p>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Maintaining the confidentiality of your login credentials
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                All activities that occur under your account
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
            <h2 className="text-2xl font-semibold text-white">4. Subscription & Payment</h2>
          </div>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Pagio offers free and paid subscription plans.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Paid plans are billed in advance on a monthly or annual basis.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                All fees are non-refundable, except as required by law.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                You can cancel your subscription at any time. Your access to paid features will continue until the end of the billing cycle.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Payment processing is handled by a third-party provider. We do not store your payment details.
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
            <h2 className="text-2xl font-semibold text-white">5. Free Trial</h2>
          </div>
          <p className="text-gray-300">
            We may offer a free trial for new users. After the trial period, unless canceled, your subscription will automatically convert to a paid plan.
          </p>
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
            <h2 className="text-2xl font-semibold text-white">6. User Conduct</h2>
          </div>
          <p className="text-gray-300 mb-4">You agree not to:</p>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Use Pagio for illegal or harmful purposes
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Infringe on intellectual property rights
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Attempt to hack, reverse engineer, or interfere with the Service
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Use the platform to distribute spam, malware, or abusive content
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
            <h2 className="text-2xl font-semibold text-white">7. Data Ownership & Usage</h2>
          </div>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                You own all content you create and store on Pagio.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                By using the Service, you grant Pagio the right to process and analyze your data to improve service quality and functionality.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                We do not sell or share your data with third parties without your consent, except as required by law.
              </span>
            </li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">8. Service Availability</h2>
          </div>
          <p className="text-gray-300">
            We strive to maintain 99.9% uptime, but we do not guarantee uninterrupted service. Downtime may occur for maintenance, upgrades, or unforeseen issues.
          </p>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">9. Termination</h2>
          </div>
          <p className="text-gray-300 mb-4">We reserve the right to suspend or terminate your access if:</p>
          <ul className="space-y-3 ml-2 mb-4">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                You violate these Terms
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                Required payments are not made
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                We suspect unauthorized or malicious activity
              </span>
            </li>
          </ul>
          <p className="text-gray-300">
            You may terminate your account at any time from your dashboard. Upon termination, your data will be retained for 30 days before permanent deletion.
          </p>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">10. Disclaimer of Warranties</h2>
          </div>
          <p className="text-gray-300">
            The service is provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.
          </p>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">11. Limitation of Liability</h2>
          </div>
          <p className="text-gray-300">
            To the maximum extent permitted by law, Pagio shall not be liable for any indirect, incidental, or consequential damages, including lost profits, data loss, or business interruption.
          </p>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">12. Changes to Terms</h2>
          </div>
          <p className="text-gray-300">
            We may update these Terms from time to time. Continued use of the Service after updates means you accept the revised Terms. We recommend reviewing this page periodically.
          </p>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">13. Governing Law</h2>
          </div>
          <p className="text-gray-300">
            These Terms are governed by and construed in accordance with the laws of India. Disputes will be resolved in the courts located in India.
          </p>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl font-semibold text-white">14. Contact Us</h2>
          </div>
          <p className="text-gray-300 mb-4">
            If you have any questions, please reach out to us at:
          </p>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                📧 <a href="mailto:support@pagio.tech" className="text-blue-400 hover:text-blue-300 transition-colors">support@pagio.tech</a>
              </span>
            </li>            <li className="flex items-start">
              <div className="mr-2 mt-1 min-w-4 h-1.5 w-1.5 rounded-full bg-purple-400/80"></div>
              <span className="text-gray-300">
                🌐 <a href="https://pagio.tech" className="text-blue-400 hover:text-blue-300 transition-colors">pagio.tech</a>
              </span>
            </li>
          </ul>
        </motion.section>

       
      </div>
      </main>
      <Footer />
    </div>
  );
}
