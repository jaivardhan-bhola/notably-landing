import { motion } from "framer-motion";
import { Sparkles, Tag, PenTool, CheckCircle, Calendar, MessageSquare } from "lucide-react";

const howItWorks = [
	{
		icon: Sparkles,
		title: "AI Summarization",
		description:
			"Instantly condense long notes into concise, clear overviews — perfect for review and recall.",
	},
	{
		icon: Tag,
		title: "Auto Tagging",
		description:
			"Let Pagio understand your notes and categorize them automatically for effortless organization.",
	},	{
		icon: PenTool,
		title: "Canvas & Sketching",
		description:
			"Draw, sketch, and visualize your ideas — create diagrams, mind maps, and visual notes that bring thoughts to life.",
	},
	{
		icon: CheckCircle,
		title: "Notes to Subtasks",
		description:
			"Highlight key actions in your notes and convert them directly into actionable tasks.",
	},
	{
		icon: Calendar,
		title: "Calendar Integration",
		description:
			"Turn tasks into scheduled events, helping you move from idea → execution without switching apps.",
	},
	{
		icon: MessageSquare,
		title: "Chat with notes",
		description:
			"Ask questions and get answers derived directly from your knowledge base and personal notes.",
		badge: "Coming in Beta (June 2025)",
	},
];

export function HowItWorks() {
	return (
		<section
			id="how-it-works"
			className="relative py-32 px-4 overflow-hidden text-white rounded-2xl"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="relative z-10 max-w-5xl mx-auto"
			>
				<h2 className="font-ntype text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
					How Pagio Works
				</h2>
				<p className="text-lg text-gray-300 mb-10 max-w-2xl">
					Pagio uses AI to make your messy notes useful. Here's what happens
					behind the scenes:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{howItWorks.map((item, idx) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							viewport={{ once: true }}
							className="flex items-start gap-6 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.025] transition-transform duration-300"
						>
							<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
								<item.icon className="w-7 h-7 text-primary" />
							</div>
							<div>
								<h3 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
									{item.title}
									{item.badge && (
										<span className="ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold animate-pulse">
											{item.badge}
										</span>
									)}
								</h3>
								<p className="text-gray-300 text-base">
									{item.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
				<div className="mt-10 text-sm text-gray-400">
					Your notes stay private — nothing is used to train models.
				</div>
			</motion.div>
		</section>
	);
}
