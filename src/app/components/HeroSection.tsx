"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useSectionData } from '../../hooks/useSiteData';
import ContactPopup from './ContactPopup';

export default function HeroSection() {
  const { sectionData, loading, error } = useSectionData('hero');

  // Fallback data en caso de error o carga
  const fallbackData = {
    title: 'Plataformas La Terra',
    subtitle: 'Valencia',
    description: 'Especialistas en alquiler de grúas elevadoras para construcción, mudanzas y trabajos en altura en toda la Comunidad Valenciana. Más de 15 años de experiencia al servicio de nuestros clientes.',
    cta_buttons: [
      { text: 'Solicitar Presupuesto', type: 'primary', action: 'form' },
      { text: 'Ver Nuestras Grúas', type: 'secondary', action: 'scroll' }
    ],
    contact_info: [
      { type: 'phone', value: '+34 96 123 45 67', icon: 'Phone' },
      { type: 'email', value: 'info@gruaselevadorasvalencia.es', icon: 'Mail' },
      { type: 'location', value: 'Valencia, España', icon: 'MapPin' }
    ],
    hero_image: '/grua-sin-background.png',
    floating_elements: [
      { text: '⭐ 15+ Años', position: 'top-right', color: 'orange' },
      { text: '🏗️ Hasta 21m', position: 'bottom-left', color: 'blue' }
    ]
  };

  // Usar datos de la base de datos o fallback
  const data = sectionData?.content || fallbackData;
  const backgroundColor = sectionData?.background_color || 'from-blue-900 via-slate-900 to-blue-800';

  if (loading) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 overflow-hidden pt-16 sm:pt-20">
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-lg sm:text-xl">Cargando...</div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading hero section:', error);
  }

  return (
    <section className={`relative min-h-screen bg-gradient-to-br ${backgroundColor} overflow-hidden pt-16 sm:pt-20`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 sm:mb-6 px-2 sm:px-0"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                🏗️ {String(data.title)} - {String(data.subtitle)}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              style={{
                textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,111,0,0.2)',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)'
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Plataformas
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                La Terra
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300">
                {String(data.subtitle)}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              {String(data.description)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0"
            >
              {Array.isArray(data.cta_buttons) && data.cta_buttons.map((button, index) => (
                <button
                  key={index}
                  className={`group relative px-6 sm:px-8 py-3 sm:py-4 ${
                    button.type === 'primary'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:from-orange-600 hover:to-orange-700'
                      : 'border-2 border-white/30 text-white font-bold hover:border-white/60 hover:bg-white/10 backdrop-blur-sm'
                  } rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  <span className="relative z-10">{button.text}</span>
                  {button.type === 'primary' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              ))}
            </motion.div>



            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0"
            >
              {Array.isArray(data.contact_info) && data.contact_info.map((contact, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-gray-300">
                  {contact.icon === 'Phone' && <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />}
                  {contact.icon === 'Mail' && <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />}
                  {contact.icon === 'MapPin' && <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />}
                  <span className="text-xs sm:text-sm">{contact.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Floating Elements */}
            {Array.isArray(data.floating_elements) && data.floating_elements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className={`absolute hidden sm:block ${
                  element.position === 'top-right' ? 'top-20 right-20' :
                  element.position === 'bottom-left' ? 'bottom-20 left-20' :
                  'top-1/2 right-1/2'
                } px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium`}
                style={{
                  color: element.color === 'orange' ? '#f97316' : '#3b82f6'
                }}
              >
                {element.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Video Section - Below Content on Mobile, Right on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative order-first lg:order-last mt-12 sm:mt-16 lg:mt-0"
          >
            <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
              {/* Video Container */}
              <div className="relative w-full h-80 sm:h-96 md:h-[28rem] lg:aspect-video rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden bg-black">
                <iframe
                  src="https://iframe.mediadelivery.net/play/394900/c10ee514-1380-4847-8dd8-e04e7086dba4?autoplay=1&loop=1&muted=1&controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&autohide=1&color=white&wmode=transparent&enablejsapi=0&origin=*"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ 
                    border: 'none',
                    transform: 'scale(2.0)',
                    transformOrigin: 'center center',
                    filter: 'brightness(1.1) contrast(1.1)'
                  }}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  title="Video Plataforma La Terra"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen={false}
                  sandbox="allow-scripts allow-same-origin"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Additional overlay to hide any remaining controls */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />
              </div>
              
              {/* Floating WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 z-20"
              >
                <a
                  href="https://wa.me/34961234567?text=Hola,%20necesito%20información%20sobre%20sus%20servicios%20de%20grúas%20elevadoras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Popup Component */}
      <ContactPopup />
    </section>
  );
} 