import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
            {/* Background Image Placeholder - In real app, fetch from Sanity */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* <Image src={...} alt="Hero" fill className="object-cover" /> */}
                <div className="w-full h-full bg-gray-800 animate-pulse" />
            </div>

            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
                    Nuova Collezione Autunno/Inverno
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light">
                    Scopri l'eleganza che definisce il tuo stile. Materiali pregiati e design senza tempo.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link
                        href="/collezione"
                        className="px-8 py-4 bg-white text-primary font-bold hover:bg-gray-100 transition-colors uppercase tracking-widest text-sm"
                    >
                        Scopri la Collezione
                    </Link>
                    <Link
                        href="/eventi"
                        className="px-8 py-4 border border-white text-white font-bold hover:bg-white/10 transition-colors uppercase tracking-widest text-sm"
                    >
                        Eventi Esclusivi
                    </Link>
                </div>
            </div>
        </section>
    );
}
