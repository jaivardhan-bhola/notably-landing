import { CheckCircle, Sparkles, Star, Users, Zap, Construction } from "lucide-react";
import { InputWithButton } from "./ui/input-with-button";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

// Replace benefits array with more energetic, human copy
const benefits = [
	{
		icon: Star,
		title: "Early Access",
		description: "Be the first to try Pagio. Shape the future with your feedback.",
	},
	{
		icon: Zap,
		title: "Special Perks ",
		description: "Unlock exclusive features and surprises for our earliest users.",
	},
	{
		icon: Users,
		title: "Direct Line ",
		description: "Chat with the team. Your ideas actually get heard.",
	},
];

export function Benefits() {
	return (
		<section className="relative py-36 px-4 overflow-hidden text-white">
			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row items-center gap-16">
					{/* Left Column */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
						className="lg:w-1/2 text-left"
					>
						<Badge
							variant="outline"
							className="mb-6 px-4 py-2 border-white/10 bg-white/5 backdrop-blur-sm"
						>
							<Sparkles className="w-4 h-4 mr-2 text-yellow-400 animate-bounce" />
							<span> Beta Launching June 2025</span>
						</Badge>

						<h2 className="font-ntype text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
							<span className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
								Why join Pagio early?
							</span>
						</h2>
						<p className="text-xl text-gray-300 mb-10">
							Get in before the crowd. Help us build something you'll actually love.
						</p>

						<div className="space-y-8 mb-8">
							{benefits.map((benefit, index) => (
								<motion.div
									key={benefit.title}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="flex gap-4"
								>
									<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center">
										<benefit.icon className="w-6 h-6 text-primary" />
									</div>
									<div>
										<h3 className="text-lg font-medium text-white mb-1">
											{benefit.title}
										</h3>
										<p className="text-gray-400">
											{benefit.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Right Column */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						viewport={{ once: true }}
						className="lg:w-1/2"
					>
						<div className="relative">
							{/* Glass Card */}
							<div className="relative bg-gradient-to-br from-white/5 to-white/2 rounded-2xl border border-white/10 p-1 backdrop-blur-sm shadow-[0_0_60px_-15px_rgba(139,92,246,0.25)]">
								<div className="bg-black/40 rounded-xl p-8">
									<div className="flex items-center mb-8">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-800 flex items-center justify-center">
												<Sparkles className="w-5 h-5 text-white" />
											</div>
											<div>
												<h3 className="text-xl font-semibold text-white">
													Join the beta waitlist
												</h3>
												<p className="text-sm text-gray-400">
													Launching June 2025
												</p>
											</div>
										</div>
									</div>

									<div className="space-y-6 mb-8">
										<div className="space-y-4">
											{[
												"Get notified when our beta launches in June 2025",
												"Early access to new features",
												"Special offers for waitlist members",
											].map((benefit, index) => (
												<motion.div
													key={benefit}
													initial={{ opacity: 0, x: -10 }}
													whileInView={{ opacity: 1, x: 0 }}
													transition={{
														duration: 0.3,
														delay: index * 0.1 + 0.3,
													}}
													viewport={{ once: true }}
													className="flex items-center gap-3"
												>
													<CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
													<span className="text-gray-300">
														{benefit}
													</span>
												</motion.div>
											))}
										</div>
									</div>

									<div className="w-full">
										<InputWithButton placeholder="Enter your email for updates" />
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
