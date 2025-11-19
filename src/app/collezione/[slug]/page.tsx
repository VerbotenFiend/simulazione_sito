import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Revalidate every hour
export const revalidate = 3600;

async function getProduct(slug: string) {
    try {
        return await client.fetch(`*[_type == "product" && slug.current == $slug][0]{
      name,
      price,
      description,
      images,
      sizes,
      "categories": categories[]->title
    }`, { slug });
    } catch (error) {
        console.error("Sanity fetch error:", error);
        return null;
    }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-8">
                <Link href="/collezione" className="text-gray-500 hover:text-primary transition-colors">
                    &larr; Torna alla Collezione
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                        {product.images && product.images[0] ? (
                            <Image
                                src={urlForImage(product.images[0]).url()}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                No Image
                            </div>
                        )}
                    </div>
                    {/* Thumbnails if multiple images */}
                    {product.images && product.images.length > 1 && (
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.slice(1).map((image: any, index: number) => (
                                <div key={index} className="relative aspect-square bg-gray-100 rounded overflow-hidden">
                                    <Image
                                        src={urlForImage(image).url()}
                                        alt={`${product.name} ${index + 2}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div>
                    <div className="mb-2 text-sm text-gray-500 uppercase tracking-wider">
                        {product.categories?.join(", ")}
                    </div>
                    <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
                    <p className="text-2xl font-medium mb-8">€ {product.price.toFixed(2)}</p>

                    <div className="prose prose-lg text-gray-600 mb-8">
                        {product.description && <PortableText value={product.description} />}
                    </div>

                    {product.sizes && (
                        <div className="mb-8">
                            <h3 className="font-bold mb-3">Taglie Disponibili:</h3>
                            <div className="flex gap-2">
                                {product.sizes.map((size: string) => (
                                    <span key={size} className="px-4 py-2 border border-gray-200 rounded text-sm">
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="border-t border-gray-100 pt-8">
                        <p className="text-sm text-gray-500 mb-4">
                            Ti piace questo capo? Vieni a trovarci in negozio per provarlo.
                        </p>
                        <Link
                            href="/contatti"
                            className="inline-block w-full md:w-auto px-8 py-4 bg-primary text-white font-bold text-center hover:bg-gray-800 transition-colors rounded"
                        >
                            Contattaci / Dove Siamo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
