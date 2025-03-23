import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FAQItem {
	question: string;
	answer: string;
	category: string;
}

export function FAQ() {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<div className="container py-12">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
				<p className="mt-4 text-lg text-muted-foreground">
					Find answers to common questions about our tours, packages, and travel services.
				</p>

				<div className="mt-12 grid gap-8 md:grid-cols-2">
					{Object.entries(groupedFAQs).map(([category, items], categoryIndex) => (
						<motion.div
							key={category}
							ref={ref}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
						>
							<Card>
								<CardHeader>
									<CardTitle>{category}</CardTitle>
								</CardHeader>
								<CardContent>
									<Accordion type="single" collapsible className="w-full">
										{items.map((item, index) => (
											<AccordionItem
												key={index}
												value={`${category}-${index}`}
											>
												<AccordionTrigger>{item.question}</AccordionTrigger>
												<AccordionContent>{item.answer}</AccordionContent>
											</AccordionItem>
										))}
									</Accordion>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
}

const faqItems: FAQItem[] = [
	{
		category: "Tour Packages",
		question: "What types of tours do you offer?",
		answer: "We offer a variety of tours including cultural, adventure, beach, and wildlife tours. Our packages are customizable to fit your interests and preferences.",
	},
	{
		category: "Tour Packages",
		question: "How long are the tours?",
		answer: "Our tours range from one-day excursions to multi-week adventures. The duration of each tour varies depending on the destination and itinerary.",
	},
	{
		category: "Booking & Payments",
		question: "How do I book a tour?",
		answer: "You can easily book a tour through our website by selecting your desired package and completing the online booking form. We accept payments via credit card, PayPal, and bank transfer.",
	},
	{
		category: "Booking & Payments",
		question: "Can I pay in installments?",
		answer: "Yes, we offer flexible payment plans. You can pay in installments for most of our tours, with options available at checkout.",
	},
	{
		category: "Travel Insurance",
		question: "Do you offer travel insurance?",
		answer: "Yes, we offer comprehensive travel insurance to protect you in case of unexpected events such as cancellations, medical emergencies, or lost luggage.",
	},
	{
		category: "Travel Insurance",
		question: "Is travel insurance mandatory?",
		answer: "While travel insurance is not mandatory, we strongly recommend it to ensure a stress-free trip and coverage for unforeseen circumstances.",
	},
	{
		category: "Destinations & Accommodations",
		question: "What accommodations are included in the tour packages?",
		answer: "We include a range of accommodations depending on the tour package, including hotels, resorts, and eco-lodges. You can choose to upgrade to premium options for an additional cost.",
	},
	{
		category: "Destinations & Accommodations",
		question: "Can I customize my destination?",
		answer: "Yes, we offer customized tours where you can choose your desired destinations, accommodations, and activities. Our travel experts will help plan your perfect trip.",
	},
	{
		category: "Travel Essentials",
		question: "What should I pack for a tour?",
		answer: "We provide a recommended packing list based on your destination and the type of tour. Be sure to bring comfortable shoes, weather-appropriate clothing, and any required travel documents.",
	},
	{
		category: "Travel Essentials",
		question: "Do I need a visa for the tour?",
		answer: "Visa requirements vary by destination. We recommend checking the visa requirements for your specific destination and advising you to secure the necessary visa before your trip.",
	},
];

const groupedFAQs = faqItems.reduce((acc, item) => {
	if (!acc[item.category]) {
		acc[item.category] = [];
	}
	acc[item.category].push(item);
	return acc;
}, {} as Record<string, FAQItem[]>);
