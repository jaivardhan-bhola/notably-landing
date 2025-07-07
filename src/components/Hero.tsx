import { InputWithButton } from "./ui/input-with-button";
import { Sparkles, Code, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile"; // Fixed import name

// Define the typewriter phrases
const typewriterPhrases = [
	{
		title: "Remember",
		description:
			"Pagio catches your ideas before they slip away. Draw, sketch, or drop a thought—it's all saved, no judgment.",
	},
	{
		title: "Focus",
		description:
			"No more digging for notes. Pagio finds what matters, so you can get back to work (or life) faster.",
	},
	{
		title: "Move",
		description:
			"Turn scribbles into action. Pagio turns your notes into tasks, so nothing gets lost in the shuffle.",
	},
	{
		title: "Connect",
		description:
			"Your notes finally talk to each other. Pagio links ideas, tasks, and reminders—automatically.",
	},
];

export function Hero() {
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const isMobile = useIsMobile(); // Fixed function name

	useEffect(() => {
		const currentPhrase = typewriterPhrases[currentPhraseIndex].title;

		// Typing effect timing
		const typingSpeed = 150; // Speed while typing
		const deletingSpeed = 75; // Speed while deleting
		const pauseBeforeDelete = 2000; // Pause before deleting text
		const pauseBeforeNextPhrase = 300; // Pause before typing next phrase

		let timer;

		if (!isDeleting && displayText === currentPhrase) {
			// Full phrase typed, pause before delete
			timer = setTimeout(() => {
				setIsDeleting(true);
			}, pauseBeforeDelete);
		} else if (isDeleting && displayText === "") {
			// Finished deleting, move to next phrase
			setIsDeleting(false);
			setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % typewriterPhrases.length);
			setLoopNum((prevLoopNum) => prevLoopNum + 1);
			timer = setTimeout(() => {}, pauseBeforeNextPhrase);
		} else {
			// Handle typing or deleting
			timer = setTimeout(() => {
				setDisplayText((prevText) => {
					if (isDeleting) {
						return prevText.substring(0, prevText.length - 1);
					} else {
						return currentPhrase.substring(0, prevText.length + 1);
					}
				});
			}, isDeleting ? deletingSpeed : typingSpeed);
		}

		return () => clearTimeout(timer);
	}, [displayText, currentPhraseIndex, isDeleting]);

	return (
		<section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-white">
			{/* Enhanced Gradient Background with 3D feel */}
			

			{/* Decorative Elements - Hide some on mobile for cleaner look */}
			{!isMobile && (
				<>
					<div className="absolute top-20 left-10 w-40 h-40 border border-purple-500/20 rounded-full" />
					<div className="absolute bottom-20 right-10 w-60 h-60 border border-blue-500/20 rounded-full" />
					<div className="absolute top-1/3 right-1/4 w-20 h-20 border border-purple-500/20 rounded-full" />
				</>
			)}

			{/* Hero Content */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="relative z-10 max-w-6xl w-full px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 py-8 md:py-0"
			>
				<div className="w-full md:w-3/5 text-left">
					<div className="inline-flex items-center space-x-2 px-4 py-2 mb-4 md:mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
						<span className="bg-primary rounded-full w-3 h-3 animate-pulse"></span>
						<span className="text-xs sm:text-sm font-medium">Built for people who think fast</span>
					</div>

					<h1 className="font-ntype text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent leading-relaxed pb-2">
						<span className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">Pagio:</span> Notes that&nbsp;
						<span className="text-primary transition-colors duration-300 underline decoration-primary decoration-8 underline-offset-8 pb-1">
							{displayText}
						</span> with you
					</h1>

					<p className="text-lg sm:text-xl text-gray-300 max-w-xl mt-4 sm:mt-6 mb-6 sm:mb-8 font-light leading-relaxed min-h-[6rem]">
						{typewriterPhrases[currentPhraseIndex].description}
					</p>

					<div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-10">
						<InputWithButton />

						{/* Product Hunt Badge */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.5 }}
							className="flex items-end justify-center sm:justify-start mt-6 sm:mt-0"
						>
							<a
								href="https://www.producthunt.com/products/notably-3?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-notably-5"
								target="_blank"
								rel="noopener noreferrer"
								className="transform hover:scale-105 transition-transform duration-300"
							>
								<img
									src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=955074&theme=dark&t=1745053161436"
									alt="Pagio - AI&#0032;notes&#0032;that&#0032;think&#0044;&#0032;link&#0044;&#0032;and&#0032;grow&#0032;with&#0032;you&#0046; | Product Hunt"
									width="250"
									height="54"
									className="hover:opacity-90 transition-opacity"
								/>
							</a>
						</motion.div>
					</div>

					{/* Feature Highlights - Responsive grid on mobile */}
					<div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
						<div className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-md">
							<Sparkles className="w-4 h-4 text-primary" />
							<span> Summarize in seconds</span>
						</div>
						<div className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-md">
							<Layers className="w-4 h-4 text-primary" />
							<span> Tags, sorted for you</span>
						</div>
						<div className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-md">
							<Code className="w-4 h-4 text-primary" />
							<span> Canvas & create</span>
						</div>
						<div className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-md">
							<Zap className="w-4 h-4 text-primary" />
							<span> Tasks, no friction</span>
						</div>
					</div>
				</div>

				{/* Hero Image/Visual - Better responsive sizing */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.3, duration: 0.7 }}
					className="w-full sm:max-w-[400px] md:w-2/5 mt-8 md:mt-0 relative"
				>
					<div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-1 backdrop-blur-md">
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl overflow-hidden">
							<div className="absolute top-0 right-0 w-full h-full bg-grid-white/5 bg-[length:20px_20px]" />
						</div>
						<div className="bg-black/50 rounded-xl p-4 md:p-6">
							{/* Mockup content - could be replaced with an actual app screenshot */}
							<div className="space-y-3">
								<div className="w-1/2 h-5 bg-white/10 rounded"></div>
								<div className="w-full h-16 bg-white/5 rounded"></div>
								<div className="flex gap-2">
									<div className="w-6 h-6 rounded-full bg-primary/80"></div>
									<div className="w-3/4 h-6 bg-white/10 rounded"></div>
								</div>
								<div className="w-5/6 h-12 bg-white/5 rounded"></div>
								<div className="w-full h-20 bg-white/5 rounded"></div>
								<div className="w-4/5 h-8 bg-white/10 rounded"></div>
							</div>
						</div>
					</div>
					<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl"></div>
					<Sparkles className="absolute top-6 right-6 w-8 h-8 text-primary animate-pulse-glow" />
				</motion.div>
			</motion.div>

			{/* Beta Launch Banner */}
			<div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
				<span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-base font-semibold text-white shadow-lg backdrop-blur-sm animate-pulse">
					 Beta Out Now
				</span>
			</div>
		</section>
	);
}

