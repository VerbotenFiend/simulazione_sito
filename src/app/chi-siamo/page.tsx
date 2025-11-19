import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white">
                <div className="absolute inset-0 bg-black/50 z-10" />
                {/* Placeholder for About Hero Image */}
                <div className="absolute inset-0 bg-gray-800" />

                <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">La Nostra Storia</h1>
                    <p className="text-xl text-gray-200 font-light">
                        Dal 1990, vestiamo l'eleganza con passione e dedizione.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Tradizione e Innovazione</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Nati come piccola sartoria nel cuore della città, siamo cresciuti mantenendo intatti i valori che ci hanno sempre contraddistinto: attenzione maniacale per i dettagli, scelta di tessuti pregiati e un servizio clienti impeccabile.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Oggi, il nostro brand rappresenta un punto di riferimento per chi cerca uno stile sofisticato ma contemporaneo, capace di adattarsi alle esigenze della vita moderna senza rinunciare all'eleganza.
                        </p>
                    </div>
                    <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        {/* Placeholder Image */}
                        <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
                            Atelier Image
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-secondary py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold mb-12 text-center">I Nostri Valori</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                                Q
                            </div>
                            <h3 className="font-bold text-xl mb-4">Qualità</h3>
                            <p className="text-gray-600">
                                Selezioniamo solo i migliori materiali per garantire capi che durano nel tempo.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                                S
                            </div>
                            <h3 className="font-bold text-xl mb-4">Sostenibilità</h3>
                            <p className="text-gray-600">
                                Ci impegniamo per una moda etica e rispettosa dell'ambiente.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                                E
                            </div>
                            <h3 className="font-bold text-xl mb-4">Eleganza</h3>
                            <p className="text-gray-600">
                                Uno stile senza tempo che esalta la personalità di chi lo indossa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
