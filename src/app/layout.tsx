import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Grúas Elevadoras Pro - Servicio Profesional de Traslado Vertical",
  description: "Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 12 pisos. Tecnología de vanguardia y seguridad garantizada en Ciudad de México.",
  keywords: "grúas elevadoras, traslado vertical, mudanzas, electrodomésticos, edificios, Ciudad de México",
  authors: [{ name: "Grúas Elevadoras Pro" }],
  creator: "Grúas Elevadoras Pro",
  publisher: "Grúas Elevadoras Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gruaselevadoras.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Grúas Elevadoras Pro - Servicio Profesional de Traslado Vertical",
    description: "Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 12 pisos.",
    url: 'https://gruaselevadoras.com',
    siteName: 'Grúas Elevadoras Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grúas Elevadoras Pro - Servicio de Traslado Vertical',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Grúas Elevadoras Pro - Servicio Profesional de Traslado Vertical",
    description: "Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 12 pisos.",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#1A237E" />
        <meta name="msapplication-TileColor" content="#1A237E" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
