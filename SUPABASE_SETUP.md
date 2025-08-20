# Configuración de Supabase para Plataformas La Terra

## 🚀 Configuración Inicial

### 1. Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com) y crea una cuenta
2. Crea un nuevo proyecto
3. Selecciona la región más cercana a Valencia (por ejemplo, West Europe)
4. Anota tu `Project URL` y `anon public key`

### 2. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://plataformaslaterra.es
NEXT_PUBLIC_SITE_NAME="Plataformas La Terra"

# SEO Configuration
NEXT_PUBLIC_DEFAULT_LOCALE=es_ES
NEXT_PUBLIC_DEFAULT_TITLE="Plataformas La Terra - Servicio Profesional de Traslado Vertical en Valencia"
NEXT_PUBLIC_DEFAULT_DESCRIPTION="Servicio especializado de grúas elevadoras para traslado de muebles y electrodomésticos hasta 7 pisos. Tecnología de vanguardia y seguridad garantizada en Valencia."

# Contact Information
NEXT_PUBLIC_PHONE=+34961234567
NEXT_PUBLIC_EMAIL=info@plataformaslaterra.es
NEXT_PUBLIC_ADDRESS="Valencia, España"
NEXT_PUBLIC_WHATSAPP=+34961234567
```

### 3. Ejecutar el Esquema de Base de Datos

1. Ve a tu proyecto de Supabase
2. Navega a **SQL Editor**
3. Ejecuta el contenido del archivo `supabase/schema.sql`
4. Ejecuta el contenido del archivo `supabase/seed-data.sql`

## 📊 Estructura de la Base de Datos

### Tablas Principales

- **`site_config`**: Configuración general del sitio
- **`pages`**: Páginas del sitio con metadatos SEO
- **`sections`**: Secciones de contenido de cada página
- **`services`**: Servicios ofrecidos por la empresa
- **`testimonials`**: Testimonios de clientes
- **`service_areas`**: Zonas de cobertura de servicio
- **`contact_info`**: Información de contacto
- **`company_stats`**: Estadísticas de la empresa
- **`seo_metadata`**: Metadatos SEO específicos
- **`site_images`**: Imágenes del sitio
- **`form_configs`**: Configuraciones de formularios

### Relaciones

- Cada `page` tiene múltiples `sections`
- Cada `page` tiene un `seo_metadata` asociado
- Los `services` son independientes pero se muestran en secciones
- Los `testimonials` se pueden mostrar en múltiples secciones

## 🔧 Uso en el Código

### Hook Principal

```typescript
import { useSiteData } from '../hooks/useSiteData';

function MyComponent() {
  const { data, loading, error } = useSiteData();
  
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h1>{data.page?.h1_title}</h1>
      <p>{data.page?.h2_subtitle}</p>
    </div>
  );
}
```

### Hooks Específicos

```typescript
import { useServices, useTestimonials, useContactInfo } from '../hooks/useSiteData';

function ServicesSection() {
  const { services, loading } = useServices();
  const { testimonials } = useTestimonials(6);
  const { contactInfo } = useContactInfo();
  
  // Usar los datos...
}
```

### Componente SEO

```typescript
import SEOMetadata from '../components/SEOMetadata';

function Layout() {
  return (
    <>
      <SEOMetadata pageSlug="home" />
      {/* Resto del contenido */}
    </>
  );
}
```

## 📱 Gestión de Contenido

### Actualizar Contenido

1. **Desde Supabase Dashboard**:
   - Ve a **Table Editor**
   - Selecciona la tabla que quieras modificar
   - Edita los campos directamente

2. **Desde SQL**:
   ```sql
   UPDATE pages 
   SET meta_description = 'Nueva descripción SEO'
   WHERE slug = 'home';
   ```

### Agregar Nuevas Secciones

```sql
INSERT INTO sections (page_id, section_type, section_order, title, content) 
VALUES (
  (SELECT id FROM pages WHERE slug = 'home'),
  'nueva_seccion',
  6,
  'Título de la Nueva Sección',
  '{"contenido": "JSON con el contenido de la sección"}'
);
```

## 🚀 Optimizaciones de Rendimiento

### Cache

- Los datos se cachean automáticamente por 5 minutos
- Usa `refetch()` para actualizar datos en tiempo real
- El cache se limpia automáticamente

### Lazy Loading

```typescript
// Cargar solo los datos necesarios
const { services } = useServices();
const { testimonials } = useTestimonials(3); // Solo 3 testimonios
```

### Error Handling

```typescript
const { data, loading, error } = useSiteData();

if (error) {
  console.error('Error:', error);
  // Mostrar datos por defecto o mensaje de error
}
```

## 🔒 Seguridad

### Row Level Security (RLS)

Por defecto, todas las tablas son de solo lectura para usuarios anónimos. Si necesitas escritura:

```sql
-- Habilitar RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Política para permitir lectura pública
CREATE POLICY "Allow public read access" ON services
  FOR SELECT USING (true);
```

### Variables de Entorno

- Nunca expongas `service_role` key en el frontend
- Usa solo `anon` key para operaciones públicas
- Configura políticas RLS apropiadas

## 📈 Monitoreo y Analytics

### Logs de Supabase

- Ve a **Logs** en tu dashboard
- Monitorea queries y errores
- Configura alertas para errores críticos

### Performance

- Usa **Database** > **Performance** para monitorear queries
- Optimiza índices según el uso
- Monitorea el tamaño de la base de datos

## 🚀 Despliegue

### Producción

1. Crea un proyecto de producción en Supabase
2. Ejecuta el esquema y datos iniciales
3. Actualiza las variables de entorno
4. Configura dominio personalizado si es necesario

### Staging

1. Usa un proyecto separado para testing
2. Copia datos de producción si es necesario
3. Configura variables de entorno separadas

## 📚 Recursos Adicionales

- [Documentación de Supabase](https://supabase.com/docs)
- [Guía de RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [API Reference](https://supabase.com/docs/reference/javascript)
- [Soporte](https://supabase.com/support)

## 🆘 Troubleshooting

### Error de Conexión

```bash
# Verificar variables de entorno
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### Datos No Cargando

1. Verificar políticas RLS
2. Revisar logs de Supabase
3. Verificar estructura de la base de datos

### Performance Lenta

1. Revisar índices
2. Optimizar queries
3. Usar cache apropiadamente
