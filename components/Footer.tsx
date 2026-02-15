import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-20 pb-8 border-t border-slate-800/50 text-sm">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="reveal reveal-up visible alpha-0">
                    <Link href="/" className="flex items-center gap-2 mb-6">
                        <img
                            src="/assets/img/logo-icon.svg"
                            alt="Jayscom Logo"
                            className="h-10 w-auto object-contain brightness-0 invert opacity-90"
                        />
                    </Link>
                    <p className="mb-6 leading-relaxed">
                        Votre partenaire expert en communication visuelle et signalétique à Casablanca. Qualité et créativité garanties.
                    </p>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/ProPub.YOrk/"
                            className="social-icon w-11 h-11 rounded-xl bg-slate-800/80 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all">
                            <i className="ph ph-facebook-logo text-xl"></i>
                        </a>
                        <a href="#"
                            className="social-icon w-11 h-11 rounded-xl bg-slate-800/80 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                            <i className="ph ph-instagram-logo text-xl"></i>
                        </a>
                        <a href="https://wa.me/212699355710"
                            className="social-icon w-11 h-11 rounded-xl bg-slate-800/80 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                            <i className="ph ph-whatsapp-logo text-xl"></i>
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div className="reveal reveal-up delay-1 visible alpha-0">
                    <h4 className="text-white font-bold text-lg mb-6">Nos Services</h4>
                    <ul className="space-y-3">
                        <li><Link href="/services/enseignes-lumineuses" className="footer-link hover:text-teal-400 transition">Enseignes Lumineuses</Link></li>
                        <li><Link href="/services/habillage-facade" className="footer-link hover:text-teal-400 transition">Habillage Façade</Link></li>
                        <li><Link href="/services/lettrage-3d" className="footer-link hover:text-teal-400 transition">Lettrage 3D</Link></li>
                        <li><Link href="/services/impression-numerique" className="footer-link hover:text-teal-400 transition">Impression Numérique</Link></li>
                        <li><Link href="/services/totem-signaletique" className="footer-link hover:text-teal-400 transition">Signalétique</Link></li>
                    </ul>
                </div>

                {/* Links */}
                <div className="reveal reveal-up delay-2 visible alpha-0">
                    <h4 className="text-white font-bold text-lg mb-6">Liens Rapides</h4>
                    <ul className="space-y-3">
                        <li><Link href="/" className="footer-link hover:text-teal-400 transition">Accueil</Link></li>
                        <li><Link href="/portfolio.html" className="footer-link hover:text-teal-400 transition">Réalisations</Link></li>
                        <li><Link href="/about.html" className="footer-link hover:text-teal-400 transition">À propos de nous</Link></li>
                        <li><Link href="/contact.html" className="footer-link hover:text-teal-400 transition">Contact & Devis</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="reveal reveal-up delay-3 visible alpha-0">
                    <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
                    <ul className="space-y-5">
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0">
                                <i className="ph ph-map-pin text-teal-400 text-lg"></i>
                            </div>
                            <span className="pt-2">Casablanca, Maroc</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0">
                                <i className="ph ph-phone text-teal-400 text-lg"></i>
                            </div>
                            <a href="tel:0699355710" className="hover:text-white transition pt-2">0699 35 57 10</a>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0">
                                <i className="ph ph-envelope-simple text-teal-400 text-lg"></i>
                            </div>
                            <a href="mailto:Jayscom22@gmail.com" className="hover:text-white transition pt-2">Jayscom22@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800/50 pt-8">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600">&copy; <span id="current-year">{new Date().getFullYear()}</span> Jayscom. Tous droits réservés.</p>
                    <p className="text-slate-700 text-xs">Fabriqué avec passion à Casablanca</p>
                </div>
            </div>
        </footer>
    );
}
