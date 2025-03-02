import { prisma } from "@/lib/prisma";

import { cache } from "react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const getCategoryBreadcrumb = cache(async (categoryId: string) => {
	const category = await prisma.category.findUnique({
		where: { id: categoryId },
		include: {
			parent: {
				include: {
					parent: {
						include: {
							parent: true,
						},
					},
				},
			},
		},
	});

	if (!category) return [];

	const breadcrumb = [];
	let current = category;

	while (current) {
		breadcrumb.unshift({
			id: current.id,
			name: current.name,
			slug: current.slug,
		});
		current = current.parent as typeof current;
	}

	return breadcrumb;
});

interface CategoryBreadcrumbProps {
	categoryId: string;
}

export async function CategoryBreadcrumb({
	categoryId,
}: CategoryBreadcrumbProps) {
	const breadcrumb = await getCategoryBreadcrumb(categoryId);

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
					<BreadcrumbSeparator />
				</BreadcrumbItem>
				{breadcrumb.map((category, index) => (
					<BreadcrumbItem key={category.id}>
						{index === breadcrumb.length - 1 ? (
							<BreadcrumbPage>{category.name}</BreadcrumbPage>
						) : (
							<>
								<Link
									href={`/categories/${category.slug}`}
									className="transition-colors hover:text-foreground"
								>
									{category.name}
								</Link>
								<BreadcrumbSeparator />
							</>
						)}
					</BreadcrumbItem>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
