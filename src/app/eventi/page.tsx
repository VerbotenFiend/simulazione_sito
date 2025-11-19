import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// Revalidate every hour
export const revalidate = 3600;

async function getEvents() {
    try {
        return await client.fetch(`*[_type == "event" && active == true] | order(date desc) {
      title,
      date,
      image,
      description
    }`);
    } catch (error) {
        console.error("Sanity fetch error:", error);
        return [];
    }
}

export default async function EventsPage() {
    const events = await getEvents();

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-serif font-bold mb-4 text-center">Eventi & Promozioni</h1>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                Resta aggiornato sulle nostre ultime iniziative, sfilate e offerte speciali riservate ai nostri clienti.
            </p>

            <div className="space-y-16">
                {events.length > 0 ? (
                    events.map((event: any, index: number) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
                        >
                            <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden shadow-lg">
                                {event.image ? (
                                    <Image
                                        src={urlForImage(event.image).url()}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                        No Image
                                    </div>
                                )}
                            </div>

                            <div className="w-full md:w-1/2">
                                <div className="text-sm text-primary font-bold mb-2 uppercase tracking-wider">
                                    {new Date(event.date).toLocaleDateString('it-IT', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                                <h2 className="text-3xl font-serif font-bold mb-4">{event.title}</h2>
                                <div className="prose text-gray-600">
                                    <PortableText value={event.description} />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">Nessun evento attivo al momento. Torna a trovarci presto!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
