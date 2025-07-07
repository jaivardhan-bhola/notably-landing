// filepath: /home/jai/Code/Pensa/landing/src/pages/Pricing.tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// import { CTA } from "@/components/CTA"; // CTA is not used
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // Import useState and useEffect

// Google Form URL for signup
const GOOGLE_FORM_URL = "https://app.pagio.tech";

const initialPlans = [
	{
		name: "Free",
		description: "Perfect for getting started with Pensa",
		price: "Free", // Default and only price for the Free plan
		features: [
			"50 notes",
			"10 summaries per week",
			"10 subtask creations per day",
			"50 chat messages per day",
			"Basic customer support",
		],
		buttonText: "Get Started",
		highlighted: false,
	},
	{
		name: "Plus",
		description: "For power users who need more",
		price: "$9", // Default price set to USD
		priceUSD: "$9",
		priceINR: "₹299",
		features: [
			"250 notes",
			"25 summaries per week",
			"25 subtask creations per day",
			"100 chat messages per day",
			"Auto Tagging",
			"Priority customer support",
		],
		buttonText: "Subscribe Now",
		highlighted: true,
	},
	{
		name: "Pro",
		description: "For teams and professionals who need the best",
		price: "$15", // Default price set to USD
		priceUSD: "$15",
		priceINR: "₹599",
		features: [
			"Unlimited Notes",
			"50 summaries per week",
			"50 subtask creations per day",
			"250 chat messages per day",
			"Auto Tagging",
			"24/7 premium support",
		],
		buttonText: "Go Pro",
		highlighted: false,
	},
];

function FeatureItem({ text }: { text: string }) {
	return (
		<div className="flex items-center gap-2">
			<CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
			<span className="text-sm">{text}</span>
		</div>
	);
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
	},
};

export default function Pricing() {
	const [currentPlans, setCurrentPlans] = useState(() =>
		initialPlans.map((p) => ({ ...p })) // Initialize with defaults from initialPlans
	);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchLocationAndSetPrices = async () => {
			setIsLoading(true);
			try {
				const response = await fetch("https://get.geojs.io/v1/ip/geo.json"); // Updated API endpoint
				if (!response.ok) {
					console.warn(
						`API request to get.geojs.io failed with status: ${response.status}. Falling back to default (USD) prices.`
					);
					setCurrentPlans(
						initialPlans.map((plan) => ({
							...plan,
							price: plan.priceUSD || plan.price, // Fallback to USD or plan's default price
						}))
					);
					return;
				}
				const data = await response.json();
				const country = data.country_code;

				if (country === "IN") {
					setCurrentPlans(
						initialPlans.map((plan) => ({
							...plan,
							price: plan.priceINR || plan.price, // Use INR price or plan's default price
						}))
					);
				} else {
					setCurrentPlans(
						initialPlans.map((plan) => ({
							...plan,
							price: plan.priceUSD || plan.price, // Use USD price or plan's default price
						}))
					);
				}
			} catch (error) {
				console.error(
					"Failed to fetch location or set prices, falling back to default (USD):",
					error
				);
				setCurrentPlans(
					initialPlans.map((plan) => ({
						...plan,
						price: plan.priceUSD || plan.price, // Fallback to USD or plan's default price
					}))
				);
			} finally {
				setIsLoading(false);
			}
		};

		fetchLocationAndSetPrices();
	}, []); // Empty dependency array ensures this runs once on mount

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-background/90">
			<Header />
			<main className="pt-28 pb-16">
				<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-muted/50 border border-border backdrop-blur-sm">
							<Zap className="h-4 w-4 text-primary" />
							<span className="text-sm font-medium">
								Choose the right plan for you
							</span>
						</div>

						<h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
							Simple, Transparent Pricing
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Select the perfect plan that fits your productivity needs. Upgrade or
							downgrade anytime.
						</p>
					</motion.div>

					{isLoading ? (
						<div className="text-center py-10 text-lg font-medium">
							Loading pricing plans...
						</div>
					) : (
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate="visible"
							className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
						>
							{currentPlans.map((plan) => (
								<Card
									key={plan.name}
									className={`flex flex-col h-full ${
										plan.highlighted
											? "border-primary shadow-lg relative overflow-hidden"
											: ""
									}`}
								>
									{plan.highlighted && (
										<div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
											POPULAR
										</div>
									)}
									<CardHeader>
										<CardTitle>{plan.name}</CardTitle>
										<CardDescription>{plan.description}</CardDescription>
										<div className="mt-4">
											<span className="text-3xl font-bold">{plan.price}</span>
											{plan.price !== "Free" && (
												<span className="text-muted-foreground ml-1">
													/month
												</span>
											)}
										</div>
									</CardHeader>
									<CardContent className="flex-grow">
										<div className="space-y-3">
											{plan.features.map((feature) => (
												<FeatureItem key={feature} text={feature} />
											))}
										</div>
									</CardContent>
									<CardFooter>
										<Button
											className="w-full"
											onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
										>
											{plan.buttonText}
										</Button>
									</CardFooter>
								</Card>
							))}
						</motion.div>
					)}

					<div className="mt-20 text-center">
						<h2 className="text-2xl font-bold mb-4">Need a custom plan?</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto mb-6">
							We offer custom enterprise plans for teams with specific needs.
							Contact us to discuss your requirements.
						</p>
						<Button
							size="lg"
							onClick={() => window.open("mailto:Pensaai@gmail.com", "_blank")}
						>
							Contact Sales
						</Button>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
