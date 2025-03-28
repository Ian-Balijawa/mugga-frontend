import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CoachResponseDto } from "@/types/dtos";
import { api } from "@/services/api";
import { useImageUpload } from "@/hooks/useImageUpload";

export type StaffType = "tour guide" | "tour operator" | "driver" | "other";

interface CoachFormProps {
	coach?: CoachResponseDto | null;
	onSuccess: () => void;
}

export function CoachForm({ coach, onSuccess }: CoachFormProps) {
	const [isLoading, setIsLoading] = useState(false);
	const { isUploading, handleImageUpload } = useImageUpload();
	const [staffType, setStaffType] = useState<StaffType>(
		coach?.role?.toLowerCase().includes("tour guide")
			? "tour guide"
			: coach?.role?.toLowerCase().includes("tour operator")
			? "tour operator"
			: coach?.role?.toLowerCase().includes("driver")
			? "driver"
			: "other"
	);
	const [formData, setFormData] = useState({
		name: coach?.name || "",
		role: coach?.role || "",
		bio: coach?.bio || "",
		specialties: coach?.specialties.join(", ") || "",
		imageUrl: coach?.imageUrl || "",
	});

	const onImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		await handleImageUpload(file, (url) => {
			setFormData((prev) => ({ ...prev, imageUrl: url }));
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const data = {
				...formData,
				role:
					staffType === "tour guide"
						? `Tour Guide - ${formData.role}`
						: staffType === "tour operator"
						? `Tour operator - ${formData.role}`
						: staffType === "driver"
						? `Driver - ${formData.role}`
						: formData.role,
				specialties: formData.specialties
					.split(",")
					.map((s) => s.trim())
					.filter(Boolean),
			};

			if (coach) {
				await api.updateCoach(coach.id, data);
				toast.success("Team member updated successfully");
			} else {
				await api.createCoach(data);
				toast.success("Team member created successfully");
			}
			onSuccess();
		} catch (error) {
			console.error(error);
			toast.error("Failed to save team member");
		} finally {
			setIsLoading(false);
		}
	};

	const renderSpecialtiesField = () => (
		<div className="space-y-2">
			<Label>Areas of Expertise (comma-separated)</Label>
			<Textarea
				value={formData.specialties}
				onChange={(e) => setFormData((prev) => ({ ...prev, specialties: e.target.value }))}
				placeholder={
					staffType === "tour guide"
						? "e.g., Tour guid"
						: staffType === "tour operator"
						? "e.g., Tour operator"
						: staffType === "driver"
						? "e.g., Driver"
						: "Driver"
				}
			/>
		</div>
	);

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<Tabs value={staffType} onValueChange={(value) => setStaffType(value as StaffType)}>
				<TabsList className="grid w-full grid-cols-4">
					<TabsTrigger value="tour guide">Tour guide</TabsTrigger>
					<TabsTrigger value="tour operator">Tour operator</TabsTrigger>
					<TabsTrigger value="driver">Driver</TabsTrigger>
					<TabsTrigger value="other">Other</TabsTrigger>
				</TabsList>

				<TabsContent value="coach">
					<div className="space-y-4">
						<div>
							<Label>Name</Label>
							<Input
								value={formData.name}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, name: e.target.value }))
								}
								required
								placeholder="Enter full name"
							/>
						</div>
						<div>
							<Label>Coaching Role</Label>
							<Input
								value={formData.role}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, role: e.target.value }))
								}
								required
								placeholder="e.g., Wildlife tours, City tours, Cultural tours"
							/>
						</div>
						{renderSpecialtiesField()}
					</div>
				</TabsContent>

				<TabsContent value="staff">
					<div className="space-y-4">
						<div>
							<Label>Name</Label>
							<Input
								value={formData.name}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, name: e.target.value }))
								}
								required
								placeholder="Enter full name"
							/>
						</div>
						<div>
							<Label>Staff Role</Label>
							<Input
								value={formData.role}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, role: e.target.value }))
								}
								required
								placeholder="e.g., Physiotherapist, Team Manager, Administrator"
							/>
						</div>
						{renderSpecialtiesField()}
					</div>
				</TabsContent>

				<TabsContent value="board">
					<div className="space-y-4">
						<div>
							<Label>Name</Label>
							<Input
								value={formData.name}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, name: e.target.value }))
								}
								required
								placeholder="Enter full name"
							/>
						</div>
						<div>
							<Label>Board Position</Label>
							<Input
								value={formData.role}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, role: e.target.value }))
								}
								required
								placeholder="e.g., Chairperson, Director, Executive Member"
							/>
						</div>
						{renderSpecialtiesField()}
					</div>
				</TabsContent>

				<TabsContent value="other">
					<div className="space-y-4">
						<div>
							<Label>Name</Label>
							<Input
								value={formData.name}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, name: e.target.value }))
								}
								required
								placeholder="Enter full name"
							/>
						</div>
						<div>
							<Label>Role</Label>
							<Input
								value={formData.role}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, role: e.target.value }))
								}
								required
								placeholder="Enter role"
							/>
						</div>
						{renderSpecialtiesField()}
					</div>
				</TabsContent>
			</Tabs>

			<div>
				<Label>Bio</Label>
				<Textarea
					value={formData.bio}
					onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
					required
					className="h-32"
					placeholder="Enter biographical information"
				/>
			</div>

			<div>
				<Label>Profile Image</Label>
				<Input
					type="file"
					accept="image/*"
					onChange={onImageUpload}
					disabled={isUploading}
					className="mb-2"
				/>
				{formData.imageUrl && (
					<div className="mt-2">
						<img
							src={formData.imageUrl}
							alt="Preview"
							className="h-32 w-32 rounded-lg object-cover"
						/>
					</div>
				)}
			</div>

			<div className="flex justify-end gap-4">
				<Button type="submit" disabled={isLoading || isUploading}>
					{isLoading ? "Saving..." : coach ? "Update Member" : "Add Member"}
				</Button>
			</div>
		</form>
	);
}
