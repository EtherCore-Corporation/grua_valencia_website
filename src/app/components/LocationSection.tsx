"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Shield } from 'lucide-react';
import { useServiceAreas, useSectionData } from '../../hooks/useSiteData';

interface CoverageData {
  radius?: string;
  response_time?: string;
  total_cities?: string;
}

interface EmergencyInfoData {
  title?: string;
  description?: string;
}

interface SectionContent {
  coverage?: CoverageData;
  emergency_info?: EmergencyInfoData;
}

export default function LocationSection() {
  // Hooks para datos dinámicos
  const { serviceAreas, loading: areasLoading } = useServiceAreas();
  const { sectionData, loading: sectionLoading } = useSectionData('location');

  // Fallback data
  const fallbackServiceAreas = [
    'Valencia Centro', 'Paterna', 'Torrent', 'Mislata', 'Alaquàs', 'Quart de Poblet',
    'Burjassot', 'Godella', 'Rocafort', 'Moncada', 'Alfara del Patriarca', 'Vinalesa',
    'Foios', 'Meliana', 'Almàssera', 'Tavernes Blanques', 'Alboraya', 'Massamagrell',
    'Puçol', 'Sagunto'
  ];

  // Usar datos de la base de datos o fallback
  const areasData = serviceAreas.length > 0 ? serviceAreas.map(area => area.city_name) : fallbackServiceAreas;
  const backgroundColor = sectionData?.background_color || 'from-slate-900 to-blue-900';
  const sectionTitle = sectionData?.title || 'Servicio en Valencia';
  const sectionDescription = sectionData?.description || 'Cubrimos toda la Comunidad Valenciana con nuestro servicio profesional de grúas elevadoras. Llegamos a cualquier punto en menos de 60 minutos.';
  const coverage = {
    radius: (sectionData?.content as SectionContent)?.coverage?.radius || '50km',
    response_time: (sectionData?.content as SectionContent)?.coverage?.response_time || '60 minutos máximo',
    total_cities: (sectionData?.content as SectionContent)?.coverage?.total_cities || '20+'
  };
  const emergencyInfo = {
    title: (sectionData?.content as SectionContent)?.emergency_info?.title || 'Horario de Trabajo',
    description: (sectionData?.content as SectionContent)?.emergency_info?.description || 'Nuestro equipo está disponible de lunes a viernes de 8:00 a 18:00 en toda Valencia.'
  };

  if (sectionLoading || areasLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-white text-xl">Cargando información de ubicación...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="ubicacion" className={`py-20 bg-gradient-to-b ${backgroundColor} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {sectionTitle}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {sectionDescription}
          </p>
          
          {/* Coverage Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{String(coverage?.radius || '30km')}</div>
              <div className="text-gray-300">Radio de Cobertura</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{String(coverage.response_time)}</div>
              <div className="text-gray-300">Tiempo de Respuesta</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{String(coverage.total_cities)}</div>
              <div className="text-gray-300">Ciudades Cubiertas</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Emergency Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-500/30 rounded-2xl">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {String(emergencyInfo.title)}
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                {String(emergencyInfo.description)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Llamada Directa
                </button>
                <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:border-white/60 hover:bg-white/10 transition-all duration-300">
                  WhatsApp Rápido
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Zonas de <span className="text-orange-400">Servicio</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areasData.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-center hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 cursor-pointer">
                  <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white text-sm font-medium">{city}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Cobertura en la <span className="text-orange-400">Comunidad Valenciana</span>
              </h3>
              
              <div className="relative h-96 bg-gradient-to-br from-blue-900/20 to-orange-900/20 rounded-xl border border-white/10 overflow-hidden">
                {/* Placeholder for map - you can integrate Google Maps or similar here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                    <p className="text-white text-lg mb-2">Mapa Interactivo</p>
                    <p className="text-gray-300 text-sm">Cobertura en toda Valencia y alrededores</p>
                  </div>
                </div>
                
                {/* Coverage indicators */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="absolute top-16 right-16 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-16 left-16 w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-8 right-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-300 mb-4">
                  Nuestro servicio cubre toda la Comunidad Valenciana con equipos estratégicamente ubicados
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    Valencia Centro
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    Paterna
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    Torrent
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    Mislata
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
              ¿Estamos en tu zona?
            </h3>
            <p className="text-gray-300 mb-8">
              Confirma si cubrimos tu ubicación y obtén un presupuesto personalizado en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Verificar Cobertura
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:border-white/60 hover:bg-white/10 transition-all duration-300">
                Contactar Ahora
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 