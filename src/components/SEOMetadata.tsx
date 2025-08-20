"use client";

import Head from 'next/head';
import { useSEOData } from '../hooks/useSiteData';

interface SEOMetadataProps {
  pageSlug?: string;
}

interface PageData {
  meta_title?: string;
  title?: string;
  meta_description?: string;
  description?: string;
  meta_keywords?: string[];
  meta_image_url?: string;
  canonical_url?: string;
}

interface SEOMetadataData {
  og_title?: string;
  og_description?: string;
  og_image_url?: string;
  og_url?: string;
  og_type?: string;
  og_locale?: string;
  twitter_card?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image_url?: string;
  structured_data?: Record<string, unknown>;
}

interface SEODataResponse {
  page?: PageData;
  seoMetadata?: SEOMetadataData;
}

export default function SEOMetadata({ pageSlug = 'home' }: SEOMetadataProps) {
  const { seoData, loading, error } = useSEOData(pageSlug);

  // Datos por defecto en caso de error o carga
  const defaultTitle = 'Plataformas La Terra - Servicio Profesional de Traslado Vertical en Valencia';
  const defaultDescription = 'Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 7 pisos. Tecnología de vanguardia y seguridad garantizada en Valencia.';
  const defaultKeywords = ['grúas elevadoras', 'traslado vertical', 'mudanzas', 'electrodomésticos', 'edificios', 'Valencia', 'plataformas elevadoras', 'construcción', 'altura', 'seguridad'];
  const defaultImage = '/og-image.jpg';
  const defaultUrl = 'https://plataformaslaterra.es';

  // Usar datos de la base de datos o valores por defecto
  const typedSeoData = seoData as SEODataResponse;
  const title = typedSeoData?.page?.meta_title || typedSeoData?.page?.title || defaultTitle;
  const description = typedSeoData?.page?.meta_description || typedSeoData?.page?.description || defaultDescription;
  const keywords = typedSeoData?.page?.meta_keywords || defaultKeywords;
  const image = typedSeoData?.page?.meta_image_url || typedSeoData?.seoMetadata?.og_image_url || defaultImage;
  const canonical = typedSeoData?.page?.canonical_url || typedSeoData?.seoMetadata?.og_url || defaultUrl;
  const ogTitle = typedSeoData?.seoMetadata?.og_title || title;
  const ogDescription = typedSeoData?.seoMetadata?.og_description || description;
  const ogImage = typedSeoData?.seoMetadata?.og_image_url || image;
  const ogType = typedSeoData?.seoMetadata?.og_type || 'website';
  const ogLocale = typedSeoData?.seoMetadata?.og_locale || 'es_ES';
  const twitterCard = typedSeoData?.seoMetadata?.twitter_card || 'summary_large_image';
  const twitterTitle = typedSeoData?.seoMetadata?.twitter_title || title;
  const twitterDescription = typedSeoData?.seoMetadata?.twitter_description || description;
  const twitterImage = typedSeoData?.seoMetadata?.twitter_image_url || image;
  const structuredData = typedSeoData?.seoMetadata?.structured_data || null;

  if (loading || error) {
    // Fallback a metadatos por defecto
    return (
      <Head>
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />
        <meta name="keywords" content={defaultKeywords.join(', ')} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Plataformas La Terra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:image" content={defaultImage} />
        <meta property="og:url" content={defaultUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Plataformas La Terra" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={defaultImage} />
        
        {/* Canonical */}
        <link rel="canonical" href={defaultUrl} />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Plataformas La Terra",
              "description": defaultDescription,
              "url": defaultUrl,
              "telephone": "+34961234567",
              "email": "info@plataformaslaterra.es",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Valencia",
                "addressRegion": "Comunidad Valenciana",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.4699",
                "longitude": "-0.3763"
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "€€",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "39.4699",
                  "longitude": "-0.3763"
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
      </Head>
    );
  }

  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Plataformas La Terra" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content="Plataformas La Terra" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Schema.org Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Metadatos adicionales para SEO */}
      <meta name="language" content="es" />
      <meta name="geo.region" content="ES-VC" />
      <meta name="geo.placename" content="Valencia" />
      <meta name="geo.position" content="39.4699;-0.3763" />
      <meta name="ICBM" content="39.4699, -0.3763" />
      
      {/* Metadatos para móviles */}
      <meta name="theme-color" content="#1A237E" />
      <meta name="msapplication-TileColor" content="#1A237E" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect para optimización de rendimiento */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
}
