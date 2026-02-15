"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm">
                <div className="container mx-auto px-6 flex justify-between items-center text-navy-900 py-3">
                    <Link href="/" className="flex items-center gap-0 group logo-reveal-group">
                        <img
                            src="/assets/img/logo-icon.svg"
                            alt="Jayscom Icon"
                            className="h-16 w-auto object-contain flex-shrink-0"
                        />
                        <div className="flex flex-col logo-text">
                            <span className="font-bold text-2xl tracking-tight leading-none text-navy-900 font-serif">JAYS COM</span>
                            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-teal-600 font-semibold leading-none mt-1">Solutions Visuelles</span>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8 font-medium">
                        <Link href="/" className={pathname === "/" ? "text-teal-600" : "hover:text-teal-600 transition"}>Accueil</Link>
                        <Link href="/services" className={pathname.startsWith("/services") ? "text-teal-600" : "hover:text-teal-600 transition"}>Services</Link>
                        <Link href="/portfolio.html" className="hover:text-teal-600 transition">Réalisations</Link>
                        <Link href="/about.html" className="hover:text-teal-600 transition">À propos</Link>
                        <Link href="/contact.html" className="hover:text-teal-600 transition">Contact</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/contact.html"
                            className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-navy-900 rounded-lg hover:bg-teal-600 transition shadow-lg hover:shadow-teal-500/30">
                            Demander un devis
                        </Link>
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="lg:hidden text-2xl text-navy-900"
                        >
                            <i className="ph ph-list"></i>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-[60] transform transition-transform duration-300 flex flex-col p-6 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center mb-10">
                    <span className="font-bold text-xl text-navy-900">Menu</span>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl text-slate-400 hover:text-navy-900"
                    >
                        <i className="ph ph-x"></i>
                    </button>
                </div>
                <nav className="flex flex-col gap-6 text-lg font-medium text-slate-700">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-teal-600">Accueil</Link>
                    <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-teal-600">Services</Link>
                    <Link href="/portfolio.html" onClick={() => setMobileMenuOpen(false)} className="hover:text-teal-600">Réalisations</Link>
                    <Link href="/about.html" onClick={() => setMobileMenuOpen(false)} className="hover:text-teal-600">À propos</Link>
                    <Link href="/contact.html" onClick={() => setMobileMenuOpen(false)} className="hover:text-teal-600">Contact</Link>
                </nav>
                <div className="mt-auto">
                    <Link href="/contact.html"
                        className="flex items-center justify-center w-full px-6 py-3 text-white bg-navy-900 rounded-lg hover:bg-teal-600 transition">
                        Demander un devis
                    </Link>
                </div>
            </div>

            {/* Backdrop */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </>
    );
}
