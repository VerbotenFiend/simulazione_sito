import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

export default async function ContactPage() {
    const settings = await client.fetch(siteSettingsQuery);

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-serif font-bold mb-12 text-center">Contatti</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-serif font-bold mb-6">Vieni a trovarci</h2>
                    <div className="space-y-6 text-gray-600">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Indirizzo</h3>
                            <p className="whitespace-pre-line">{settings?.address || 'Indirizzo non disponibile'}</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Orari di Apertura</h3>
                            {settings?.openingHours && settings.openingHours.length > 0 ? (
                                <ul className="space-y-1">
                                    {settings.openingHours.map((hour: string, index: number) => (
                                        <li key={index}>{hour}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Orari non disponibili</p>
                            )}
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Recapiti</h3>
                            <p>Telefono: <a href={`tel:${settings?.phoneNumber}`} className="hover:text-primary transition-colors">{settings?.phoneNumber || 'N/A'}</a></p>
                            <p>Email: <a href={`mailto:${settings?.email}`} className="hover:text-primary transition-colors">{settings?.email || 'N/A'}</a></p>
                        </div>

                        <div className="pt-6">
                            <h3 className="font-bold text-gray-900 mb-4">Seguici</h3>
                            <div className="flex space-x-4">
                                {settings?.socialLinks?.map((social: any) => (
                                    <a
                                        key={social._key}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                    >
                                        {social.platform.charAt(0)}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map & Form */}
                <div className="space-y-8">
                    {/* Map */}
                    <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-500 relative">
                        {settings?.googleMapsEmbedUrl ? (
                            <iframe
                                src={settings.googleMapsEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        ) : (
                            <span>Mappa non configurata</span>
                        )}
                    </div>

                    {/* Simple Contact Form */}
                    <form className="space-y-4" action={`mailto:${settings?.email}`} method="post" encType="text/plain">
                        <h3 className="text-xl font-bold mb-4">Scrivici</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nome"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Messaggio"
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-gray-800 transition-colors"
                        >
                            Invia Messaggio (apre client email)
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
