"use cache";

import { ImageGallery } from "@/components/offer/image-gallery";
import { getBase64 } from "@/lib/utils";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { CategoryBreadcrumb } from "@/components/category-breadcrumb";

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
						<CategoryBreadcrumb categoryId="cm7rwgq7l0005am749rerf2dp" />
					</div>
					<div>
						<h4 className="text-2xl font-semibold">$64.99</h4>
					</div>
					<Button>Contact with seller</Button>
				</div>
			</div>
			<div className="space-y-4">
				{/* <h3 className="text-xl font-semibold">Item description</h3> */}
				<DescriptionTest />
			</div>
		</div>
	);
};

const DescriptionTest = () => {
	return (
		<div className="prose dark:prose-invert">
			<h1>h1 test</h1>
			<h2>h2 test</h2>
			<h3>h3 test</h3>
			<pre>code test</pre>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque odio
				nisi animi accusantium molestiae? Deserunt rem consectetur voluptatibus
				alias minima iure, amet ducimus nobis voluptatum repellat, molestiae
				dolores, aperiam provident.
			</p>
			<span>Unordered list</span>
			<ul>
				<li>hello</li>
				<li>hello</li>
				<li>hello</li>
				<li>hello</li>
				<li>hello</li>
			</ul>
			<span>Ordered list</span>
			<ol>
				<li>hello</li>
				<li>hello</li>
				<li>hello</li>
				<li>hello</li>
				<li>hello</li>
			</ol>
		</div>
	);
};

export default OfferPage;
