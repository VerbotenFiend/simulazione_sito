import { client } from "@/sanity/lib/client";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

// Force dynamic rendering to handle search params
export const dynamic = 'force-dynamic';

async function getProducts(categorySlug?: string) {
    let query = `*[_type == "product"]`;

    if (categorySlug) {
        query += `[references(*[_type == "category" && slug.current == "${categorySlug}"]._id)]`;
    }

    query += `{
    name,
    slug,
    price,
    images,
    "categories": categories[]->title
  }`;

    try {
        return await client.fetch(query);
    } catch (error) {
        console.error("Sanity fetch error:", error);
        return [];
    }
}

async function getCategories() {
    try {
        return await client.fetch(`*[_type == "category"] {
      title,
      slug
    }`);
    } catch (error) {
        console.error("Sanity fetch error:", error);
        return [];
    }
}

export default async function CollectionPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>;
}) {
    const { category } = await searchParams;
    const categorySlug = category;

    const products = await getProducts(categorySlug);
    const categories = await getCategories();

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-serif font-bold mb-8 text-center">
                {categorySlug
                    ? `Collezione ${categories.find((c: any) => c.slug.current === categorySlug)?.title || categorySlug}`
                    : "Tutta la Collezione"}
            </h1>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="sticky top-24">
                        <h3 className="font-bold text-lg mb-4 border-b pb-2">Categorie</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/collezione"
                                    className={`block hover:text-primary transition-colors ${!categorySlug ? 'font-bold text-primary' : 'text-gray-500'}`}
                                >
                                    Tutti i prodotti
                                </Link>
                            </li>
                            {categories.map((category: any) => (
                                <li key={category.slug.current}>
                                    <Link
                                        href={`/collezione?category=${category.slug.current}`}
                                        className={`block hover:text-primary transition-colors ${categorySlug === category.slug.current ? 'font-bold text-primary' : 'text-gray-500'}`}
                                    >
                                        {category.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.length > 0 ? (
                            products.map((product: any) => (
                                <ProductCard key={product.slug.current} product={product} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 bg-gray-50 rounded-lg">
                                <p className="text-gray-500">Nessun prodotto trovato in questa categoria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
