'use client';

import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Plataformas La Terra"
              width={200}
              height={80}
              className="h-20 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#servicios" className="text-white hover:text-orange-400 transition-colors duration-300 font-medium">
              Servicios
            </a>
            <a href="#nosotros" className="text-white hover:text-orange-400 transition-colors duration-300 font-medium">
              Nosotros
            </a>
            <a href="#contacto" className="text-white hover:text-orange-400 transition-colors duration-300 font-medium">
              Contacto
            </a>
            <a
              href="tel:+34961234567"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Llamar
            </a>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:hidden text-white hover:text-orange-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="py-4 space-y-4">
              <a
                href="#servicios"
                className="block text-white hover:text-orange-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="block text-white hover:text-orange-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="block text-white hover:text-orange-400 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <a
                href="tel:+34961234567"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Llamar
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
} 