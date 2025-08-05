'use client';

import { motion } from 'framer-motion';
import { Star, Quote, User, MapPin } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "María García",
    location: "Valencia Centro",
    rating: 5,
    service: "Mudanza Completa",
    image: "/testimonial-1.jpg",
    quote: "Excelente servicio. La grúa llegó puntual y el equipo fue muy profesional. Movieron todos nuestros muebles sin un solo rasguño. ¡Altamente recomendados!",
    date: "Hace 2 semanas"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    location: "Paterna",
    rating: 5,
    service: "Electrodomésticos",
    image: "/testimonial-2.jpg",
    quote: "Necesitaba subir una nevera al 8º piso y lo hicieron perfectamente. El precio fue justo y el trabajo impecable. Volveré a contratarlos.",
    date: "Hace 1 mes"
  },
  {
    id: 3,
    name: "Ana Martínez",
    location: "Torrent",
    rating: 5,
    service: "Muebles de Oficina",
    image: "/testimonial-3.jpg",
    quote: "Contraté sus servicios para mi empresa y quedé muy satisfecha. El equipo fue eficiente, puntual y muy cuidadoso con todo el mobiliario.",
    date: "Hace 3 semanas"
  },
  {
    id: 4,
    name: "Luis Fernández",
    location: "Mislata",
    rating: 5,
    service: "Construcción",
    image: "/testimonial-4.jpg",
    quote: "Trabajamos con ellos en varios proyectos de construcción. Siempre cumplen con los plazos y mantienen los más altos estándares de seguridad.",
    date: "Hace 2 meses"
  },
  {
    id: 5,
    name: "Isabel López",
    location: "Alaquàs",
    rating: 5,
    service: "Mudanza Residencial",
    image: "/testimonial-5.jpg",
    quote: "La mejor experiencia que he tenido con una mudanza. El equipo fue amable, profesional y muy cuidadoso. El precio fue transparente desde el principio.",
    date: "Hace 1 semana"
  },
  {
    id: 6,
    name: "Roberto Sánchez",
    location: "Quart de Poblet",
    rating: 5,
    service: "Emergencia",
    image: "/testimonial-6.jpg",
    quote: "Los llamé a las 2 de la mañana por una emergencia y estuvieron aquí en menos de una hora. Servicio excepcional las 24 horas.",
    date: "Hace 5 días"
  }
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 via-slate-900 to-blue-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/3 to-blue-500/3 rounded-full blur-3xl" />
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-3 mb-6"
          >
            <Star className="w-5 h-5 text-orange-400 fill-current" />
            <span className="text-orange-300 font-medium">4.9/5 - 500+ Reseñas</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Lo que dicen nuestros <span className="text-orange-400">clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 500 clientes satisfechos en toda la Comunidad Valenciana. 
            Nuestra reputación se basa en la excelencia y la confianza.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12">
              <Quote className="w-12 h-12 text-orange-400 mb-6" />
              
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl lg:text-2xl text-white mb-8 leading-relaxed italic">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </p>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{testimonials[activeTestimonial].location}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 inline-block">
                  <span className="text-orange-300 text-sm font-medium">
                    {testimonials[activeTestimonial].service}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setActiveTestimonial(index)}
            >
              <div className={`bg-white/5 backdrop-blur-md border rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/10 ${
                activeTestimonial === index 
                  ? 'border-orange-500/50 bg-orange-500/10' 
                  : 'border-white/10 hover:border-orange-500/30'
              }`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">{testimonial.name}</h4>
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{testimonial.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-orange-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-xs font-medium bg-orange-500/20 px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                  <span className="text-gray-500 text-xs">{testimonial.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-md border border-orange-500/30 rounded-2xl p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Números que hablan por sí solos
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-gray-300">Clientes Satisfechos</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">4.9/5</div>
                <div className="text-gray-300">Valoración Media</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">15+</div>
                <div className="text-gray-300">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Disponibilidad</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 