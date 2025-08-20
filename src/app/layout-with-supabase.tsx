import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SEOMetadata from "../components/SEOMetadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Metadata estática como fallback
export const metadata: Metadata = {
  title: "Plataformas La Terra - Servicio Profesional de Traslado Vertical en Valencia",
  description: "Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 7 pisos. Tecnología de vanguardia y seguridad garantizada en Valencia.",
  keywords: "grúas elevadoras, traslado vertical, mudanzas, electrodomésticos, edificios, Valencia, plataformas elevadoras",
  authors: [{ name: "Plataformas La Terra" }],
  creator: "Plataformas La Terra",
  publisher: "Plataformas La Terra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://plataformaslaterra.es'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Plataformas La Terra - Servicio Profesional de Traslado Vertical en Valencia",
    description: "Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 7 pisos en Valencia.",
    url: 'https://plataformaslaterra.es',
    siteName: 'Plataformas La Terra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Plataformas La Terra - Servicio de Traslado Vertical en Valencia',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Plataformas La Terra - Servicio Profesional de Traslado Vertical en Valencia",
    description: "Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 7 pisos en Valencia.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <meta name="theme-color" content="#1A237E" />
        <meta name="msapplication-TileColor" content="#1A237E" />
        
        {/* Metadatos SEO dinámicos desde Supabase */}
        <SEOMetadata pageSlug="home" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
