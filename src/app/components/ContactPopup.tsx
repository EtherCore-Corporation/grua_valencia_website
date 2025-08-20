"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    tipoServicio: '',
    mensaje: ''
  });

  // Abrir popup automáticamente a los 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => {
    setIsOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Cerrar popup después de enviar
    setIsOpen(false);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={closePopup}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-6 right-6 w-96 max-w-[90vw] bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 rounded-2xl shadow-2xl border border-white/20 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-6 bg-gradient-to-r from-orange-500/20 to-blue-500/20 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-orange-400" />
                  Contacto Rápido
                </h3>
                <button
                  onClick={closePopup}
                  className="p-2 text-white/70 hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-300 text-sm">
                Solicita tu presupuesto en menos de 2 minutos
              </p>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre y Apellidos */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 text-xs font-medium mb-1">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-xs font-medium mb-1">Apellidos</label>
                    <input
                      type="text"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                      placeholder="Tus apellidos"
                      required
                    />
                  </div>
                </div>

                {/* Teléfono y Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 text-xs font-medium mb-1">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                      placeholder="+34 600 000 000"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-xs font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Tipo de Servicio */}
                <div>
                  <label className="block text-gray-300 text-xs font-medium mb-1">Tipo de Servicio</label>
                  <select
                    name="tipoServicio"
                    value={formData.tipoServicio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="construccion">🏗️ Construcción</option>
                    <option value="mudanza">📦 Mudanza</option>
                    <option value="mantenimiento">🔧 Mantenimiento</option>
                    <option value="limpieza">🧹 Limpieza</option>
                    <option value="pintura">🎨 Pintura</option>
                    <option value="jardineria">🌱 Jardinería</option>
                    <option value="otros">📋 Otros</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-gray-300 text-xs font-medium mb-1">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none text-sm"
                    placeholder="Describe brevemente tu proyecto..."
                    required
                  ></textarea>
                </div>

                {/* Botón Enviar */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg text-sm transition-all duration-300 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar Solicitud
                </button>
              </form>

              {/* Footer del popup */}
              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                <p className="text-gray-400 text-xs">
                  📞 También puedes llamarnos: <span className="text-orange-400 font-medium">+34 96 123 45 67</span>
                </p>
              </div>
            </div>
                     </motion.div>
         </>
       )}

       {/* Botón flotante para reabrir el popup */}
       {!isOpen && (
         <motion.button
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.3, delay: 0.5 }}
           onClick={openPopup}
           className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110 z-40 flex items-center justify-center"
         >
           <MessageCircle className="w-7 h-7" />
         </motion.button>
       )}
     </AnimatePresence>
   );
 }
