'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Crane3DModel from './Crane3DModel';

export default function CraneScrollSection() {
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
    <section className="relative py-16 bg-gradient-to-b from-blue-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{
              textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,111,0,0.2)',
              WebkitTextStroke: '1px rgba(255,255,255,0.1)'
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Grúa Interactiva 3D
            </span>
          </h2>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Explora nuestra grúa elevadora desde diferentes ángulos. Usa el ratón para controlar la vista.
          </p>
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

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm border border-white/20">
            <span>💡</span>
            <span>Pasa el ratón sobre el modelo para controlarlo manualmente</span>
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
              <h3 
                className="text-xl font-bold text-white mb-3"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                ¿Listo para tu proyecto en Valencia?
              </h3>
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
      </div>
    </section>
  );
} 