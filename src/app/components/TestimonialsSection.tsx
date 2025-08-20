"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useFeaturedTestimonials, useSectionData } from '../../hooks/useSiteData';

export default function TestimonialsSection() {
  // Hooks para datos dinámicos
  const { testimonials, loading: testimonialsLoading } = useFeaturedTestimonials(6);
  const { sectionData, loading: sectionLoading } = useSectionData('testimonials');

  // Fallback data
  const fallbackTestimonials = [
    {
      id: '1',
      client_name: 'María García',
      client_location: 'Valencia Centro',
      rating: 5,
      service_type: 'Mudanza Completa',
      quote: 'Excelente servicio. La grúa llegó puntual y el equipo fue muy profesional. Movieron todos nuestros muebles sin un solo rasguño. ¡Altamente recomendados!',
      client_image_url: null,
      is_featured: true,
      testimonial_order: 1,
      is_active: true
    },
    {
      id: '2',
      client_name: 'Carlos Rodríguez',
      client_location: 'Paterna',
      rating: 5,
      service_type: 'Electrodomésticos',
      quote: 'Necesitaba subir una nevera al 8º piso y lo hicieron perfectamente. El precio fue justo y el trabajo impecable. Volveré a contratarlos.',
      client_image_url: null,
      is_featured: true,
      testimonial_order: 2,
      is_active: true
    },
    {
      id: '3',
      client_name: 'Ana Martínez',
      client_location: 'Torrent',
      rating: 5,
      service_type: 'Muebles de Oficina',
      quote: 'Contraté sus servicios para mi empresa y quedé muy satisfecha. El equipo fue eficiente, puntual y muy cuidadoso con todo el mobiliario.',
      client_image_url: null,
      is_featured: true,
      testimonial_order: 3,
      is_active: true
    },
    {
      id: '4',
      client_name: 'Luis Fernández',
      client_location: 'Mislata',
      rating: 5,
      service_type: 'Construcción',
      quote: 'Trabajamos con ellos en varios proyectos de construcción. Siempre cumplen con los plazos y mantienen los más altos estándares de seguridad.',
      client_image_url: null,
      is_featured: true,
      testimonial_order: 4,
      is_active: true
    },
    {
      id: '5',
      client_name: 'Isabel López',
      client_location: 'Alaquàs',
      rating: 5,
      service_type: 'Mudanza Residencial',
      quote: 'La mejor experiencia que he tenido con una mudanza. El equipo fue amable, profesional y muy cuidadoso. El precio fue transparente desde el principio.',
      client_image_url: null,
      is_featured: true,
      testimonial_order: 5,
      is_active: true
    },
    {
      id: '6',
      client_name: 'Roberto Sánchez',
      client_location: 'Quart de Poblet',
      rating: 5,
      service_type: 'Servicio Especial',
      quote: 'Los llamé para un trabajo especial y estuvieron aquí en menos de una hora. Servicio excepcional y muy profesional.',
      client_image_url: null,
      is_featured: true,
      testimonial_order: 6,
      is_active: true
    }
  ];

  // Usar datos de la base de datos o fallback
  const testimonialsData = testimonials.length > 0 ? testimonials : fallbackTestimonials;
  const backgroundColor = sectionData?.background_color || 'from-blue-900 via-slate-900 to-blue-800';
  const sectionTitle = sectionData?.title || 'Lo que dicen nuestros clientes';
  const sectionDescription = sectionData?.description || 'Más de 500 clientes satisfechos en toda la Comunidad Valenciana. Nuestra reputación se basa en la excelencia y la confianza.';
  const rating = sectionData?.content?.rating || '4.9/5';
  const totalReviews = sectionData?.content?.total_reviews || '500+';

  if (sectionLoading || testimonialsLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-white text-xl">Cargando testimonios...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonios" className={`py-20 bg-gradient-to-br ${backgroundColor} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {sectionTitle}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {sectionDescription}
          </p>
          
          {/* Rating Display */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold text-orange-400">{String(rating)}</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-gray-300 text-lg">
              Basado en <span className="text-white font-semibold">{String(totalReviews)}</span> reseñas
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id || index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl h-full hover:bg-white/10 transition-all duration-300 hover:border-orange-500/30">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-orange-400/30 group-hover:text-orange-400 transition-colors duration-300">
                  <Quote className="w-8 h-8" />
                </div>
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote Text */}
                <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.client_name?.charAt(0) || 'C'}
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.client_name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.client_location}
                    </div>
                    <div className="text-orange-400 text-sm font-medium">
                      {testimonial.service_type}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres ser nuestro próximo cliente satisfecho?
            </h3>
            <p className="text-gray-300 mb-8">
              Únete a más de 500 clientes que ya han confiado en nuestro servicio profesional de grúas elevadoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Solicitar Presupuesto
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:border-white/60 hover:bg-white/10 transition-all duration-300">
                Ver Más Testimonios
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 