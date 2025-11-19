import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface ProductProps {
    product: {
        name: string;
        slug: { current: string };
        price: number;
        images?: any[];
        categories?: { title: string }[];
    };
}

export default function ProductCard({ product }: ProductProps) {
    return (
        <Link href={`/collezione/${product.slug.current}`} className="group block">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                {product.images && product.images[0] ? (
                    <Image
                        src={urlForImage(product.images[0]).url()}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                    </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div>
                <h3 className="text-lg font-serif font-medium group-hover:text-primary/80 transition-colors">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                    € {product.price.toFixed(2)}
                </p>
            </div>
        </Link>
    );
}
