import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos TypeScript para la base de datos
export interface SiteConfig {
  id: string;
  site_name: string;
  site_description: string | null;
  site_keywords: string[] | null;
  site_url: string | null;
  site_logo_url: string | null;
  site_favicon_url: string | null;
  theme_color: string | null;
  created_at: string;
  updated_at: string;
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string[] | null;
  meta_image_url: string | null;
  canonical_url: string | null;
  h1_title: string | null;
  h2_subtitle: string | null;
  content: Record<string, unknown> | null;
  seo_priority: number | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Section {
  id: string;
  page_id: string;
  section_type: string;
  section_order: number;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  content: Record<string, unknown> | null;
  background_image_url: string | null;
  background_color: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  title: string;
  description: string | null;
  icon_name: string | null;
  features: string[] | null;
  color_gradient: string | null;
  image_url: string | null;
  is_featured: boolean;
  service_order: number | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  client_location: string | null;
  rating: number | null;
  service_type: string | null;
  quote: string;
  client_image_url: string | null;
  is_featured: boolean;
  testimonial_order: number | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ServiceArea {
  id: string;
  city_name: string;
  province: string | null;
  region: string | null;
  country: string | null;
  is_active: boolean;
  created_at: string;
}

export interface ContactInfo {
  id: string;
  contact_type: string;
  title: string | null;
  value: string;
  description: string | null;
  icon_name: string | null;
  is_primary: boolean;
  is_active: boolean;
  contact_order: number | null;
  created_at: string;
  updated_at: string;
}

export interface CompanyStat {
  id: string;
  stat_name: string;
  stat_value: string;
  stat_label: string | null;
  icon_name: string | null;
  is_featured: boolean;
  stat_order: number | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface SEOMetadata {
  id: string;
  page_id: string;
  og_title: string | null;
  og_description: string | null;
  og_image_url: string | null;
  og_type: string | null;
  og_locale: string | null;
  twitter_card: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  twitter_image_url: string | null;
  structured_data: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
}

export interface SiteImage {
  id: string;
  image_name: string;
  image_url: string;
  alt_text: string | null;
  image_type: string | null;
  file_size: number | null;
  dimensions: string | null;
  is_optimized: boolean;
  is_active: boolean;
  created_at: string;
}

export interface FormConfig {
  id: string;
  form_name: string;
  form_fields: Record<string, unknown> | null;
  validation_rules: Record<string, unknown> | null;
  success_message: string | null;
  error_message: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
