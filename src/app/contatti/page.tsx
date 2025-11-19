export default function ContactPage() {
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
                            <p>Via della Moda, 123</p>
                            <p>20121 Milano (MI)</p>
                            <p>Italia</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Orari di Apertura</h3>
                            <p>Lunedì: 15:00 - 19:30</p>
                            <p>Martedì - Sabato: 10:00 - 19:30</p>
                            <p>Domenica: Chiuso</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">Recapiti</h3>
                            <p>Telefono: <a href="tel:+39021234567" className="hover:text-primary transition-colors">+39 02 1234567</a></p>
                            <p>Email: <a href="mailto:info@brand.com" className="hover:text-primary transition-colors">info@brand.com</a></p>
                        </div>

                        <div className="pt-6">
                            <h3 className="font-bold text-gray-900 mb-4">Seguici</h3>
                            <div className="flex space-x-4">
                                {/* Social Icons Placeholders */}
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">IG</div>
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">FB</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map & Form */}
                <div className="space-y-8">
                    {/* Map Placeholder */}
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                        Mappa Google Maps
                    </div>

                    {/* Simple Contact Form */}
                    <form className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Scrivici</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Nome"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                            />
                        </div>
                        <textarea
                            placeholder="Messaggio"
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-gray-800 transition-colors"
                        >
                            Invia Messaggio
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
