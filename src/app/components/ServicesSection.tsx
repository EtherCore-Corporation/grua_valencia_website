'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Building, Home, Truck, Shield, Clock, Users, Award, Phone } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: "Edificios Residenciales",
    description: "Servicio especializado para edificios de hasta 12 pisos con acceso directo a balcones y ventanas.",
    features: ["Hasta 36m de altura", "Plataforma ajustable", "Control remoto"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Home,
    title: "Casas Particulares",
    description: "Solución perfecta para mudanzas y traslados de muebles pesados en viviendas unifamiliares.",
    features: ["Acceso directo", "Manejo cuidadoso", "Embalaje incluido"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Truck,
    title: "Electrodomésticos",
    description: "Traslado seguro de refrigeradores, lavadoras, secadoras y otros electrodomésticos grandes.",
    features: ["Protección especial", "Amarre profesional", "Seguro incluido"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Shield,
    title: "Muebles de Oficina",
    description: "Servicio corporativo para traslado de mobiliario de oficina y equipos empresariales.",
    features: ["Horario flexible", "Personal capacitado", "Documentación"],
    color: "from-purple-500 to-purple-600"
  }
];

const stats = [
  { number: "500+", label: "Trabajos Completados", icon: Award },
  { number: "24/7", label: "Disponibilidad", icon: Clock },
  { number: "15+", label: "Años de Experiencia", icon: Users },
  { number: "100%", label: "Seguro Garantizado", icon: Shield }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
            Nuestros <span className="text-orange-400">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones completas para el traslado vertical de cualquier tipo de carga 
            con la máxima seguridad y profesionalismo.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-orange-500/30">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-md border border-orange-500/30 rounded-2xl p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Necesitas una cotización personalizada?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para evaluar tu proyecto 
              y ofrecerte la mejor solución para tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                Solicitar Presupuesto
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 