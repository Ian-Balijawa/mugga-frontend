import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingBackButton } from "@/components/ui/back-button";

export function RootLayout() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />

			<main className="flex-1">
				<Outlet />
			</main>
			<FloatingBackButton />
			<Footer />
		</div>
	);
}
