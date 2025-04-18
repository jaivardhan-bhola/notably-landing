import { Github, Twitter, Linkedin, Sparkles, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const footerLinks = [
  {
    title: "Product",
    links: [
      { text: "Features", href: "#" },
      { text: "Roadmap", href: "#" },
      { text: "Beta Program", href: "#" },
      { text: "Pricing", href: "#" },
    ]
  },
  {
    title: "Resources",
    links: [
      { text: "Documentation", href: "#" },
      { text: "Guides", href: "#" },
      { text: "API", href: "#" },
      { text: "Support", href: "#" },
    ]
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Press Kit", href: "#" },
    ]
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy", href: "#" },
      { text: "Terms", href: "#" },
      { text: "Cookie Policy", href: "#" },
      { text: "Licenses", href: "#" },
    ]
  }
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@notably.ai", label: "Email" }
];

export function Footer() {
  return (
    <footer className="relative pt-32 pb-16 px-4 overflow-hidden bg-black dark:bg-[#0a0a0a] text-white">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-black/80 to-black opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      </div>
      
      {/* Top section with newsletter */}
      <div className="relative z-10 max-w-7xl mx-auto mb-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Stay in the loop
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Subscribe to our newsletter for the latest product updates, tips, and AI note-taking insights.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 flex-1"
            />
            <Button className="group">
              Subscribe
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Links section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 lg:gap-16 mb-16 border-b border-white/10 pb-16">
          {/* Company info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Notably
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Transform your note-taking experience with AI-powered intelligence and intuitive organization.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          
          {/* Navigation links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-medium text-white mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary text-sm flex items-center group"
                    >
                      {link.text}
                      <ArrowUpRight className="ml-1.5 h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Notably. All rights reserved.
          </div>
          
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 border border-white/5 hover:border-white/20 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
