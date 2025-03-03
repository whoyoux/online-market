"use cache";

import { ImageGallery } from "@/components/offer/image-gallery";
import { getBase64 } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { CategoryBreadcrumb } from "@/components/category-breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ratings } from "@/components/ui/ratings";
import { Textarea } from "@/components/ui/textarea";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export type OfferImage = {
	id: string;
	isPrimary: boolean;
	src: string;
	alt: string;
	blurDataUrl: string;
};

async function getImagesWithBlur() {
	const images = [
		{
			id: "1",
			isPrimary: true,
			src: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Opis obrazu 1",
		},
		{
			id: "2",
			isPrimary: false,
			src: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Opis obrazu 2",
		},
		{
			id: "3",
			isPrimary: false,
			src: "https://images.unsplash.com/photo-1611791484670-ce19b801d192?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Opis obrazu 3",
		},
		{
			id: "4",
			isPrimary: false,
			src: "https://images.unsplash.com/photo-1519923834699-ef0b7cde4712?q=80&w=2575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Opis obrazu 4",
		},
		{
			id: "5",
			isPrimary: false,
			src: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Opis obrazu 5",
		},
		{
			id: "6",
			isPrimary: false,
			src: "https://images.unsplash.com/photo-1591054333829-3a3ce5d57fca?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: "Opis obrazu 6",
		},
	];

	// Dodaj blur data URL do każdego obrazu
	const imagesWithBlur = await Promise.all(
		images.map(async (image) => ({
			...image,
			blurDataUrl: await getBase64(image.src),
		})),
	);

	return imagesWithBlur;
}

const OfferPage = async () => {
	const images = await getImagesWithBlur();
	return (
		<div className="space-y-4 md:space-y-8">
			<div className="flex gap-4 xl:gap-8 flex-col md:flex-row">
				<div className="max-w-full md:max-w-sm xl:max-w-xl w-full">
					<ImageGallery images={images} />
				</div>
				<div className="flex-1 flex flex-col mt-4 md:mt-0 gap-4">
					<div>
						<h2 className="text-2xl font-semibold">
							Telefon IPhone 16 Pro Max
						</h2>
						<CategoryBreadcrumb categoryId="cm7szeia70005amf4fsyozx4q" />
					</div>

					<section className="w-full flex flex-col space-y-2">
						<div className="flex w-full items-center justify-between">
							<span className="text-muted-foreground">Cena</span>
							<span className="font-medium">65.99 zł</span>
						</div>
						<div className="flex w-full items-center justify-between">
							<span className="text-muted-foreground">Miejsce</span>
							<span className="font-medium">Kraków, małopolska</span>
						</div>
					</section>
					<SellerCard
						username="whoyoux"
						userid="dawawdawd"
						userimg="https://cdn.discordapp.com/avatars/610202164819787813/5fcd2c21d968841468932f941d541bbe.png"
						score={9}
					/>
					<ContactWithSeller />
					<Alert>
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>Uwaga!</AlertTitle>
						<AlertDescription className="text-muted-foreground">
							Uważaj na podejrzane aukcje! Niektóre niskie ceny mogą okazać się
							oszustwem!
						</AlertDescription>
					</Alert>
				</div>
			</div>
			<div className="space-y-4">
				{/* <h3 className="text-xl font-semibold">Item description</h3> */}
				<DescriptionTest />
			</div>
		</div>
	);
};

const ContactWithSeller = () => {
	return (
		<section className="flex flex-col gap-2 pt-2">
			<Textarea
				rows={4}
				placeholder="Hej, jestem zainteresowany tym przedmiotem. Czy jest on dalej dostępny?"
			/>
			<Button>Wyślij wiadomość</Button>
		</section>
	);
};

type SellerCardProps = {
	username: string;
	userid: string;
	userimg: string;
	score: number;
};

const SellerCard = ({ username, score, userid, userimg }: SellerCardProps) => {
	return (
		<section className="w-full flex flex-col space-y-2">
			<div className="flex w-full items-center justify-between">
				<span className="text-muted-foreground">Sprzedający</span>
				<div className="flex items-center gap-2">
					<span className="font-medium">{username}</span>
					<Avatar>
						<AvatarImage src={userimg} alt="User avatar" />
						<AvatarFallback>{username.slice(0, 2)}</AvatarFallback>
					</Avatar>
				</div>
			</div>
			<div className="flex w-full items-center justify-between">
				<span className="text-muted-foreground">Ocena sprzedającego</span>
				<Ratings rating={2.5} variant="yellow" />
			</div>
		</section>
	);
};

const DescriptionTest = () => {
	return (
		<div className="prose dark:prose-invert">
			<h1>iPhone 16 Pro Max - Idealny stan!</h1>

			<p>
				Sprzedam mojego iPhone 16 Pro Max w kolorze Natural Titanium, używanego
				zaledwie 3 miesiące. Telefon jest w idealnym stanie technicznym i
				wizualnym, bez najmniejszych rys czy uszkodzeń.
			</p>

			<h2>Specyfikacja techniczna:</h2>
			<ul>
				<li>Pamięć: 512GB</li>
				<li>Kolor: Natural Titanium</li>
				<li>Bateria: 100% pojemności</li>
				<li>System: iOS 18.2</li>
				<li>Procesor: A18 Pro</li>
			</ul>

			<h2>W zestawie otrzymasz:</h2>
			<ul>
				<li>iPhone 16 Pro Max</li>
				<li>Oryginalne pudełko</li>
				<li>Kabel USB-C</li>
				<li>Dokumenty zakupu (gwarancja do 12.2025)</li>
				<li>Etui ochronne Spigen</li>
			</ul>

			<h3>Stan techniczny:</h3>
			<p>
				Telefon jest w 100% sprawny, wszystkie funkcje działają bez zarzutu.
				Bateria trzyma jak nowa, nie była nigdy wymieniana. Ekran chroniony był
				szkłem hartowanym od pierwszego dnia użytkowania.
			</p>

			<h3>Powód sprzedaży:</h3>
			<p>
				Sprzedaję ponieważ przesiadam się na model Ultra. Telefon kupiony w
				polskim autoryzowanym salonie Apple. Możliwość sprawdzenia i
				przetestowania na miejscu. Zapraszam do kontaktu!
			</p>
		</div>
	);
};

export default OfferPage;
