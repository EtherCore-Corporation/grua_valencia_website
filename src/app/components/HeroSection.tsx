'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
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
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium backdrop-blur-sm">
                🏗️ Grúas Elevadoras Valencia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{
                textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,111,0,0.2)',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)'
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Grúas
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Elevadoras
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300">
                Valencia
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Especialistas en alquiler de grúas elevadoras para construcción, 
              mudanzas y trabajos en altura en toda la Comunidad Valenciana. 
              Más de 15 años de experiencia al servicio de nuestros clientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg text-lg transition-all duration-300 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Solicitar Presupuesto</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg text-lg transition-all duration-300 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm">
                Ver Nuestras Grúas
              </button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-sm">+34 96 123 45 67</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-sm">info@gruaselevadorasvalencia.es</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-sm">Valencia, España</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 p-[2px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  Solicita tu Presupuesto
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Nombre</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Apellidos</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        placeholder="Tus apellidos"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Teléfono</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Tipo de Servicio</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all">
                      <option value="">Selecciona un servicio</option>
                      <option value="construccion">Construcción</option>
                      <option value="mudanza">Mudanza</option>
                      <option value="mantenimiento">Mantenimiento</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Mensaje</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                      placeholder="Describe tu proyecto o necesidades..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg text-lg transition-all duration-300 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 shadow-lg"
                  >
                    Enviar Solicitud
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://wa.me/34961234567?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20grúas%20elevadoras"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="w-8 h-8 text-white" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </a>
      </motion.div>
    </section>
  );
} 