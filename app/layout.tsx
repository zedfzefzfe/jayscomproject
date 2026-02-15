import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

import './globals.css'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Jayscom - Solutions Visuelles',
  description: 'Votre partenaire de confiance pour la conception et l\'installation d\'enseignes lumineuses et signalétique 3D au Maroc.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="lazyOnload" />
      </head>
      <body className={`${fontSans.variable} font-sans antialiased text-slate-600 bg-white flex flex-col min-h-screen`}>
        <ScrollReveal />
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
