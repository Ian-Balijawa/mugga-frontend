import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { coreValues } from "@/pages/data";

export function About() {
	const { data: coaches = [] } = useQuery({
		queryKey: ["coaches"],
		queryFn: () => api.getCoaches(),
	});

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
			{/* Hero Section */}
			<section className="relative py-20 bg-primary-600">
				<div className="absolute inset-0 bg-primary-900/20" />
				<div className="container relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto text-center text-white"
					>
						<h1 className="text-5xl font-bold mb-6">About Us</h1>
					</motion.div>
				</div>
			</section>

			{/* Mission & Vision Section */}
			<section className="py-16 bg-primary-50">
				<div className="container">
					<div className="grid gap-8 md:grid-cols-2">
						{/* Mission */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<Card className="h-full">
								<CardContent className="p-6">
									<div className="flex items-center gap-4 mb-6">
										<Target className="h-8 w-8 text-primary-600" />
										<h2 className="text-2xl font-bold">Our Mission</h2>
									</div>
									<p className="text-muted-foreground leading-relaxed">
										To provide exceptional travel experiences by offering
										seamless, reliable, and personalized services that connect
										our clients with unique destinations and cultural
										experiences. We aim to make travel easy and memorable,
										ensuring that every journey is not just a trip, but a
										transformative adventure. Our mission is to foster
										connections, inspire wanderlust, and offer sustainable
										travel options that contribute to the well-being of both our
										clients and the communities we serve.
									</p>
								</CardContent>
							</Card>
						</motion.div>

						{/* Vision */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<Card className="h-full">
								<CardContent className="p-6">
									<div className="flex items-center gap-4 mb-6">
										<Target className="h-8 w-8 text-primary-600" />
										<h2 className="text-2xl font-bold">Our Mission</h2>
									</div>
									<p className="text-muted-foreground leading-relaxed">
										To provide exceptional travel experiences by offering
										seamless, reliable, and personalized services that connect
										our clients with unique destinations and cultural
										experiences. We aim to make travel easy and memorable,
										ensuring that every journey is not just a trip, but a
										transformative adventure. Our mission is to foster
										connections, inspire wanderlust, and offer sustainable
										travel options that contribute to the well-being of both our
										clients and the communities we serve.
									</p>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</div>
			</section>

			{/* History Section */}
			<section className="py-16">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="max-w-3xl mx-auto"
					>
						<Card className="p-8 shadow-lg">
							<CardContent className="space-y-6">
								<div className="flex items-center gap-4 mb-6">
									<div className="h-16 w-1 bg-primary-600" />
									<h2 className="text-3xl font-bold">About Us</h2>
								</div>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Established in 2010, Tours Travel has rapidly grown into one of
									the most trusted travel agencies in the region. With a
									commitment to providing unforgettable travel experiences, we
									offer personalized itineraries, expert advice, and seamless
									service to ensure every trip is extraordinary. Our team of
									passionate travel professionals works tirelessly to offer the
									best in transportation, accommodations, and experiences for both
									leisure and business travelers. Over the years, we have built
									strong relationships with top service providers, ensuring our
									clients receive the highest quality service every time. Whether
									it’s a family vacation, a corporate retreat, or an adventurous
									getaway, we are dedicated to making every journey special.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</section>

			{/* Core Values Section */}
			<section className="py-16">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">Our Core Values</h2>
					</motion.div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{coreValues.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card className="h-full">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-2">{value.title}</h3>
										<p className="text-muted-foreground">{value.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Leadership Section */}
			<section className="py-16">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">Our Leadership</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Meet the dedicated team guiding our vision
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{coaches
							.filter((coach) => coach.role.toLowerCase().includes("board"))
							.map((coach, index) => (
								<motion.div
									key={coach.name}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
								>
									<Card className="overflow-hidden hover:shadow-lg transition-all">
										<div className="aspect-square relative overflow-hidden">
											<img
												src={coach.imageUrl}
												alt={coach.name}
												className="object-cover w-full h-full transition-transform hover:scale-105"
											/>
										</div>
										<CardContent className="p-6 text-center">
											<h3 className="text-xl font-bold">{coach.name}</h3>
											<p className="text-primary-600">{coach.role}</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
