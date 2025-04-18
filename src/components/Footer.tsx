
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © 2024 Notably. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </a>
        </div>
        
        <div className="flex gap-4">
          {[
            { icon: Twitter, href: "#" },
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
