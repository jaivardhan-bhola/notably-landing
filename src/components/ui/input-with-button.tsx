
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function InputWithButton() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    toast({
      title: "Thanks for joining!",
      description: "We'll be in touch soon!",
    });
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Joining..." : "Get Early Access"}
      </Button>
    </form>
  );
}
