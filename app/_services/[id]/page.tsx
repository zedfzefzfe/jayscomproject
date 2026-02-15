import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import { Metadata } from 'next';

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { id } = await params
    const service = services.find((s) => s.id === id);

    if (!service) {
        return {
            title: 'Service non trouvé',
        }
    }

    return {
        title: `${service.title} - Jayscom`,
        description: service.shortDescription,
    }
}

export default async function ServiceDetailPage({ params }: Props) {
    const { id } = await params
    const service = services.find((s) => s.id === id);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[500px] overflow-hidden bg-navy-900 flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-navy-900/60 z-10"></div>
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover animate-subtle-zoom opacity-60"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20 pt-20">
                    <Link href="/services" className="inline-flex items-center gap-2 text-teal-400 mb-6 hover:text-teal-300 transition reveal reveal-up">
                        <i className="ph ph-arrow-left"></i> Retour aux services
                    </Link>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight reveal reveal-up delay-1">
                            {service.title}
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed reveal reveal-up delay-2 border-l-4 border-teal-500 pl-6">
                            {service.shortDescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <div className="reveal reveal-up">
                                <h2 className="text-3xl font-bold text-navy-900 mb-6">Description Détaille</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                    {service.fullDescription}
                                </p>
                            </div>

                            <div className="reveal reveal-up delay-1">
                                <h3 className="text-2xl font-bold text-navy-900 mb-6">Caractéristiques Clés</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition">
                                            <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center flex-shrink-0">
                                                <i className={`ph ${service.icon} text-xl`}></i>
                                            </div>
                                            <span className="text-navy-900 font-medium pt-2">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / CTA */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-28 space-y-8">
                                <div className="bg-navy-900 rounded-2xl p-8 text-white reveal reveal-left delay-2">
                                    <h3 className="text-2xl font-bold mb-4">Intéressé par ce service ?</h3>
                                    <p className="text-slate-300 mb-8">
                                        Notre équipe est prête à concrétiser votre projet. Demandez un devis gratuit dès aujourd'hui.
                                    </p>
                                    <Link
                                        href="/contact.html"
                                        className="flex items-center justify-center w-full px-6 py-4 bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold rounded-xl transition shadow-lg shadow-teal-500/20"
                                    >
                                        Demander un devis
                                    </Link>
                                    <a
                                        href="https://wa.me/212699355710"
                                        className="flex items-center justify-center w-full px-6 py-4 mt-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition border border-white/10"
                                    >
                                        <i className="ph ph-whatsapp-logo text-xl mr-2"></i> WhatsApp
                                    </a>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 reveal reveal-left delay-3">
                                    <h4 className="font-bold text-navy-900 mb-4">Pourquoi nous choisir ?</h4>
                                    <ul className="space-y-3 text-slate-600">
                                        <li className="flex items-center gap-3">
                                            <i className="ph ph-check-circle text-teal-600"></i> Atelier de fabrication interne
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="ph ph-check-circle text-teal-600"></i> Pose et installation incluses
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="ph ph-check-circle text-teal-600"></i> Garantie sur tous nos produits
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Navigation to other services */}
            <section className="bg-slate-50 py-20 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold text-navy-900 mb-10 text-center reveal reveal-up">Autres services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.filter(s => s.id !== id).slice(0, 3).map((otherService, idx) => (
                            <Link key={otherService.id} href={`/services/${otherService.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                                <div className="h-48 overflow-hidden relative">
                                    <img src={otherService.image} alt={otherService.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                    <div className="absolute inset-0 bg-navy-900/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                        <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold">Voir le service</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-navy-900 text-lg group-hover:text-teal-600 transition">{otherService.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
