import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, AlertCircle } from "lucide-react";

// Google Form URL
const GOOGLE_FORM_URL = "https://app.pagio.tech";

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
    <div className="flex flex-col w-full max-w-sm gap-2 relative">
      <div className="flex items-center text-amber-500 text-sm mb-2 animate-pulse">
        {/* <AlertCircle className="h-4 w-4 mr-1" /> */}
        <span> </span>
      </div>
      <Button 
        onClick={handleRedirect}
        className="w-full relative overflow-hidden group transition-all duration-300"
      >        <span className="flex items-center justify-center">
          Try out Pagio
        </span>
      </Button>
    </div>
  );
}
