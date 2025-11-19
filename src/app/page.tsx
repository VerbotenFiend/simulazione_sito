import { client } from "@/sanity/lib/client";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

async function getFeaturedProducts() {
  const query = `*[_type == "product"][0...4] {
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

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <div className="pb-20">
      <Hero />

      <section className="container mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">In Evidenza</h2>
            <p className="text-gray-500">I pezzi più amati della nostra collezione</p>
          </div>
          <Link href="/collezione" className="text-primary font-medium hover:text-accent transition-colors hidden md:block">
            Vedi tutto &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product: any) => (
              <ProductCard key={product.slug.current} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Nessun prodotto trovato. Inserisci dei prodotti in Sanity Studio.</p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/collezione" className="text-primary font-medium hover:text-accent transition-colors">
            Vedi tutto &rarr;
          </Link>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">La Nostra Filosofia</h2>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-10">
            Crediamo che lo stile sia un'estensione della personalità. Ogni capo è selezionato con cura per garantire qualità, comfort ed eleganza duratura.
          </p>
          <Link href="/chi-siamo" className="inline-block border-b-2 border-primary pb-1 font-bold hover:text-accent hover:border-accent transition-colors">
            Scopri di più su di noi
          </Link>
        </div>
      </section>
    </div>
  );
}
