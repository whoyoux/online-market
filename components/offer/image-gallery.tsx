"use client";

import type { OfferImage } from "@/app/offer/page";
import Image from "next/image";
import { useState } from "react";

type ImageGalleryProps = {
	images: OfferImage[];
};

export const ImageGallery = ({ images }: ImageGalleryProps) => {
	const [selectedImage, setSelectedImage] = useState<OfferImage>(
		images.find((img) => img.isPrimary) || images[0],
	);

	return (
		<div className="w-full max-w-4xl mx-auto">
			{/* Główne zdjęcie */}
			<div className="aspect-square w-full relative mb-4 rounded-lg overflow-hidden">
				<Image
					src={selectedImage.src}
					alt={selectedImage.alt}
					fill
					className="object-cover"
					priority
					quality={100}
					placeholder="blur"
					blurDataURL={selectedImage.blurDataUrl}
				/>
			</div>

			{/* Miniatury */}
			<div className="grid grid-cols-6 gap-2">
				{images.map((image) => (
					<button
						key={image.id}
						type="button"
						onClick={() => setSelectedImage(image)}
						className={`aspect-square relative rounded-md overflow-hidden ${
							selectedImage.id === image.id
								? "ring-2 ring-blue-500"
								: "hover:opacity-75"
						}`}
					>
						<Image
							src={image.src}
							alt={image.alt}
							fill
							className="object-cover"
							placeholder="blur"
							blurDataURL={image.blurDataUrl}
						/>
					</button>
				))}
			</div>
		</div>
	);
};
