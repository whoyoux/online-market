"use cache";

import { ImageGallery } from "@/components/offer/image-gallery";
import { getBase64 } from "@/lib/utils";

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
			src: "https://placehold.co/600x400/webp?text=1",
			alt: "Opis obrazu 1",
		},
		{
			id: "2",
			isPrimary: false,
			src: "https://placehold.co/600x400/webp?text=2",
			alt: "Opis obrazu 2",
		},
		{
			id: "3",
			isPrimary: false,
			src: "https://placehold.co/600x400/webp?text=3",
			alt: "Opis obrazu 3",
		},
		{
			id: "4",
			isPrimary: false,
			src: "https://placehold.co/600x400/webp?text=4",
			alt: "Opis obrazu 4",
		},
		{
			id: "5",
			isPrimary: false,
			src: "https://placehold.co/600x400/webp?text=5",
			alt: "Opis obrazu 5",
		},
		{
			id: "6",
			isPrimary: false,
			src: "https://placehold.co/600x400/webp?text=6",
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
		<div className="container mx-auto p-4">
			<ImageGallery images={images} />
		</div>
	);
};

export default OfferPage;
