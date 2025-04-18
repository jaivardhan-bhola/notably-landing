import { Brain, Search, FileText, Link2, MessageSquare, ArrowRight, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const features = [
  {
    icon: Brain,
    title: "Auto-summarize long notes",
    description: "Instantly distill lengthy documents and meeting notes into concise, actionable takeaways.",
  },
  {
    icon: Search,
    title: "Smart search (semantic)",
    description: "Find relevant information based on concepts and meaning, not just keywords or exact phrases.",
  },
  {
    icon: Tag,
    title: "Auto-tagging and categorization",
    description: "AI automatically organizes your notes with relevant tags and categories for effortless retrieval.",
  },
  {
    icon: Link2,
    title: "Auto-linking related notes",
    description: "Discover connections between your ideas as the system automatically links related content.",
  },
  {
    icon: FileText,
    title: "Generate notes from audio/video",
    description: "Convert recordings of meetings, lectures, and interviews into structured, searchable notes.",
  },
  {
    icon: MessageSquare,
    title: "Chat with your notes",
    description: "Ask questions and get answers derived directly from your knowledge base and personal notes.",
  },
];

export function Features() {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-[#0a0a0a] text-white">
      {/* Modern Gradient Background with Mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/20 via-black/60 to-blue-900/20 opacity-40 blur-3xl" />
        <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      {/* Mesh Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="bg-primary rounded-full w-3 h-3 animate-pulse"></span>
                <span className="text-sm font-medium">AI-powered features</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                <span className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">Notably's</span> next-level productivity tools
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-xl">
                Notably combines powerful AI capabilities with intuitive design to transform how you work with notes and information.
              </p>
              {/* "Explore all features" button removed as requested */}
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-1 backdrop-blur-sm"
            >
              <div className="bg-black/50 rounded-xl p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <Search className="w-5 h-5 text-purple-300" />
                    </div>
                    <div>
                      <div className="w-32 h-3 bg-white/20 rounded-full"></div>
                      <div className="w-20 h-2 bg-white/10 rounded-full mt-2"></div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-8 h-8 rounded-md bg-white/10"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-full h-12 bg-white/5 rounded-md"></div>
                    <div className="w-full h-12 bg-gradient-to-r from-purple-500/30 to-purple-700/30 rounded-md border border-purple-500/40"></div>
                    <div className="w-full h-12 bg-white/5 rounded-md"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative rounded-xl overflow-hidden"
            >
              {/* Card Background with Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              <div className="absolute inset-0 border border-white/5 group-hover:border-white/10 rounded-xl transition-all duration-300"></div>
              
              {/* Card Content */}
              <div className="relative p-5 sm:p-6 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/50" />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3 text-white group-hover:text-primary/90 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                  {feature.description}
                </p>
                
                {/* Hover line animation */}
                <div className="mt-auto">
                  <div className="w-0 group-hover:w-full h-px bg-gradient-to-r from-primary/80 to-primary/20 transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
