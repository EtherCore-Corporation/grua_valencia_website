"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useSiteConfig } from '../../hooks/useSiteData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Hook para datos dinámicos
  const { siteConfig, loading } = useSiteConfig();

  // Fallback data
  const fallbackConfig = {
    site_name: 'Plataformas La Terra',
    site_logo_url: '/logo.png',
    theme_color: '#1A237E'
  };

  // Usar datos de la base de datos o fallback
  const config = siteConfig || fallbackConfig;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900/95 to-slate-900/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-white text-lg">Cargando...</div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-blue-900/95 to-slate-900/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img
                src={config.site_logo_url || '/logo.png'}
                alt={config.site_name || 'Plataformas La Terra'}
                className="h-10 lg:h-12 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => scrollToSection('servicios')}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium"
              >
                Servicios
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => scrollToSection('testimonios')}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium"
              >
                Testimonios
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => scrollToSection('ubicacion')}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium"
              >
                Ubicación
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => scrollToSection('contacto')}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium"
              >
                Contacto
              </motion.button>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                href="tel:+34961234567"
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Llamar
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                href="https://wa.me/34961234567?text=Hola,%20necesito%20información%20sobre%20sus%20servicios%20de%20grúas%20elevadoras"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-white/30 text-white rounded-lg hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={toggleMenu}
              className="lg:hidden p-2 text-white hover:text-orange-400 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-b from-blue-900 to-slate-900 z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center">
                  <img
                    src={config.site_logo_url || '/logo.png'}
                    alt={config.site_name || 'Plataformas La Terra'}
                    className="h-8 w-auto"
                  />
                  {/* Título removido - solo se muestra el logo */}
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 text-white hover:text-orange-400 transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 p-6 space-y-6">
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="block w-full text-left text-white hover:text-orange-400 transition-colors duration-300 font-medium text-lg py-3 border-b border-white/10"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection('testimonios')}
                  className="block w-full text-left text-white hover:text-orange-400 transition-colors duration-300 font-medium text-lg py-3 border-b border-white/10"
                >
                  Testimonios
                </button>
                <button
                  onClick={() => scrollToSection('ubicacion')}
                  className="block w-full text-left text-white hover:text-orange-400 transition-colors duration-300 font-medium text-lg py-3 border-b border-white/10"
                >
                  Ubicación
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="block w-full text-left text-white hover:text-orange-400 transition-colors duration-300 font-medium text-lg py-3 border-b border-white/10"
                >
                  Contacto
                </button>
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="p-6 space-y-4 border-t border-white/10">
                <a
                  href="tel:+34961234567"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
                <a
                  href="https://wa.me/34961234567?text=Hola,%20necesito%20información%20sobre%20sus%20servicios%20de%20grúas%20elevadoras"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-white/30 text-white rounded-lg hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
} 