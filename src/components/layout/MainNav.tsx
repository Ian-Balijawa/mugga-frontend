import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { Lock } from "lucide-react";

const links = [
	{
		href: "/",
		label: "Home",
		isLogo: true,
	},
	{ href: "/about", label: "About" },
	{ href: "/programs", label: "Services" },
	{ href: "/coaches", label: "Staff" },
	{ href: "/facilities", label: "Stays" },
	{ href: "/alumni", label: "Testimonials" },
	{ href: "/news", label: "News" },
	{ href: "/gallery", label: "Gallery" },
	{ href: "/contact", label: "Contact" },
	{ href: "/faq", label: "FAQ" },
	{ href: "/videos", label: "Videos" },
];

export function MainNav() {
	const location = useLocation();

	return (
		<nav className="hidden gap-6 lg:flex justify-between w-full items-center">
			{links.map((link) => (
				<Link
					key={link.href}
					to={link.href}
					className={cn(
						"text-sm font-medium transition-colors hover:text-primary",
						location.pathname === link.href ? "text-primary" : "text-muted-foreground",
						link.isLogo && "flex items-center gap-2"
					)}
				>
					{link.isLogo ? (
						<>
							<img src="/images/logo.png" alt="Mugga Tours " className="h-8 w-auto" />
							{link.label}
						</>
					) : (
						link.label
					)}
				</Link>
			))}
			<Link to="/admin/login">
				<Button variant="ghost" size="sm" className="gap-2">
					<Lock className="h-4 w-4" />
					Admin
				</Button>
			</Link>
		</nav>
	);
}
