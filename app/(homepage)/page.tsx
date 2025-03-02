import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OfferCard } from "@/components/ui/offer-card";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Home() {
	return (
		<div className="flex flex-col gap-12 py-8">
			{/* Hero section */}
			<section className="relative h-[500px] rounded-xl overflow-hidden">
				<Image
					src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=2070"
					alt="Hero banner"
					fill
					className="object-cover"
					priority
					sizes="(max-width: 1280px) 100vw, 1280px"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-12">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
						Znajdź najlepsze oferty online
					</h1>
					<p className="text-xl text-white mb-8 max-w-xl">
						Twoje miejsce do bezpiecznego handlu i wymiany. Dołącz do tysięcy
						zadowolonych użytkowników już dziś!
					</p>
					<Button size="lg" asChild>
						<Link href="/offer">Przeglądaj oferty</Link>
					</Button>
				</div>
			</section>

			{/* Categories section */}
			<section className="py-8">
				<h2 className="text-3xl font-bold mb-8">Popularne kategorie</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{categories.map((category) => (
						<Link
							key={category.id}
							href={`/offer/category/${category.id}`}
							className="group relative h-40 rounded-lg overflow-hidden shadow-md transition hover:shadow-lg"
						>
							<Image
								src={category.image}
								alt={category.name}
								fill
								className="object-cover transition group-hover:scale-105"
								sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
							<span className="absolute bottom-4 left-4 text-lg font-medium text-white">
								{category.name}
							</span>
						</Link>
					))}
				</div>
			</section>

			{/* Featured offers */}
			<section className="py-8">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-3xl font-bold">Wyróżnione oferty</h2>
					<Button variant="outline" asChild>
						<Link href="/offer">Zobacz wszystkie</Link>
					</Button>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{featuredOffers.map((offer) => (
						<OfferCard
							key={offer.id}
							id={offer.id}
							title={offer.title}
							price={offer.price}
							location={offer.location}
							image={offer.image}
						/>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-muted rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
				<div>
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Masz coś na sprzedaż?
					</h2>
					<p className="text-muted-foreground max-w-lg">
						Dołącz do naszej społeczności sprzedawców i znajdź klientów na swoje
						produkty w kilka minut!
					</p>
				</div>
				<Button size="lg" asChild>
					<Link href="/offer/create">Dodaj ogłoszenie</Link>
				</Button>
			</section>
		</div>
	);
}

// Mock data - w rzeczywistej aplikacji dane pobierane będą z API/bazy danych
const categories = [
	{
		id: "electronics",
		name: "Elektronika",
		image:
			"https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070",
	},
	{
		id: "fashion",
		name: "Moda",
		image:
			"https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071",
	},
	{
		id: "home",
		name: "Dom i ogród",
		image:
			"https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1974",
	},
	{
		id: "sport",
		name: "Sport",
		image:
			"https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070",
	},
	{
		id: "automotive",
		name: "Motoryzacja",
		image:
			"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070",
	},
	{
		id: "collectibles",
		name: "Kolekcje",
		image:
			"https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2009",
	},
	{
		id: "services",
		name: "Usługi",
		image:
			"https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069",
	},
	{
		id: "other",
		name: "Inne",
		image:
			"https://images.unsplash.com/photo-1553034545-32d4cd2168f1?q=80&w=1935",
	},
];

const featuredOffers = [
	{
		id: "1",
		title: "iPhone 13 Pro, 256GB, stan idealny",
		price: 3499,
		location: "Warszawa, Mazowieckie",
		image:
			"https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=1972",
	},
	{
		id: "2",
		title: "Rower górski Trek Marlin 7",
		price: 2899,
		location: "Kraków, Małopolskie",
		image:
			"https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070",
	},
	{
		id: "3",
		title: "Sofa narożna, welurowa, ciemnozielona",
		price: 1899,
		location: "Wrocław, Dolnośląskie",
		image:
			"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070",
	},
];
