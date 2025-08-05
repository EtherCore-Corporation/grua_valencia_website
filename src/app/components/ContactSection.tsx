'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+34 96 123 45 67",
    description: "Línea directa 24/7"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@plataformaslaterra.es",
    description: "Respuesta en 2 horas"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Valencia, España",
    description: "Servicio en toda la Comunidad Valenciana"
  },
  {
    icon: Clock,
    title: "Horarios",
    value: "24/7 Disponible",
    description: "Emergencias incluidas"
  }
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
            Contáctanos <span className="text-orange-400">Hoy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos listos para ayudarte con tu proyecto. Nuestro equipo de expertos 
            te brindará la mejor solución para tus necesidades de traslado vertical.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-orange-400 font-medium mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-500/30 rounded-2xl p-8"
            >
              <h4 className="text-xl font-bold text-white mb-4">🚨 Emergencias 24/7</h4>
              <p className="text-gray-300 mb-4">
                Para situaciones urgentes, nuestro equipo está disponible las 24 horas del día.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Llamada de Emergencia
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Solicitar Cotización</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Tipo de Servicio
                </label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors">
                  <option value="">Selecciona un servicio</option>
                  <option value="residencial">Edificio Residencial</option>
                  <option value="casa">Casa Particular</option>
                  <option value="electrodomesticos">Electrodomésticos</option>
                  <option value="oficina">Muebles de Oficina</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Descripción del Proyecto
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Describe tu proyecto, altura del edificio, tipo de carga, etc."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Solicitud
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12"
        >
                     <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
             <div>
               <h4 className="text-xl font-bold text-white mb-4">Plataformas La Terra</h4>
               <p className="text-gray-400 leading-relaxed">
                 Líderes en servicios de traslado vertical en Valencia con más de 15 años de experiencia 
                 y tecnología de vanguardia.
               </p>
             </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Servicios</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Edificios Residenciales</li>
                <li>Casas Particulares</li>
                <li>Electrodomésticos</li>
                <li>Muebles de Oficina</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Empresa</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nosotros</li>
                <li>Nuestro Equipo</li>
                <li>Certificaciones</li>
                <li>Seguros</li>
              </ul>
            </div>
            
                         <div>
               <h5 className="text-lg font-semibold text-white mb-4">Contacto</h5>
               <ul className="space-y-2 text-gray-400">
                 <li>+34 96 123 45 67</li>
                 <li>info@plataformaslaterra.es</li>
                 <li>Valencia, España</li>
                 <li>24/7 Disponible</li>
               </ul>
             </div>
          </div>
          
                     <div className="mt-12 pt-8 border-t border-white/10 text-center">
             <p className="text-gray-400">
               © 2024 Plataformas La Terra. Todos los derechos reservados. 
               Servicio profesional de traslado vertical en Valencia.
             </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
} 