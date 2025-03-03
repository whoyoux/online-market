import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./card";

export interface OfferCardProps {
	id: string;
	title: string;
	price: number;
	location: string;
	image: string;
	className?: string;
}

export function OfferCard({
	id,
	title,
	price,
	location,
	image,
	className,
}: OfferCardProps) {
	return (
		// <Link href={`/offer/${id}`} className={className}>
		<Link href={"/offer"} className={className}>
			<Card className="group overflow-hidden h-full hover:shadow-md transition bg-muted flex flex-col">
				<div className="relative h-48">
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover transition group-hover:scale-105"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
					/>
				</div>
				<CardContent className="p-4 flex-1">
					<h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
						{title}
					</h3>
					<p className="text-muted-foreground mb-2">{location}</p>
				</CardContent>
				<CardFooter className="">
					<p className="text-2xl font-bold">{price} zł</p>
				</CardFooter>
			</Card>
		</Link>
	);
}
