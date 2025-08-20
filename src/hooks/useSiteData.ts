"use client";

import { useState, useEffect } from 'react';
import { getAllSiteData, getPageWithSections, getServices, getFeaturedTestimonials, getServiceAreas, getContactInfo, getCompanyStats, getSiteImages, getFormConfig } from '../lib/api';
import type { SiteConfig, Page, Section, Service, Testimonial, ServiceArea, ContactInfo, CompanyStat, SiteImage, FormConfig, SEOMetadata } from '../lib/supabase';

// Hook principal para obtener todos los datos del sitio
export function useSiteData() {
  const [data, setData] = useState<{
    siteConfig: SiteConfig | null;
    pageData: { page: Page; sections: Section[]; seoMetadata: SEOMetadata | null; } | null;
    services: Service[];
    testimonials: Testimonial[];
    serviceAreas: ServiceArea[];
    contactInfo: ContactInfo[];
    companyStats: CompanyStat[];
    siteImages: SiteImage[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getAllSiteData();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    getAllSiteData()
      .then(setData)
      .catch(err => setError(err instanceof Error ? err : new Error('Error desconocido')))
      .finally(() => setLoading(false));
  };

  return { ...data, loading, error, refetch };
}

// Hook para datos SEO
export function useSEOData(slug: string = 'home') {
  const [seoData, setSeoData] = useState<{ page: Page; sections: Section[]; seoMetadata: SEOMetadata | null; } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSEOData = async () => {
      try {
        setLoading(true);
        const result = await getPageWithSections(slug);
        setSeoData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchSEOData();
  }, [slug]);

  return { seoData, loading, error };
}

// Hook para servicios
export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const result = await getServices();
        setServices(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const refetch = () => {
    setLoading(true);
    getServices()
      .then(setServices)
      .catch(err => setError(err instanceof Error ? err : new Error('Error desconocido')))
      .finally(() => setLoading(false));
  };

  return { services, loading, error, refetch };
}

// Hook para testimonios destacados
export function useFeaturedTestimonials(limit: number = 6) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const result = await getFeaturedTestimonials(limit);
        setTestimonials(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [limit]);

  const refetch = () => {
    setLoading(true);
    getFeaturedTestimonials(limit)
      .then(setTestimonials)
      .catch(err => setError(err instanceof Error ? err : new Error('Error desconocido')))
      .finally(() => setLoading(false));
  };

  return { testimonials, loading, error, refetch };
}

// Hook para zonas de servicio
export function useServiceAreas() {
  const [serviceAreas, setServiceAreas] = useState<ServiceArea[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchServiceAreas = async () => {
      try {
        setLoading(true);
        const result = await getServiceAreas();
        setServiceAreas(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchServiceAreas();
  }, []);

  const refetch = () => {
    setLoading(true);
    getServiceAreas()
      .then(setServiceAreas)
      .catch(err => setError(err instanceof Error ? err : new Error('Error desconocido')))
      .finally(() => setLoading(false));
  };

  return { serviceAreas, loading, error, refetch };
}

// Hook para información de contacto
export function useContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        setLoading(true);
        const result = await getContactInfo();
        setContactInfo(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  const refetch = () => {
    setLoading(true);
    getContactInfo()
      .then(setContactInfo)
      .catch(err => setError(err instanceof Error ? err : new Error('Error desconocido')))
      .finally(() => setLoading(false));
  };

  return { contactInfo, loading, error, refetch };
}

// Hook para estadísticas de la empresa
export function useCompanyStats() {
  const [companyStats, setCompanyStats] = useState<CompanyStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCompanyStats = async () => {
      try {
        setLoading(true);
        const result = await getCompanyStats();
        setCompanyStats(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyStats();
  }, []);

  const refetch = () => {
    setLoading(true);
    getCompanyStats()
      .then(setCompanyStats)
      .catch(err => setError(err instanceof Error ? err : new Error('Error desconocido')))
      .finally(() => setLoading(false));
  };

  return { companyStats, loading, error, refetch };
}

// Hook para imágenes del sitio
export function useSiteImages() {
  const [siteImages, setSiteImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSiteImages = async () => {
      try {
        setLoading(true);
        const result = await getSiteImages();
        setSiteImages(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchSiteImages();
  }, []);

  const refetch = () => {
    setLoading(true);
    getSiteImages()
      .then(setSiteImages)
      .catch(err => setError(err instanceof Error ? err : new Error('Error desconocido')))
      .finally(() => setLoading(false));
  };

  return { siteImages, loading, error, refetch };
}

// Hook para configuración de formularios
export function useFormConfig(formName: string) {
  const [formConfig, setFormConfig] = useState<FormConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFormConfig = async () => {
      try {
        setLoading(true);
        const result = await getFormConfig(formName);
        setFormConfig(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchFormConfig();
  }, [formName]);

  const refetch = () => {
    setLoading(true);
    getFormConfig(formName)
      .then(setFormConfig)
      .catch(err => setError(err instanceof Error ? err : new Error('Error desconocido')))
      .finally(() => setLoading(false));
  };

  return { formConfig, loading, error, refetch };
}

// Hook para datos de secciones específicas
export function useSectionData(sectionType: string) {
  const [sectionData, setSectionData] = useState<Section | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        setLoading(true);
        const result = await getPageWithSections('home');
        if (result?.sections) {
          const section = result.sections.find(s => s.section_type === sectionType);
          setSectionData(section || null);
        }
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchSectionData();
  }, [sectionType]);

  return { sectionData, loading, error };
}

// Hook para configuración del sitio
export function useSiteConfig() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSiteConfig = async () => {
      try {
        setLoading(true);
        const result = await getAllSiteData();
        setSiteConfig(result.siteConfig);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchSiteConfig();
  }, []);

  return { siteConfig, loading, error };
}
