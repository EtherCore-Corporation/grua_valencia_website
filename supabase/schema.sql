-- Esquema de Base de Datos para Plataformas La Terra
-- Optimizado para SEO y gestión de contenidos

-- Tabla de configuración general del sitio
CREATE TABLE site_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_name VARCHAR(255) NOT NULL DEFAULT 'Plataformas La Terra',
  site_description TEXT,
  site_keywords TEXT[],
  site_url VARCHAR(255) DEFAULT 'https://plataformaslaterra.es',
  site_logo_url VARCHAR(255),
  site_favicon_url VARCHAR(255),
  theme_color VARCHAR(7) DEFAULT '#1A237E',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de páginas del sitio
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords TEXT[],
  meta_image_url VARCHAR(255),
  canonical_url VARCHAR(255),
  h1_title VARCHAR(255),
  h2_subtitle VARCHAR(255),
  content JSONB,
  seo_priority INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de secciones de contenido
CREATE TABLE sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  section_type VARCHAR(100) NOT NULL, -- 'hero', 'services', 'testimonials', 'location', 'contact'
  section_order INTEGER NOT NULL,
  title VARCHAR(255),
  subtitle VARCHAR(255),
  description TEXT,
  content JSONB,
  background_image_url VARCHAR(255),
  background_color VARCHAR(7),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de servicios
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  icon_name VARCHAR(100),
  features TEXT[],
  color_gradient VARCHAR(100),
  image_url VARCHAR(255),
  is_featured BOOLEAN DEFAULT false,
  service_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de testimonios
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name VARCHAR(255) NOT NULL,
  client_location VARCHAR(255),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  service_type VARCHAR(100),
  quote TEXT NOT NULL,
  client_image_url VARCHAR(255),
  is_featured BOOLEAN DEFAULT false,
  testimonial_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de zonas de servicio
CREATE TABLE service_areas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  city_name VARCHAR(255) NOT NULL,
  province VARCHAR(255) DEFAULT 'Valencia',
  region VARCHAR(255) DEFAULT 'Comunidad Valenciana',
  country VARCHAR(255) DEFAULT 'España',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de información de contacto
CREATE TABLE contact_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_type VARCHAR(100) NOT NULL, -- 'phone', 'email', 'address', 'hours'
  title VARCHAR(255),
  value VARCHAR(255) NOT NULL,
  description TEXT,
  icon_name VARCHAR(100),
  is_primary BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  contact_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZASE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de estadísticas de la empresa
CREATE TABLE company_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stat_name VARCHAR(255) NOT NULL,
  stat_value VARCHAR(255) NOT NULL,
  stat_label VARCHAR(255),
  icon_name VARCHAR(100),
  is_featured BOOLEAN DEFAULT false,
  stat_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de metadatos SEO específicos
CREATE TABLE seo_metadata (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  og_title VARCHAR(255),
  og_description TEXT,
  og_image_url VARCHAR(255),
  og_type VARCHAR(50) DEFAULT 'website',
  og_locale VARCHAR(10) DEFAULT 'es_ES',
  twitter_card VARCHAR(50) DEFAULT 'summary_large_image',
  twitter_title VARCHAR(255),
  twitter_description TEXT,
  twitter_image_url VARCHAR(255),
  structured_data JSONB, -- Schema.org markup
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de imágenes del sitio
CREATE TABLE site_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  alt_text TEXT,
  image_type VARCHAR(100), -- 'hero', 'service', 'testimonial', 'gallery'
  file_size INTEGER,
  dimensions VARCHAR(50), -- 'widthxheight'
  is_optimized BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de configuraciones de formularios
CREATE TABLE form_configs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_name VARCHAR(255) NOT NULL, -- 'contact', 'quote', 'emergency'
  form_fields JSONB,
  validation_rules JSONB,
  success_message TEXT,
  error_message TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para optimización
CREATE INDEX idx_pages_slug ON pages(slug);
CREATE INDEX idx_pages_active ON pages(is_active);
CREATE INDEX idx_sections_page_id ON sections(page_id);
CREATE INDEX idx_sections_type ON sections(section_type);
CREATE INDEX idx_services_active ON services(is_active);
CREATE INDEX idx_testimonials_active ON testimonials(is_active);
CREATE INDEX idx_testimonials_featured ON testimonials(is_featured);
CREATE INDEX idx_service_areas_active ON service_areas(is_active);
CREATE INDEX idx_contact_info_type ON contact_info(contact_type);
CREATE INDEX idx_company_stats_active ON company_stats(is_active);

-- Función para actualizar timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para actualizar timestamps
CREATE TRIGGER update_site_config_updated_at BEFORE UPDATE ON site_config FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_pages_updated_at BEFORE UPDATE ON pages FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sections_updated_at BEFORE UPDATE ON sections FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_info_updated_at BEFORE UPDATE ON contact_info FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_company_stats_updated_at BEFORE UPDATE ON company_stats FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_seo_metadata_updated_at BEFORE UPDATE ON seo_metadata FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_form_configs_updated_at BEFORE UPDATE ON form_configs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Datos iniciales
INSERT INTO site_config (site_name, site_description, site_keywords, site_url, theme_color) VALUES (
  'Plataformas La Terra',
  'Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 7 pisos. Tecnología de vanguardia y seguridad garantizada en Valencia.',
  ARRAY['grúas elevadoras', 'traslado vertical', 'mudanzas', 'electrodomésticos', 'edificios', 'Valencia', 'plataformas elevadoras'],
  'https://plataformaslaterra.es',
  '#1A237E'
);

-- Página principal
INSERT INTO pages (slug, title, meta_title, meta_description, meta_keywords, h1_title, h2_subtitle, seo_priority) VALUES (
  'home',
  'Plataformas La Terra - Servicio Profesional de Traslado Vertical en Valencia',
  'Plataformas La Terra - Servicio Profesional de Traslado Vertical en Valencia',
  'Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 7 pisos. Tecnología de vanguardia y seguridad garantizada en Valencia.',
  ARRAY['grúas elevadoras', 'traslado vertical', 'mudanzas', 'electrodomésticos', 'edificios', 'Valencia', 'plataformas elevadoras'],
  'Plataformas La Terra',
  'Servicio Profesional de Traslado Vertical en Valencia',
  1
);
