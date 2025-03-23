import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Program } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Bus } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
	accommodationTypes,
	additionalServices,
	coreServices,
	transportationOptions,
	travelPackages,
} from "@/pages/data/programs";

const ProgramsPage = () => {
	const [category, setCategory] = useState<Program["category"] | "all">("all");
	const [search, setSearch] = useState("");
	const [ref, inView] = useInView({ triggerOnce: true });

	const { data: programs = [], refetch } = useQuery({
		queryKey: ["admin", "programs"],
		queryFn: api.getPrograms,
	});

	useEffect(() => {
		refetch();
	}, [refetch]);

	const filteredServices = programs.filter((program) => {
		const matchesCategory = category === "all" || program.category === category;
		const matchesSearch =
			program.name.toLowerCase().includes(search.toLowerCase()) ||
			program.description.toLowerCase().includes(search.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-green-50">
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
						<h1 className="text-5xl font-bold mb-6">Our Travel Programs</h1>
						<p className="text-xl text-white/90">
							Comprehensive travel programs designed to create unforgettable
							experiences while fostering cultural enrichment and personal growth.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Core Services */}
			<section className="py-16">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">Core Travel Programs</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Our flagship travel programs designed to offer unique and enriching
							experiences for travelers of all kinds.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{coreServices.map((program, index) => (
							<motion.div
								key={program.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.2,
									ease: "easeOut",
								}}
							>
								<Card className="h-full hover:shadow-lg transition-shadow">
									<div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
										{program.icon}
									</div>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-4">{program.title}</h3>
										<ul className="space-y-2 text-muted-foreground">
											{program.features.map((feature) => (
												<li
													key={feature}
													className="flex items-center gap-2"
												>
													<div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
													{feature}
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Additional Services */}
			<section className="py-16 bg-gradient-to-b from-green-50 to-white">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">Additional Travel Services</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Complementary services designed to enhance your travel experience,
							offering unique and tailored travel solutions.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{additionalServices.map((service, index) => (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, scale: 0.9, y: 20 }}
								whileInView={{ opacity: 1, scale: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.15,
									ease: "easeOut",
								}}
							>
								<Card className="h-full hover:shadow-lg transition-shadow">
									<CardContent className="p-6">
										<div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
											{service.icon}
										</div>
										<h3 className="text-xl font-bold mb-2">{service.title}</h3>
										<p className="text-muted-foreground">
											{service.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Digital Skills Section */}
			<section className="py-16">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">
							Digital Skills for Travel Professionals
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Empowering travel professionals with essential digital skills to enhance
							customer experiences and streamline operations.
						</p>
					</motion.div>

					<Card className="overflow-hidden">
						<div className="grid grid-cols-1 md:grid-cols-2">
							<div className="p-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
								<div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
									<Bus className="h-8 w-8" />
								</div>
								<h3 className="text-2xl font-bold mb-4">Transportation Options</h3>
								<ul className="space-y-3">
									{transportationOptions.map((feature) => (
										<li key={feature} className="flex items-center gap-2">
											<div className="h-1.5 w-1.5 rounded-full bg-white" />
											{feature}
										</li>
									))}
								</ul>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold mb-4">Program Benefits</h3>
								<ul className="space-y-3">
									{accommodationTypes.map((benefit) => (
										<li
											key={benefit}
											className="flex items-center gap-2 text-muted-foreground"
										>
											<div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
											{benefit}
										</li>
									))}
								</ul>
							</div>
						</div>
					</Card>
				</div>
			</section>

			{/* Creative Industry Services */}
			<section className="py-16 bg-gradient-to-b from-white to-green-50">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">Tours & Travel Services</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Offering expert travel planning and customized tour experiences, helping
							you explore the world with ease and excitement.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{travelPackages.map((program, index) => (
							<motion.div
								key={program.title}
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.2,
									ease: "easeOut",
								}}
							>
								<Card className="h-full hover:shadow-lg transition-shadow">
									<CardContent className="p-6">
										<div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
											{program.icon}
										</div>
										<h3 className="text-xl font-bold mb-4">{program.title}</h3>
										<ul className="space-y-2">
											{program.features.map((feature) => (
												<li
													key={feature}
													className="flex items-center gap-2 text-muted-foreground"
												>
													<div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
													{feature}
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Program Catalog */}
			<section className="py-16">
				<div className="container">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold">Services Catalog</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Browse our complete selection of services
						</p>
					</motion.div>

					{/* Filters */}
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-8">
						<Select
							value={category}
							onValueChange={(value) =>
								setCategory(value as Program["category"] | "all")
							}
						>
							<SelectTrigger className="w-full sm:w-[200px]">
								<SelectValue placeholder="Category" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Categories</SelectItem>
								<SelectItem value="training">Training</SelectItem>
								<SelectItem value="camp">Camps</SelectItem>
								<SelectItem value="clinic">Clinics</SelectItem>
							</SelectContent>
						</Select>
						<Input
							placeholder="Search programs..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="w-full sm:w-[300px]"
						/>
					</div>

					{/* Services Grid */}
					<div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{filteredServices.map((program, index) => (
							<motion.div
								key={program.id}
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, delay: index * 0.1 }}
							>
								<Card className="overflow-hidden hover:shadow-lg transition-all group">
									<div className="aspect-video relative overflow-hidden">
										<img
											src={program.imageUrl}
											alt={program.name}
											className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
										<div className="absolute bottom-4 left-4 right-4">
											<span className="inline-block rounded-full bg-primary-500/90 px-3 py-1 text-xs font-medium text-white">
												{program.category}
											</span>
										</div>
									</div>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
											{program.name}
										</h3>
										<p className="text-sm text-muted-foreground mb-4">
											{program.description.length > 150
												? `${program.description.substring(0, 150)}...`
												: program.description}
										</p>
										<div className="flex items-center justify-between mb-4">
											<span className="text-sm font-medium text-muted-foreground">
												{program.duration}
											</span>
											<span className="text-sm font-medium text-muted-foreground">
												{program.price > 1 ? `${program.price}` : "Free"}
											</span>
										</div>
										<Button asChild className="w-full" variant="outline">
											<Link to={`/programs/${program.id}`}>
												Read More
												<ArrowRight className="ml-2 h-4 w-4" />
											</Link>
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>

					{filteredServices.length === 0 && (
						<p className="text-center text-muted-foreground">
							No programs found matching your criteria.
						</p>
					)}
				</div>
			</section>
		</div>
	);
};

export default ProgramsPage;
