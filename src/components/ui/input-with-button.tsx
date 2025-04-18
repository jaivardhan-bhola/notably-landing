import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";

// Google Form URL
const GOOGLE_FORM_URL = "https://forms.gle/1BuVjhTxHwXqUFa87";

export function InputWithButton({ placeholder = "Enter your email" }) {
  const { toast } = useToast();

  const handleRedirect = () => {
    // Open the Google Form in a new tab
    window.open(GOOGLE_FORM_URL, "_blank");
    
    toast({
      title: "Redirecting to sign up form",
      description: "Thanks for your interest in our product!",
    });
  };

  return (
    <div className="flex w-full max-w-sm gap-2 relative">
      <Button 
        onClick={handleRedirect}
        className="w-full relative overflow-hidden group transition-all duration-300"
      >
        <span className="flex items-center justify-center">
          Join Our Waitlist
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Button>
    </div>
  );
}
