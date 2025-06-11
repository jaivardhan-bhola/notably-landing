import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ContactForm } from "./ui/contact-form";
import { useState, useEffect } from "react";

const socialLinks = [
	{
		icon: () => (
			<svg width="16" height="16" viewBox="0 0 40 40" fill="currentColor">
				<g>
					<path d="M20,0C8.956,0,0,8.956,0,20s8.956,20,20,20s20-8.956,20-20S31.044,0,20,0z M20,36.2c-8.944,0-16.2-7.256-16.2-16.2S11.056,3.8,20,3.8S36.2,11.056,36.2,20S28.944,36.2,20,36.2z" />
					<path d="M22.12,14.496h-5.888V25.84h3.92v-4.4h1.968c2.816,0,5.152-2.304,5.152-5.472C27.272,13.408,25.936,14.496,22.12,14.496z M22.224,18.337h-2.072v-1.184h2.072c0.88,0,1.568,0.24,1.568,0.592C23.792,18.098,23.104,18.337,22.224,18.337z" />
				</g>
			</svg>
		),
		href: "https://www.producthunt.com/products/notably-3",
		label: "Product Hunt",
	},
	{ icon: Instagram, href: "https://www.instagram.com/Pagio.ai/", label: "Instagram" },
	{ icon: Linkedin, href: "https://www.linkedin.com/company/Pagio-ai-india/", label: "LinkedIn" },
];

export function Footer() {
	const [isContactFormOpen, setIsContactFormOpen] = useState(false);
	const scrollToSection = (sectionId: string) => {
		// Check if we're on the home page
		if (window.location.pathname === '/') {
			// We're on the home page, just scroll
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ 
					behavior: 'smooth',
					block: 'start'
				});
			}
		} else {
			// We're on a different page, navigate to home with hash
			window.location.href = `/#${sectionId}`;
		}
	};

	return (
		<footer className="relative py-12 px-4 overflow-hidden text-white">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="relative z-10 max-w-7xl mx-auto"			>				{/* Main footer content */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand and description */}
					<div className="col-span-1 md:col-span-1">
						<div className="text-xl font-bold mb-4">Pagio</div>
						<p className="text-gray-400 text-sm leading-relaxed">
							AI-powered productivity tools that help you organize, manage, and optimize your workflow effortlessly.
						</p>
					</div>

					{/* Product links */}					<div>
						<h3 className="text-white font-semibold mb-4">Product</h3>						<ul className="space-y-3 text-sm">
							<li>
								<button 
									onClick={() => scrollToSection('comparison')}
									className="text-gray-400 hover:text-white transition-colors text-left"
								>
									Comparison
								</button>
							</li>
							<li>
								<button 
									onClick={() => scrollToSection('pricing')}
									className="text-gray-400 hover:text-white transition-colors text-left"
								>
									Pricing
								</button>
							</li>
							<li>
								<button 
									onClick={() => scrollToSection('how-it-works')}
									className="text-gray-400 hover:text-white transition-colors text-left"
								>
									How It Works
								</button>
							</li>
						</ul>
					</div>

					{/* Legal and Social */}
					<div>						<h3 className="text-white font-semibold mb-4">Connect</h3>
						<ul className="space-y-3 text-sm mb-6">
							<li>
								<button 
									onClick={() => setIsContactFormOpen(true)}
									className="text-gray-400 hover:text-white transition-colors text-left"
								>
									Contact Us
								</button>
							</li>
							<li>
								<Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
									Terms of Service
								</Link>
							</li>
						</ul>
						
						{/* Social links */}
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
				</div>

				{/* Bottom section with copyright */}
				<div className="pt-8 border-t border-white/10">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="text-sm text-gray-400">
							© {new Date().getFullYear()} Pagio. All rights reserved.
						</div>						<div className="flex flex-wrap gap-6 text-sm text-gray-400">
							<Link to="/privacy-policy" className="hover:text-white transition-colors">
								Privacy
							</Link>
							<Link to="/terms" className="hover:text-white transition-colors">
								Terms
							</Link>
						</div>
					</div>
				</div>
			</motion.div>

			{/* Contact Form Modal */}
			<ContactForm 
				isOpen={isContactFormOpen} 
				onClose={() => setIsContactFormOpen(false)} 
			/>
		</footer>
	);
}
