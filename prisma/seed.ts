import { type Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
    {
        name: 'Electronics',
        slug: 'electronics',
        subcategories: [
            {
                name: 'Smartphones',
                slug: 'smartphones',
                subcategories: [
                    { name: 'Apple', slug: 'apple' },
                    { name: 'Samsung', slug: 'samsung' },
                    { name: 'Xiaomi', slug: 'xiaomi' },
                ]
            },
            {
                name: 'Laptops',
                slug: 'laptops',
                subcategories: [
                    { name: 'Gaming', slug: 'gaming-laptops' },
                    { name: 'Business', slug: 'business-laptops' },
                    { name: 'MacBooks', slug: 'macbooks' },
                ]
            },
            {
                name: 'Gaming Consoles',
                slug: 'gaming-consoles',
                subcategories: [
                    { name: 'PlayStation', slug: 'playstation' },
                    { name: 'Xbox', slug: 'xbox' },
                    { name: 'Nintendo', slug: 'nintendo' },
                ]
            },
        ]
    },
    {
        name: 'Fashion',
        slug: 'fashion',
        subcategories: [
            {
                name: "Men's Clothing",
                slug: 'mens-clothing',
                subcategories: [
                    { name: 'Shirts', slug: 'mens-shirts' },
                    { name: 'Pants', slug: 'mens-pants' },
                    { name: 'Shoes', slug: 'mens-shoes' },
                ]
            },
            {
                name: "Women's Clothing",
                slug: 'womens-clothing',
                subcategories: [
                    { name: 'Dresses', slug: 'dresses' },
                    { name: 'Tops', slug: 'womens-tops' },
                    { name: 'Shoes', slug: 'womens-shoes' },
                ]
            },
            {
                name: 'Accessories',
                slug: 'accessories',
                subcategories: [
                    { name: 'Watches', slug: 'watches' },
                    { name: 'Bags', slug: 'bags' },
                    { name: 'Jewelry', slug: 'jewelry' },
                ]
            },
        ]
    },
    {
        name: 'Home & Garden',
        slug: 'home-garden',
        subcategories: [
            {
                name: 'Furniture',
                slug: 'furniture',
                subcategories: [
                    { name: 'Living Room', slug: 'living-room' },
                    { name: 'Bedroom', slug: 'bedroom' },
                    { name: 'Kitchen', slug: 'kitchen-furniture' },
                ]
            },
            {
                name: 'Garden',
                slug: 'garden',
                subcategories: [
                    { name: 'Tools', slug: 'garden-tools' },
                    { name: 'Plants', slug: 'plants' },
                    { name: 'Outdoor Furniture', slug: 'outdoor-furniture' },
                ]
            },
        ]
    },
    {
        name: 'Sports',
        slug: 'sports',
        subcategories: [
            {
                name: 'Fitness',
                slug: 'fitness',
                subcategories: [
                    { name: 'Equipment', slug: 'fitness-equipment' },
                    { name: 'Clothing', slug: 'fitness-clothing' },
                ]
            },
            {
                name: 'Team Sports',
                slug: 'team-sports',
                subcategories: [
                    { name: 'Football', slug: 'football' },
                    { name: 'Basketball', slug: 'basketball' },
                    { name: 'Volleyball', slug: 'volleyball' },
                ]
            },
        ]
    },
];

interface CategoryInput {
    name: string;
    slug: string;
    subcategories?: CategoryInput[];
}

// Funkcja pomocnicza do rekurencyjnego tworzenia kategorii
async function createCategoriesRecursively(
    categories: CategoryInput[],
    parentId: string | null = null
): Promise<void> {
    for (const categoryData of categories) {
        const { name, slug, subcategories = [] } = categoryData;
        
        const category = await prisma.category.create({
            data: {
                name,
                slug,
                parentId: parentId,
            },
        });

        if (subcategories.length > 0) {
            await createCategoriesRecursively(subcategories, category.id);
        }
    }
}

async function main() {
    // Najpierw usuń istniejące kategorie (jeśli istnieją)
    await prisma.category.deleteMany();

    await createCategoriesRecursively(categories);

    console.log('Seed completed successfully!');
   
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })