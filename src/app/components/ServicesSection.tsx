"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Home, Truck, Shield, Clock, Users, Award } from 'lucide-react';
import Crane3DModel from './Crane3DModel';
import Image from 'next/image';
import { useServices, useCompanyStats, useSectionData } from '../../hooks/useSiteData';

interface ServiceData {
  icon_name: string;
  title: string;
  description: string;
  features: string[];
  color_gradient: string;
}

interface CompanyStatData {
  stat_value: string;
  stat_label: string;
  icon_name: string;
}

interface SectionContentData {
  additional_images?: Array<{
    url: string;
    alt: string;
    title: string;
    description: string;
  }>;
  '3d_model'?: {
    title: string;
    description: string;
    specifications?: string[];
  };
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentView, setCurrentView] = useState('front');
  
  // Hooks para datos dinámicos
  const { services, loading: servicesLoading } = useServices();
  const { companyStats, loading: statsLoading } = useCompanyStats();
  const { sectionData, loading: sectionLoading } = useSectionData('services');



  const handleViewClick = (view: string) => {
    if (typeof window !== 'undefined' && (window as Window & { changeCraneView?: (view: string) => void }).changeCraneView) {
      (window as Window & { changeCraneView?: (view: string) => void }).changeCraneView!(view);
    }
  };

  // Fallback data
  const fallbackServices = [
    {
      icon_name: 'Building',
      title: "Edificios Residenciales",
      description: "Servicio especializado para edificios de hasta 7 pisos con acceso directo a balcones y ventanas.",
      features: ["Hasta 21m de altura", "Plataforma ajustable", "Control remoto"],
      color_gradient: "from-blue-500 to-blue-600"
    },
    {
      icon_name: 'Home',
      title: "Casas Particulares",
      description: "Solución perfecta para mudanzas y traslados de muebles pesados en viviendas unifamiliares.",
      features: ["Acceso directo", "Manejo cuidadoso", "Embalaje incluido"],
      color_gradient: "from-orange-500 to-orange-600"
    },
    {
      icon_name: 'Truck',
      title: "Electrodomésticos",
      description: "Traslado seguro de refrigeradores, lavadoras, secadoras y otros electrodomésticos grandes.",
      features: ["Protección especial", "Amarre profesional", "Seguro incluido"],
      color_gradient: "from-green-500 to-green-600"
    },
    {
      icon_name: 'Shield',
      title: "Muebles de Oficina",
      description: "Servicio corporativo para traslado de mobiliario de oficina y equipos empresariales.",
      features: ["Horario flexible", "Personal capacitado", "Documentación"],
      color_gradient: "from-purple-500 to-purple-600"
    },
    {
      icon_name: 'Building',
      title: "Paneles Solares",
      description: "Instalación y mantenimiento de paneles solares con acceso seguro a techos y azoteas.",
      features: ["Acceso a techos", "Instalación profesional", "Mantenimiento"],
      color_gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const fallbackStats = [
    { stat_value: "500+", stat_label: "Trabajos Completados", icon_name: 'Award' },
    { stat_value: "8:00-18:00", stat_label: "Horario de Trabajo", icon_name: 'Clock' },
    { stat_value: "15+", stat_label: "Años de Experiencia", icon_name: 'Users' },
    { stat_value: "100%", stat_label: "Seguro Garantizado", icon_name: 'Shield' }
  ];

  // Usar datos de la base de datos o fallback
  const servicesData: ServiceData[] = services.length > 0 ? (services as ServiceData[]) : fallbackServices;
  const statsData: CompanyStatData[] = companyStats.length > 0 ? (companyStats as CompanyStatData[]) : fallbackStats;
  const backgroundColor = sectionData?.background_color || 'from-slate-900 to-blue-900';
  const sectionTitle = sectionData?.title || 'Nuestros Servicios';
  const sectionDescription = sectionData?.description || 'Ofrecemos soluciones completas para el traslado vertical de cualquier tipo de carga con la máxima seguridad y profesionalismo.';

  if (sectionLoading || servicesLoading || statsLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-white text-xl">Cargando servicios...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="servicios" ref={sectionRef} className={`py-20 bg-gradient-to-b ${backgroundColor} relative overflow-hidden`}>
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
            {sectionTitle} <span className="text-orange-400">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {servicesData.map((service, index) => {
            const IconComponent = 
              service.icon_name === 'Building' ? Building :
              service.icon_name === 'Home' ? Home :
              service.icon_name === 'Truck' ? Truck :
              service.icon_name === 'Shield' ? Shield : Building;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-orange-500/30">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color_gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Images Section */}
        {(sectionData?.content as SectionContentData)?.additional_images && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {(sectionData?.content as SectionContentData)?.additional_images?.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                      <p className="text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 3D Model Section */}
        {(sectionData?.content as SectionContentData)?.['3d_model'] && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                {(sectionData?.content as SectionContentData)?.['3d_model']?.title}
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {(sectionData?.content as SectionContentData)?.['3d_model']?.description}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Crane3DModel />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-white mb-6">Especificaciones Técnicas</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(sectionData?.content as SectionContentData)?.['3d_model']?.specifications?.map((spec, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{spec}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {['front', 'side', 'top', 'detail'].map((view) => (
                      <button
                        key={view}
                        onClick={() => handleViewClick(view)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          currentView === view
                            ? 'bg-orange-500 text-white shadow-lg'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                        }`}
                      >
                        {view === 'front' ? 'Frente' : 
                         view === 'side' ? 'Lateral' : 
                         view === 'top' ? 'Superior' : 'Detalle'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            Nuestros <span className="text-orange-400">Números</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => {
              const IconComponent = 
                stat.icon_name === 'Award' ? Award :
                stat.icon_name === 'Clock' ? Clock :
                stat.icon_name === 'Users' ? Users :
                stat.icon_name === 'Shield' ? Shield : Award;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.stat_value}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.stat_label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas una Grúa Elevadora?
            </h3>
            <p className="text-gray-300 mb-8">
              Contáctanos hoy mismo para obtener un presupuesto personalizado y sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Solicitar Presupuesto
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:border-white/60 hover:bg-white/10 transition-all duration-300">
                Llamar Ahora
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 