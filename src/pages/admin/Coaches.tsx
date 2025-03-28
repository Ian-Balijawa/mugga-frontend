import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { api } from "@/services/api";
import { CoachForm } from "@/components/admin/CoachForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CoachResponseDto } from "@/types/dtos";

export function Coaches() {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("all");
	const [selectedStaff, setSelectedStaff] = useState<CoachResponseDto | null>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const {
		data: staff = [],
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ["admin", "staff"],
		queryFn: api.getCoaches,
	});

	const handleDelete = async (id: number) => {
		if (window.confirm("Are you sure you want to delete this team member?")) {
			try {
				await api.deleteCoach(id);
				toast.success("Team member deleted successfully");
				refetch();
			} catch (error) {
				console.error(error);
				toast.error("Failed to delete team member");
			}
		}
	};

	const filteredStaff = staff.filter((staff) => {
		const matchesSearch = staff.name.toLowerCase().includes(search.toLowerCase());
		const matchesFilter =
			filter === "all" ||
			(filter === "tour guide" && staff.role.toLowerCase().includes("tour guide")) ||
			(filter === "tour operator" && staff.role.toLowerCase().includes("tour operator")) ||
			(filter === "other" &&
				!staff.role.toLowerCase().includes("tour operator") &&
				!staff.role.toLowerCase().includes("tour guide"));
		return matchesSearch && matchesFilter;
	});

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<div className="relative w-[300px]">
						<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
						<Input
							placeholder="Search staff..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="pl-9"
						/>
					</div>
					<div className="text-sm text-muted-foreground">
						Total Coaches: {staff.length}
					</div>
				</div>
				<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
					<DialogTrigger asChild>
						<Button onClick={() => setSelectedStaff(null)}>
							<Plus className="mr-2 h-4 w-4" />
							Add Member
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[600px]">
						<DialogHeader>
							<DialogTitle>
								{selectedStaff ? "Edit Team Member" : "Add Team Member"}
							</DialogTitle>
						</DialogHeader>
						<CoachForm
							coach={selectedStaff}
							onSuccess={() => {
								setIsDialogOpen(false);
								setSelectedStaff(null);
								refetch();
							}}
						/>
					</DialogContent>
				</Dialog>
			</div>

			<div className="flex gap-4">
				<Select value={filter} onValueChange={setFilter}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Filter by type" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Members</SelectItem>
						<SelectItem value="staff">Coaches</SelectItem>
						<SelectItem value="staff">Staff</SelectItem>
						<SelectItem value="other">Other</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{isLoading ? (
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[...Array(6)].map((_, i) => (
						<Card key={i} className="animate-pulse">
							<CardContent className="p-6">
								<div className="h-32 w-32 rounded-full bg-muted mx-auto" />
								<div className="space-y-2 mt-4">
									<div className="h-4 bg-muted rounded" />
									<div className="h-4 bg-muted rounded w-3/4" />
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			) : (
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{filteredStaff.map((staff) => (
						<Card key={staff.id} className="overflow-hidden">
							<CardContent className="p-6">
								<div className="flex flex-col items-center text-center">
									<div className="relative mb-4">
										<img
											src={staff.imageUrl}
											alt={staff.name}
											className="h-32 w-32 rounded-full object-cover"
										/>
										<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
											<Button
												variant="secondary"
												size="icon"
												className="h-8 w-8 rounded-full"
												onClick={() => {
													setSelectedStaff(staff);
													setIsDialogOpen(true);
												}}
											>
												<Pencil className="h-4 w-4" />
											</Button>
											<Button
												variant="destructive"
												size="icon"
												className="h-8 w-8 rounded-full"
												onClick={() => handleDelete(staff.id)}
											>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
									</div>
									<h3 className="text-lg font-semibold">{staff.name}</h3>
									<p className="text-sm text-muted-foreground mt-1">
										{staff.role}
									</p>
									{staff.specialties.length > 0 && (
										<div className="flex flex-wrap gap-1 mt-3 justify-center">
											{staff.specialties.map((specialty) => (
												<Badge
													key={specialty}
													variant="secondary"
													className="text-xs"
												>
													{specialty}
												</Badge>
											))}
										</div>
									)}
									<p className="mt-4 text-sm text-muted-foreground line-clamp-3">
										{staff.bio}
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			)}

			{filteredStaff.length === 0 && !isLoading && (
				<div className="text-center text-muted-foreground py-12">
					No team members found matching your criteria.
				</div>
			)}
		</div>
	);
}
