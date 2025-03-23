import {
	Users,
	Target,
	Globe,
	Plane,
	Mountain,
	Hotel,
	LucideDraftingCompass,
	Ship,
} from "lucide-react";

export const coreServices = [
	{
		title: "Adventure Tours",
		icon: <Mountain className="h-12 w-12 text-white" />,
		features: [
			"Mountain climbing and trekking",
			"Guided expeditions in nature reserves",
			"Customizable itineraries for thrill-seekers",
			"Expert guides and safety measures",
		],
	},
	{
		title: "Beach Getaways",
		icon: <LucideDraftingCompass className="h-12 w-12 text-white" />,
		features: [
			"Seaside resorts and private beaches",
			"Water sports and relaxation packages",
			"Perfect for families and honeymooners",
			"Luxury and budget-friendly options",
		],
	},
	{
		title: "Cultural Tours",
		icon: <Target className="h-12 w-12 text-white" />,
		features: [
			"Historical site visits",
			"Cultural immersion experiences",
			"Local artisan workshops",
			"Authentic cuisine tasting and festivals",
		],
	},
];

export const additionalServices = [
	{
		title: "Eco-Tourism",
		description: "Sustainable travel packages focused on eco-friendly practices",
		icon: <Globe className="h-6 w-6 text-primary-600" />,
	},
	{
		title: "Corporate Travel",
		description: "Business and incentive travel packages for corporate clients",
		icon: <Users className="h-6 w-6 text-primary-600" />,
	},
	{
		title: "Cruise Packages",
		description: "Exclusive cruise tours to tropical destinations and scenic coastlines",
		icon: <Plane className="h-6 w-6 text-primary-600" />,
	},
	{
		title: "Custom Itineraries",
		description: "Tailor-made vacation plans to meet your specific interests",
		icon: <Target className="h-6 w-6 text-primary-600" />,
	},
];

export const transportationOptions = [
	"Private transfers",
	"Luxury coaches",
	"Group tours by minivan",
	"Private chauffeur-driven cars",
];

export const accommodationTypes = [
	"Luxury resorts",
	"Budget hotels",
	"Eco-friendly lodges",
	"Private villas and bungalows",
];

export const travelPackages = [
	{
		title: "Family Vacation",
		icon: <Hotel className="h-6 w-6 text-primary-600" />,
		features: [
			"Kid-friendly activities",
			"Guided tours",
			"All-inclusive resorts",
			"Relaxation and leisure time",
		],
	},
	{
		title: "Honeymoon Packages",
		icon: <Ship className="h-6 w-6 text-primary-600" />,
		features: [
			"Private beachfront villas",
			"Romantic sunset cruises",
			"Couple’s spa treatments",
			"Personalized experiences",
		],
	},
	{
		title: "Adventure Seekers",
		icon: <Mountain className="h-6 w-6 text-primary-600" />,
		features: [
			"Trekking and hiking",
			"Mountain biking",
			"Safari tours",
			"Cultural immersion activities",
		],
	},
];
