import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-serif font-bold mb-4">BRAND</h3>
                        <p className="text-gray-400 max-w-sm">
                            Eleganza senza tempo per lo stile contemporaneo. Scopri la nostra collezione curata con passione.
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
                            <li>Via della Moda, 123</li>
                            <li>Milano, MI 20121</li>
                            <li>info@brand.com</li>
                            <li>+39 02 1234567</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} BRAND. Tutti i diritti riservati.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
