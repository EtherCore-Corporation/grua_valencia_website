-- Script de actualización para Plataformas La Terra
-- Compatible con cualquier esquema de base de datos
-- Actualiza datos existentes sin conflictos

-- 1. ACTUALIZAR CONFIGURACIÓN DEL SITIO
UPDATE site_config SET 
  site_description = 'Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 7 pisos. Tecnología de vanguardia y seguridad garantizada en Valencia.',
  site_keywords = ARRAY['grúas elevadoras', 'traslado vertical', 'mudanzas', 'electrodomésticos', 'edificios', 'Valencia', 'plataformas elevadoras', 'construcción', 'altura', 'seguridad']
WHERE site_name = 'Plataformas La Terra';

-- 2. ACTUALIZAR PÁGINA PRINCIPAL
UPDATE pages SET 
  meta_description = 'Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 7 pisos. Tecnología de vanguardia y seguridad garantizada en Valencia.',
  meta_keywords = ARRAY['grúas elevadoras', 'traslado vertical', 'mudanzas', 'electrodomésticos', 'edificios', 'Valencia', 'plataformas elevadoras', 'construcción', 'altura', 'seguridad']
WHERE slug = 'home';

-- 3. ACTUALIZAR METADATOS SEO
UPDATE seo_metadata SET 
  og_description = 'Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 7 pisos en Valencia.',
  twitter_description = 'Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 7 pisos en Valencia.',
  structured_data = '{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Plataformas La Terra",
    "description": "Servicio especializado de grúas elevadoras para traslado vertical en Valencia",
    "url": "https://plataformaslaterra.es",
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
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Grúas Elevadoras",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Traslado Vertical en Edificios",
            "description": "Servicio de grúas elevadoras para edificios de hasta 7 pisos"
          }
        }
      ]
    }
  }'
WHERE page_id = (SELECT id FROM pages WHERE slug = 'home');

-- 4. ACTUALIZAR SECCIÓN HERO - Altura de grúa
UPDATE sections SET 
  content = jsonb_set(
    content, 
    '{floating_elements,1,text}', 
    '"🏗️ Hasta 21m"'
  )
WHERE section_type = 'hero' AND content->'floating_elements'->1->>'text' LIKE '%36m%';

-- 5. ACTUALIZAR SECCIÓN SERVICIOS - Pisos
UPDATE sections SET 
  content = jsonb_set(
    content, 
    '{additional_images,0,description}', 
    '"Servicio especializado para edificios de hasta 7 pisos con acceso directo a balcones y ventanas."'
  )
WHERE section_type = 'services' AND content->'additional_images'->0->>'description' LIKE '%12 pisos%';

-- 6. ACTUALIZAR SECCIÓN SERVICIOS - Modelo 3D
UPDATE sections SET 
  content = jsonb_set(
    content, 
    '{3d_model,title}', 
    '"Grúa 3D"'
  )
WHERE section_type = 'services' AND content->'3d_model'->>'title' LIKE '%Interactiva%';

UPDATE sections SET 
  content = jsonb_set(
    content, 
    '{3d_model,specifications,0}', 
    '"Altura máxima: 21 metros"'
  )
WHERE section_type = 'services' AND content->'3d_model'->>'specifications' IS NOT NULL;

-- 7. ACTUALIZAR SECCIÓN UBICACIÓN - Horarios (CORREGIDO)
UPDATE sections SET 
  content = jsonb_set(
    jsonb_set(
      content, 
      '{emergency_info,title}', 
      '"Horario de Trabajo"'
    ),
    '{emergency_info,description}', 
    '"Nuestro equipo está disponible de lunes a viernes de 8:00 a 18:00 en toda Valencia."'
  )
WHERE section_type = 'location';

-- 8. ACTUALIZAR SECCIÓN CONTACTO - Horarios (CORREGIDO)
UPDATE sections SET 
  content = jsonb_set(
    jsonb_set(
      content, 
      '{emergency_info,title}', 
      '"Horario de Trabajo"'
    ),
    '{emergency_info,description}', 
    '"Nuestro equipo está disponible de lunes a viernes de 8:00 a 18:00 en toda Valencia."'
  )
WHERE section_type = 'contact';

-- 9. ACTUALIZAR SERVICIOS EXISTENTES
UPDATE services SET 
  description = 'Servicio especializado para edificios de hasta 7 pisos con acceso directo a balcones y ventanas.',
  features = ARRAY['Hasta 21m de altura', 'Plataforma ajustable', 'Control remoto']
WHERE title = 'Edificios Residenciales';

-- 10. AÑADIR SERVICIO DE PANELES SOLARES
INSERT INTO services (title, description, icon_name, features, color_gradient, image_url, is_featured, service_order, is_active) 
SELECT 'Paneles Solares', 'Instalación y mantenimiento de paneles solares con acceso seguro a techos y azoteas.', 'Building', ARRAY['Acceso a techos', 'Instalación profesional', 'Mantenimiento'], 'from-yellow-500 to-orange-500', NULL, true, 5, true
WHERE NOT EXISTS (SELECT 1 FROM services WHERE title = 'Paneles Solares');

-- 11. ACTUALIZAR TESTIMONIOS - Sin emergencias
UPDATE testimonials SET 
  service_type = 'Servicio Especial',
  quote = 'Los llamé para un trabajo especial y estuvieron aquí en menos de una hora. Servicio excepcional y muy profesional.'
WHERE client_name = 'Roberto Sánchez' AND service_type = 'Emergencia';

-- 12. ACTUALIZAR INFORMACIÓN DE CONTACTO
UPDATE contact_info SET 
  description = 'Línea directa de 8:00 a 18:00'
WHERE contact_type = 'phone';

UPDATE contact_info SET 
  value = '8:00 - 18:00',
  description = 'Lunes a Viernes'
WHERE contact_type = 'hours';

-- 13. ACTUALIZAR ESTADÍSTICAS DE LA EMPRESA
UPDATE company_stats SET 
  stat_name = 'Horario de Trabajo',
  stat_value = '8:00-18:00',
  stat_label = 'Horario de Trabajo'
WHERE stat_value LIKE '%24/7%';

-- 14. ACTUALIZAR CONFIGURACIONES DE FORMULARIOS
UPDATE form_configs SET 
  success_message = '¡Gracias por tu mensaje! Te responderemos en menos de 2 horas.'
WHERE form_name = 'contact';

UPDATE form_configs SET 
  success_message = '¡Cotización enviada! Te contactaremos en las próximas 24 horas.'
WHERE form_name = 'quote';

-- 15. ACTUALIZAR IMÁGENES DEL SITIO
UPDATE site_images SET 
  alt_text = 'Plataformas La Terra Logo',
  is_optimized = true
WHERE image_name = 'logo';

UPDATE site_images SET 
  alt_text = 'Grúa Elevadora Profesional',
  is_optimized = true
WHERE image_name = 'hero-grua';

UPDATE site_images SET 
  alt_text = 'Grúa trabajando en edificio',
  is_optimized = true
WHERE image_name = 'grua-edificio';

UPDATE site_images SET 
  alt_text = 'Grúa elevadora profesional',
  is_optimized = true
WHERE image_name = 'grua-profesional';

UPDATE site_images SET 
  alt_text = 'Plataformas La Terra Favicon',
  is_optimized = true
WHERE image_name = 'favicon';

-- 16. AÑADIR IMÁGENES SI NO EXISTEN
INSERT INTO site_images (image_name, image_url, alt_text, image_type, is_optimized, is_active) 
SELECT 'logo', '/logo.png', 'Plataformas La Terra Logo', 'logo', true, true
WHERE NOT EXISTS (SELECT 1 FROM site_images WHERE image_name = 'logo');

INSERT INTO site_images (image_name, image_url, alt_text, image_type, is_optimized, is_active) 
SELECT 'hero-grua', '/grua-sin-background.png', 'Grúa Elevadora Profesional', 'hero', true, true
WHERE NOT EXISTS (SELECT 1 FROM site_images WHERE image_name = 'hero-grua');

INSERT INTO site_images (image_name, image_url, alt_text, image_type, is_optimized, is_active) 
SELECT 'grua-edificio', '/grua desde abajo.png', 'Grúa trabajando en edificio', 'service', true, true
WHERE NOT EXISTS (SELECT 1 FROM site_images WHERE image_name = 'grua-edificio');

INSERT INTO site_images (image_name, image_url, alt_text, image_type, is_optimized, is_active) 
SELECT 'grua-profesional', '/imagen grua.png', 'Grúa elevadora profesional', 'service', true, true
WHERE NOT EXISTS (SELECT 1 FROM site_images WHERE image_name = 'grua-profesional');

INSERT INTO site_images (image_name, image_url, alt_text, image_type, is_optimized, is_active) 
SELECT 'favicon', '/logo.png', 'Plataformas La Terra Favicon', 'favicon', true, true
WHERE NOT EXISTS (SELECT 1 FROM site_images WHERE image_name = 'favicon');

-- Mensaje de confirmación
SELECT 'Script de actualización ejecutado correctamente. Todos los cambios han sido aplicados.' as resultado;

-- CONSULTAS SQL PARA TELÉFONO

-- 1. OBTENER TODOS LOS SERVICIOS
SELECT title, description, features, color_gradient 
FROM services 
WHERE is_active = true 
ORDER BY service_order;

-- 2. OBTENER TESTIMONIOS DESTACADOS
SELECT client_name, client_location, rating, service_type, quote 
FROM testimonials 
WHERE is_featured = true AND is_active = true 
ORDER BY testimonial_order 
LIMIT 6;

-- 3. OBTENER INFORMACIÓN DE CONTACTO
SELECT contact_type, title, value, description, icon_name 
FROM contact_info 
WHERE is_active = true 
ORDER BY contact_order;

-- 4. OBTENER ESTADÍSTICAS DE LA EMPRESA
SELECT stat_name, stat_value, stat_label, icon_name 
FROM company_stats 
WHERE is_featured = true AND is_active = true 
ORDER BY stat_order;

-- 5. OBTENER ZONAS DE SERVICIO
SELECT city_name, province, region 
FROM service_areas 
WHERE is_active = true 
ORDER BY city_name;

-- 6. OBTENER CONFIGURACIÓN DEL SITIO
SELECT site_name, site_description, site_keywords, theme_color 
FROM site_config;

-- 7. OBTENER SECCIONES DE LA PÁGINA PRINCIPAL
SELECT section_type, title, subtitle, description, background_color 
FROM sections 
WHERE page_id = (SELECT id FROM pages WHERE slug = 'home') 
ORDER BY section_order;

-- 8. OBTENER METADATOS SEO
SELECT og_title, og_description, twitter_title, twitter_description 
FROM seo_metadata 
WHERE page_id = (SELECT id FROM pages WHERE slug = 'home');

-- 9. OBTENER CONFIGURACIÓN DE FORMULARIOS
SELECT form_name, form_fields, validation_rules, success_message 
FROM form_configs 
WHERE is_active = true;

-- 10. OBTENER IMÁGENES DEL SITIO
SELECT image_name, image_url, alt_text, image_type 
FROM site_images 
WHERE is_active = true 
ORDER BY image_name;
