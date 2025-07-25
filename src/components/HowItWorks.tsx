import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, Tag, PenTool, CheckCircle, Calendar, MessageSquare, ChevronLeft, ChevronRight, Video } from "lucide-react";

const howItWorks = [
	{
		icon: Sparkles,
		title: "AI Summarization",
		description:
			"Instantly condense long notes into concise, clear overviews — perfect for review and recall.",
		mockup: "ai-summarization", // placeholder for mockup identifier
	},
	{
		icon: Tag,
		title: "Auto Tagging",
		description:
			"Let Pagio understand your notes and categorize them automatically for effortless organization.",
		mockup: "auto-tagging",
	},	{
		icon: PenTool,
		title: "Canvas & Sketching",
		description:
			"Draw, sketch, and visualize your ideas — create diagrams, mind maps, and visual notes that bring thoughts to life.",
		mockup: "canvas-sketching",
	},
	{
		icon: CheckCircle,
		title: "Notes to Subtasks",
		description:
			"Highlight key actions in your notes and convert them directly into actionable tasks.",
		mockup: "notes-subtasks",
	},
	{
		icon: Calendar,
		title: "Calendar Integration",
		description:
			"Turn tasks into scheduled events, helping you move from idea → execution without switching apps.",
		mockup: "calendar-integration",
	},
	{
		icon: MessageSquare,
		title: "Chat with notes",
		description:
			"Ask questions and get answers derived directly from your knowledge base and personal notes.",
		mockup: "chat-notes",
	},
];

export function HowItWorks() {
	const [currentSlide, setCurrentSlide] = useState(0);	// Auto-advance slideshow
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % howItWorks.length);
		}, 20000); // Change slide every 20 seconds
		
		return () => clearInterval(timer);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % howItWorks.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + howItWorks.length) % howItWorks.length);
	};
	const currentItem = howItWorks[currentSlide];	return (		<section
			id="how-it-works"
			className="relative min-h-screen py-12 px-4 text-white rounded-2xl"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="relative z-10 max-w-5xl mx-auto w-full h-full flex flex-col"
			><h2 className="font-ntype text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent text-center">
					How Pagio Works
				</h2>
				
				<div className="max-w-3xl mx-auto mb-8">
					<p className="text-gray-300 text-center text-lg leading-relaxed">
						Discover how Pagio transforms your note-taking experience with powerful AI features. 
						Explore each capability through interactive demos and see how our intelligent tools help you 
						capture, organize, and leverage your ideas more effectively than ever before.
					</p>
				</div>

				{/* Feature boxes navigation */}
				<div className="flex flex-wrap justify-center gap-2 mb-6">{howItWorks.map((item, idx) => (
						<button
							key={item.title}
							onClick={() => setCurrentSlide(idx)}
							className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
								idx === currentSlide
									? "bg-white/10 border-primary/50 text-white"
									: "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
							}`}
						>
							<div className={`w-6 h-6 rounded-md flex items-center justify-center ${
								idx === currentSlide 
									? "bg-gradient-to-br from-primary/40 to-primary/20" 
									: "bg-white/10"
							}`}>
								<item.icon className="w-4 h-4" />
							</div>
							<span className="font-medium text-xs">{item.title}</span>
						
						</button>
					))}				</div>				{/* Mockup area */}
				<div className="relative h-[400px] mb-8"><motion.div
						key={currentSlide}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.5 }}						className={`${
							currentItem.mockup === "ai-summarization" || currentItem.mockup === "auto-tagging" || currentItem.mockup === "canvas-sketching" || currentItem.mockup === "notes-subtasks" || currentItem.mockup === "calendar-integration" || currentItem.mockup === "chat-notes"
								? "aspect-video h-full w-full flex items-center justify-center"
								: "bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm aspect-video h-full flex items-center justify-center"
						}`}>						{/* Show actual mockups for all features */}						{currentItem.mockup === "ai-summarization" ? (							<div className="w-full max-h-[400px] rounded-xl overflow-hidden">
								<video
									src="/mockups/Summarizer.mp4"
									className="w-full h-full object-contain"
									autoPlay
									loop
									muted
								/>
							</div>
						) : currentItem.mockup === "auto-tagging" ? (							<div className="w-full max-h-[400px] rounded-xl overflow-hidden">
								<video
									src="/mockups/AutoTagging.mp4"
									className="w-full h-full object-contain"
									autoPlay
									loop
									muted
								/>
							</div>
						) : currentItem.mockup === "canvas-sketching" ? (							<div className="w-full max-h-[400px] rounded-xl overflow-hidden">
								<video
									src="/mockups/Canvas.mp4"
									className="w-full h-full object-contain"
									autoPlay
									loop
									muted
								/>
							</div>
						) : currentItem.mockup === "notes-subtasks" ? (							<div className="w-full max-h-[400px] rounded-xl overflow-hidden">
								<video
									src="/mockups/Subtasks.mp4"
									className="w-full h-full object-contain"
									autoPlay
									loop
									muted
								/>
							</div>
						) : currentItem.mockup === "calendar-integration" ? (
							<div className="w-full h-full rounded-xl overflow-hidden">
								<video
									src="/mockups/Calendar.mp4"
									className="w-full h-full object-contain"
									autoPlay
									loop
									muted
								/>
							</div>
						) : currentItem.mockup === "chat-notes" ? (
							<div className="w-full h-full rounded-xl overflow-hidden">
								<video
									src="/mockups/Chat.mp4"
									className="w-full h-full object-contain"
									autoPlay
									loop
									muted
								/>
							</div>
						) : (
							<div className="text-center">
								<div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto">
									<currentItem.icon className="w-10 h-10 text-primary/70" />
								</div>
								<p className="text-gray-400 text-sm">
									Mockup for {currentItem.title}
								</p>
								<p className="text-gray-500 text-xs mt-1">
									Coming soon: Interactive demo
								</p>
							</div>
						)}
					</motion.div>

					{/* Navigation arrows */}
					<button
						onClick={prevSlide}
						className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
					<button
						onClick={nextSlide}
						className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
					>
						<ChevronRight className="w-5 h-5" />
					</button>
				</div>				{/* Slide indicators */}
				<div className="flex justify-center gap-2 mt-4">
					{howItWorks.map((_, idx) => (
						<button
							key={idx}
							onClick={() => setCurrentSlide(idx)}
							className={`w-2 h-2 rounded-full transition-colors ${
								idx === currentSlide ? "bg-primary" : "bg-white/20"
							}`}
						/>
					))}
				</div>

				<div className="mt-4 text-xs text-gray-400 text-center">
					Your notes stay private — nothing is used to train models.
				</div>

				{/* Try out Pagio button */}
				<div className="mt-6 text-center">
					<button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
						Try out Pagio
					</button>
				</div>
			</motion.div>
		</section>
	);
}
