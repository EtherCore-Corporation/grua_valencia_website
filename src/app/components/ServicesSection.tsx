'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Building, Home, Truck, Shield, Clock, Users, Award, Phone } from 'lucide-react';
import Crane3DModel from './Crane3DModel';
import Image from 'next/image';

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
  const [currentView, setCurrentView] = useState('front');

  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  const handleViewClick = (view: string) => {
    if (typeof window !== 'undefined' && (window as Window & { changeCraneView?: (view: string) => void }).changeCraneView) {
      (window as Window & { changeCraneView?: (view: string) => void }).changeCraneView!(view);
    }
  };

  return (
    <section id="servicios" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 to-blue-900 relative overflow-hidden">
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

        {/* Additional Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Nuestras <span className="text-orange-400">Grúas en Acción</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                                 <Image
                   src="/grua desde abajo.png"
                   alt="Grúa trabajando en edificio"
                   width={600}
                   height={400}
                   className="w-full h-auto max-h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-bold text-white mb-2">Trabajos en Altura</h4>
                  <p className="text-gray-200 text-sm">Servicio especializado para edificios de hasta 12 pisos con acceso directo a balcones y ventanas.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                                 <Image
                   src="/imagen grua.png"
                   alt="Grúa elevadora profesional"
                   width={600}
                   height={400}
                   className="w-full h-auto max-h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-bold text-white mb-2">Equipos Profesionales</h4>
                  <p className="text-gray-200 text-sm">Tecnología de vanguardia y personal capacitado para garantizar la máxima seguridad en cada trabajo.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 3D Crane Model Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{
                textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,111,0,0.2)',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)'
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Grúa Interactiva 3D
              </span>
            </h3>
            <p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Explora nuestra grúa elevadora desde diferentes ángulos. Usa el ratón para controlar la vista.
            </p>
          </motion.div>

          {/* Interaction Claimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm border border-white/20">
              <span>💡</span>
              <span className="hidden md:inline">Haz clic en el modelo para interactuar</span>
              <span className="md:hidden">Haz doble tap en el modelo para interactuar</span>
            </div>
          </motion.div>

          {/* View Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="flex gap-2">
              <button
                onClick={() => handleViewClick('front')}
                className="group px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Vista Frontal
              </button>
              <button
                onClick={() => handleViewClick('side')}
                className="group px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Vista Lateral
              </button>
              <button
                onClick={() => handleViewClick('top')}
                className="group px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Vista Superior
              </button>
              <button
                onClick={() => handleViewClick('detail')}
                className="group px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Vista Detalle
              </button>
            </div>
          </motion.div>

          {/* 3D Model */}
          <div className="relative h-[400px] lg:h-[500px] mb-8">
            <Crane3DModel
              className="w-full h-full"
              isScrollSection={true}
              onViewChange={handleViewChange}
            />
            
            {/* Current View Indicator */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
              <p 
                className="text-white text-sm font-medium"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Vista: {currentView === 'front' ? 'Frontal' : 
                        currentView === 'side' ? 'Lateral' : 
                        currentView === 'top' ? 'Superior' : 'Detalle'}
              </p>
            </div>

            {/* Crane Info */}
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-xs border border-white/20">
              <h4 
                className="text-white font-semibold mb-2"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Especificaciones:
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Altura máxima: 36 metros</li>
                <li>• Capacidad: Hasta 500kg</li>
                <li>• Mastil telescópico</li>
                <li>• Control remoto incluido</li>
                <li>• Servicio en Valencia</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 p-[2px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800"></div>
              </div>
              
              <div className="relative z-10">
                <h4 
                  className="text-xl font-bold text-white mb-3"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  ¿Listo para tu proyecto en Valencia?
                </h4>
                <p 
                  className="text-gray-300 mb-4"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  Nuestra grúa está lista para trabajar en tu proyecto. 
                  Solicita una cotización personalizada para la Comunidad Valenciana.
                </p>
                <button 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

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