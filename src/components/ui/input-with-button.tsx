import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export function InputWithButton() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsSuccess(true);
    
    toast({
      title: "Thanks for joining!",
      description: "We'll be in touch soon!",
    });
    
    // Reset after showing success state
    setTimeout(() => {
      setEmail("");
      setIsSuccess(false);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2 relative">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 transition-all duration-300 border ${
          isSuccess ? "border-green-500/50 bg-green-500/10" : "border-white/10 focus:border-primary/50"
        }`}
        disabled={isSubmitting || isSuccess}
      />
      <Button 
        type="submit" 
        disabled={isSubmitting || isSuccess}
        className={`relative overflow-hidden group transition-all duration-300 ${
          isSuccess ? "bg-green-600 hover:bg-green-700" : ""
        }`}
      >
        <motion.span
          animate={{ 
            opacity: isSubmitting ? 0 : 1, 
            y: isSubmitting ? -20 : 0 
          }}
          className="flex items-center"
        >
          {isSuccess ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Joined
            </>
          ) : (
            <>
              Get Early Access
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </motion.span>
        
        {isSubmitting && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex space-x-1">
              <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
              <div className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </motion.div>
        )}
      </Button>
    </form>
  );
}
