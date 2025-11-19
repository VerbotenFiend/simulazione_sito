import Link from 'next/link';
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

export default async function Footer() {
    const settings = await client.fetch(siteSettingsQuery);

    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-serif font-bold mb-4">{settings?.title || 'BRAND'}</h3>
                        <p className="text-gray-400 max-w-sm">
                            {settings?.description || 'Eleganza senza tempo per lo stile contemporaneo. Scopri la nostra collezione curata con passione.'}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Navigazione</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/collezione" className="hover:text-white transition-colors">Collezione</Link></li>
                            <li><Link href="/eventi" className="hover:text-white transition-colors">Eventi</Link></li>
                            <li><Link href="/chi-siamo" className="hover:text-white transition-colors">Chi Siamo</Link></li>
                            <li><Link href="/contatti" className="hover:text-white transition-colors">Contatti</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Contatti</h4>
                        <ul className="space-y-2 text-gray-400">
                            {settings?.address && <li>{settings.address}</li>}
                            {settings?.email && <li>{settings.email}</li>}
                            {settings?.phoneNumber && <li>{settings.phoneNumber}</li>}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {settings?.title || 'BRAND'}. Tutti i diritti riservati.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {settings?.socialLinks?.map((social: any) => (
                            <a key={social._key} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                {social.platform}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
