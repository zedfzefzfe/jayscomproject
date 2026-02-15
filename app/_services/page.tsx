import Link from 'next/link';
import { services } from '@/lib/data';

// Helper to determine card span based on index/id for variety, 
// strictly mimicking the specific layout from index.html if possible, 
// or just generic pattern. 
// index.html has:
// 1. Enseignes Lumineuses (Featured - span 2 cols, 2 rows)
// 2. Lettrage 3D
// 3. Habillage Facade
// 4. Impression Numerique
// 5. Neon Flex (Wide - span 2 cols)
// 6. Totem

const getCardClass = (index: number) => {
    if (index === 0) return "bento-card bento-featured group reveal reveal-up delay-0";
    if (index === 4) return "bento-card bento-wide group reveal reveal-up delay-4";
    return `bento-card group reveal reveal-up delay-${index % 5}`;
};

export default function ServicesPage() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">

            {/* Header Section */}
            <div className="bg-navy-900 pt-32 pb-20 relative overflow-hidden">
                {/* Ambient glow effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-20" style={{ background: 'radial-gradient(ellipse, #0d9488 0%, transparent 70%)' }}></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-teal-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block reveal reveal-up">Nos Expertises</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 reveal reveal-up delay-1">
                        Des solutions qui <span className="bento-title-glow">brillent</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg reveal reveal-up delay-2">
                        Découvrez notre gamme complète de services pour sublimer votre image de marque, de la conception à l'installation.
                    </p>
                </div>
            </div>

            {/* Services Grid Section */}
            <section className="py-20 relative" style={{ background: '#0a0f1e' }}>
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="bento-grid">
                        {services.map((service, index) => {
                            const cardCustomClass = getCardClass(index);
                            // Special layout for the first item (Enseignes Lumineuses) to match index.html
                            if (index === 0) {
                                return (
                                    <Link key={service.id} href={`/services/${service.id}`} className={cardCustomClass} style={{ '--glow': service.color } as any}>
                                        <div className="bento-card-border"></div>
                                        <div className="bento-card-inner">
                                            <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-slate-900/80 to-slate-900/95 z-10"></div>
                                                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
                                            </div>
                                            <div className="relative z-20 flex flex-col h-full p-6 sm:p-8 md:p-10">
                                                <div className="flex items-center justify-between mb-6 sm:mb-auto">
                                                    <div className="bento-icon-ring" style={{ '--ring-color': service.color } as any}>
                                                        <i className={`ph ${service.icon} text-2xl text-teal-400`}></i>
                                                    </div>
                                                    <span className="text-teal-400/40 text-5xl sm:text-6xl md:text-8xl font-black leading-none select-none" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>0{index + 1}</span>
                                                </div>
                                                <div className="mt-auto">
                                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-teal-300 bg-teal-500/10 border border-teal-500/20 mb-3 sm:mb-4">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 bento-pulse"></span>
                                                        Service phare
                                                    </span>
                                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 sm:mb-3 leading-tight">{service.title}</h3>
                                                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-sm mb-4 sm:mb-5">{service.shortDescription}</p>
                                                    <span className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                                                        Découvrir <i className="ph ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }

                            // Special layout for Neon Flex (index 4)
                            if (index === 4) {
                                return (
                                    <Link key={service.id} href={`/services/${service.id}`} className={cardCustomClass} style={{ '--glow': service.color } as any}>
                                        <div className="bento-card-border"></div>
                                        <div className="bento-card-inner">
                                            <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40 z-10"></div>
                                                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                                            </div>
                                            <div className="relative z-20 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 h-full p-5 sm:p-7 md:p-8">
                                                <div className="flex-grow">
                                                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                                        <div className="bento-icon-ring" style={{ '--ring-color': service.color } as any}>
                                                            <i className={`ph ${service.icon} text-xl text-pink-400`}></i>
                                                        </div>
                                                        <span className="text-white/5 text-3xl sm:text-5xl font-black leading-none select-none">0{index + 1}</span>
                                                    </div>
                                                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">{service.title}</h3>
                                                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-md">{service.shortDescription}</p>
                                                </div>
                                                <span className="inline-flex items-center gap-2 text-pink-400/70 text-xs sm:text-sm font-semibold group-hover:text-pink-400 group-hover:gap-3 transition-all duration-300 shrink-0">
                                                    Explorer <i className="ph ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }

                            // Default card layout
                            return (
                                <Link key={service.id} href={`/services/${service.id}`} className={cardCustomClass} style={{ '--glow': service.color } as any}>
                                    <div className="bento-card-border"></div>
                                    <div className="bento-card-inner">
                                        <div className="relative z-20 flex flex-col h-full p-5 sm:p-7">
                                            <div className="flex items-center justify-between mb-4 sm:mb-6">
                                                <div className="bento-icon-ring" style={{ '--ring-color': service.color } as any}>
                                                    <i className={`ph ${service.icon} text-xl text-teal-300`}></i>
                                                </div>
                                                <span className="text-white/5 text-3xl sm:text-5xl font-black leading-none select-none">0{index + 1}</span>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{service.title}</h3>
                                            <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">{service.shortDescription}</p>
                                            <span className="inline-flex items-center gap-2 text-teal-400/70 text-xs font-semibold group-hover:text-teal-400 group-hover:gap-3 transition-all duration-300">
                                                Explorer <i className="ph ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
