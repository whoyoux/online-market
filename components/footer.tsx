import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = [
	{
		title: "Dla kupujących",
		links: [
			{ label: "Jak kupować", href: "/pomoc/jak-kupowac" },
			{ label: "Bezpieczeństwo zakupów", href: "/pomoc/bezpieczenstwo" },
			{ label: "Płatności", href: "/pomoc/platnosci" },
			{ label: "Dostawa", href: "/pomoc/dostawa" },
			{ label: "Zwroty", href: "/pomoc/zwroty" },
		],
	},
	{
		title: "Dla sprzedających",
		links: [
			{ label: "Jak wystawić przedmiot", href: "/pomoc/jak-sprzedawac" },
			{ label: "Prowizje", href: "/pomoc/prowizje" },
			{ label: "Promowanie ogłoszeń", href: "/pomoc/promowanie" },
			{ label: "Zasady sprzedaży", href: "/pomoc/zasady-sprzedazy" },
		],
	},
	{
		title: "OnlineMarket",
		links: [
			{ label: "O nas", href: "/o-nas" },
			{ label: "Polityka prywatności", href: "/polityka-prywatnosci" },
			{ label: "Regulamin", href: "/regulamin" },
			{ label: "Kariera", href: "/kariera" },
			{ label: "Kontakt", href: "/kontakt" },
		],
	},
];

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="max-w-screen-xl mx-auto border-t mt-12 px-4">
			<div className="py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{footerLinks.map((section) => (
						<div key={section.title}>
							<h3 className="font-semibold text-lg mb-4">{section.title}</h3>
							<ul className="space-y-2">
								{section.links.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-muted-foreground hover:text-foreground transition"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					<div>
						<h3 className="font-semibold text-lg mb-4">Dołącz do nas</h3>
						<div className="flex items-center space-x-4 mb-6">
							<Link
								href="https://facebook.com"
								className="text-muted-foreground hover:text-foreground transition"
							>
								<Facebook size={20} />
								<span className="sr-only">Facebook</span>
							</Link>
							<Link
								href="https://instagram.com"
								className="text-muted-foreground hover:text-foreground transition"
							>
								<Instagram size={20} />
								<span className="sr-only">Instagram</span>
							</Link>
							<Link
								href="https://twitter.com"
								className="text-muted-foreground hover:text-foreground transition"
							>
								<Twitter size={20} />
								<span className="sr-only">Twitter</span>
							</Link>
						</div>
						<p className="text-sm text-muted-foreground">
							Bądź na bieżąco z promocjami i nowościami.
						</p>
					</div>
				</div>

				<div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
					<p>© {currentYear} OnlineMarket. Wszelkie prawa zastrzeżone.</p>
					<div className="flex items-center gap-4 mt-4 md:mt-0">
						<Link
							href="/mapa-strony"
							className="hover:text-foreground transition"
						>
							Mapa strony
						</Link>
						<Link
							href="/centrum-pomocy"
							className="hover:text-foreground transition"
						>
							Centrum pomocy
						</Link>
						<Link href="/cookies" className="hover:text-foreground transition">
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
