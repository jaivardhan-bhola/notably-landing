import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Added import

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
	return (
		<footer className="relative py-6 px-4 overflow-hidden text-white">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="relative z-10 max-w-7xl mx-auto"
			>				{/* Bottom section with copyright */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
						<div>© {new Date().getFullYear()} Pagio. All rights reserved.</div>						<Link to="/privacy-policy" className="hover:text-white transition-colors">
							Privacy Policy
						</Link>
						<a 
							href="mailto:support@pagio.tech" 
							className="hover:text-white transition-colors"
						>
							Contact Us
						</a>
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
