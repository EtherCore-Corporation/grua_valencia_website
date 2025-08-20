import { supabase } from './supabase';
import type { SiteConfig, Page, Section, Service, Testimonial, ServiceArea, ContactInfo, CompanyStat, SiteImage, FormConfig, SEOMetadata } from './supabase';

// Cache en memoria para optimizar rendimiento
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

// Función para obtener datos del cache
function getCachedData<T>(key: string): T | null {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
}

// Función para guardar datos en el cache
function setCachedData<T>(key: string, data: T): void {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
}

// Obtener configuración del sitio
export async function getSiteConfig(): Promise<SiteConfig | null> {
  const cacheKey = 'site_config';
  const cached = getCachedData<SiteConfig>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('site_config')
      .select('*')
      .limit(1)
      .single();

    if (error) throw error;
    
    setCachedData(cacheKey, data);
    return data;
  } catch (error) {
    console.error('Error fetching site config:', error);
    return null;
  }
}

// Obtener página con secciones y metadatos SEO
export async function getPageWithSections(slug: string): Promise<{ page: Page; sections: Section[]; seoMetadata: SEOMetadata | null; } | null> {
  const cacheKey = `page_${slug}`;
  const cached = getCachedData<{ page: Page; sections: Section[]; seoMetadata: SEOMetadata | null; }>(cacheKey);
  if (cached) return cached;

  try {
    // Obtener página
    const { data: page, error: pageError } = await supabase
      .from('pages')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (pageError) throw pageError;

    // Obtener secciones de la página
    const { data: sections, error: sectionsError } = await supabase
      .from('sections')
      .select('*')
      .eq('page_id', page.id)
      .eq('is_active', true)
      .order('section_order', { ascending: true });

    if (sectionsError) throw sectionsError;

    // Obtener metadatos SEO
    const { data: seoMetadata, error: seoError } = await supabase
      .from('seo_metadata')
      .select('*')
      .eq('page_id', page.id)
      .single();

    if (seoError && seoError.code !== 'PGRST116') {
      console.warn('SEO metadata not found for page:', slug);
    }

    const result = {
      page,
      sections: sections || [],
      seoMetadata: seoMetadata || null
    };

    setCachedData(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Error fetching page with sections:', error);
    return null;
  }
}

// Obtener servicios
export async function getServices(): Promise<Service[]> {
  const cacheKey = 'services';
  const cached = getCachedData<Service[]>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('service_order', { ascending: true });

    if (error) throw error;
    
    setCachedData(cacheKey, data || []);
    return data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// Obtener testimonios destacados
export async function getFeaturedTestimonials(limit: number = 6): Promise<Testimonial[]> {
  const cacheKey = `testimonials_${limit}`;
  const cached = getCachedData<Testimonial[]>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_active', true)
      .eq('is_featured', true)
      .order('testimonial_order', { ascending: true })
      .limit(limit);

    if (error) throw error;
    
    setCachedData(cacheKey, data || []);
    return data || [];
  } catch (error) {
    console.error('Error fetching featured testimonials:', error);
    return [];
  }
}

// Obtener zonas de servicio
export async function getServiceAreas(): Promise<ServiceArea[]> {
  const cacheKey = 'service_areas';
  const cached = getCachedData<ServiceArea[]>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('service_areas')
      .select('*')
      .eq('is_active', true)
      .order('city_name', { ascending: true });

    if (error) throw error;
    
    setCachedData(cacheKey, data || []);
    return data || [];
  } catch (error) {
    console.error('Error fetching service areas:', error);
    return [];
  }
}

// Obtener información de contacto
export async function getContactInfo(): Promise<ContactInfo[]> {
  const cacheKey = 'contact_info';
  const cached = getCachedData<ContactInfo[]>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('contact_info')
      .select('*')
      .eq('is_active', true)
      .order('contact_order', { ascending: true });

    if (error) throw error;
    
    setCachedData(cacheKey, data || []);
    return data || [];
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return [];
  }
}

// Obtener estadísticas de la empresa
export async function getCompanyStats(): Promise<CompanyStat[]> {
  const cacheKey = 'company_stats';
  const cached = getCachedData<CompanyStat[]>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('company_stats')
      .select('*')
      .eq('is_active', true)
      .order('stat_order', { ascending: true });

    if (error) throw error;
    
    setCachedData(cacheKey, data || []);
    return data || [];
  } catch (error) {
    console.error('Error fetching company stats:', error);
    return [];
  }
}

// Obtener imágenes del sitio
export async function getSiteImages(): Promise<SiteImage[]> {
  const cacheKey = 'site_images';
  const cached = getCachedData<SiteImage[]>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('site_images')
      .select('*')
      .eq('is_active', true);

    if (error) throw error;
    
    setCachedData(cacheKey, data || []);
    return data || [];
  } catch (error) {
    console.error('Error fetching site images:', error);
    return [];
  }
}

// Obtener configuración de formularios
export async function getFormConfig(formName: string): Promise<FormConfig | null> {
  const cacheKey = `form_config_${formName}`;
  const cached = getCachedData<FormConfig>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('form_configs')
      .select('*')
      .eq('form_name', formName)
      .eq('is_active', true)
      .single();

    if (error) throw error;
    
    setCachedData(cacheKey, data);
    return data;
  } catch (error) {
    console.error('Error fetching form config:', error);
    return null;
  }
}

// Función principal para obtener todos los datos del sitio
export async function getAllSiteData(): Promise<{
  siteConfig: SiteConfig | null;
  pageData: { page: Page; sections: Section[]; seoMetadata: SEOMetadata | null; } | null;
  services: Service[];
  testimonials: Testimonial[];
  serviceAreas: ServiceArea[];
  contactInfo: ContactInfo[];
  companyStats: CompanyStat[];
  siteImages: SiteImage[];
}> {
  try {
    // Ejecutar todas las consultas en paralelo para optimizar rendimiento
    const [
      siteConfig,
      pageData,
      services,
      testimonials,
      serviceAreas,
      contactInfo,
      companyStats,
      siteImages
    ] = await Promise.all([
      getSiteConfig(),
      getPageWithSections('home'),
      getServices(),
      getFeaturedTestimonials(6),
      getServiceAreas(),
      getContactInfo(),
      getCompanyStats(),
      getSiteImages()
    ]);

    return {
      siteConfig,
      pageData,
      services,
      testimonials,
      serviceAreas,
      contactInfo,
      companyStats,
      siteImages
    };
  } catch (error) {
    console.error('Error fetching all site data:', error);
    return {
      siteConfig: null,
      pageData: null,
      services: [],
      testimonials: [],
      serviceAreas: [],
      contactInfo: [],
      companyStats: [],
      siteImages: []
    };
  }
}

// Función para limpiar el cache
export function clearCache(): void {
  cache.clear();
}

// Función para obtener estadísticas del cache
export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: cache.size,
    keys: Array.from(cache.keys())
  };
}
