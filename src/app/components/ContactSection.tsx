"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useContactInfo, useSectionData, useFormConfig } from '../../hooks/useSiteData';

interface EmergencyInfo {
  title: string;
  description: string;
}

interface FooterContent {
  company_description: string;
  services_list: string[];
  company_links: string[];
}

interface SectionContent {
  emergency_info?: {
    title?: string;
    description?: string;
  };
  footer_content?: {
    company_description?: string;
    services_list?: string[];
    company_links?: string[];
  };
}

export default function ContactSection() {
  // Hooks para datos dinámicos
  const { contactInfo, loading: contactLoading } = useContactInfo();
  const { sectionData, loading: sectionLoading } = useSectionData('contact');
  const { formConfig, loading: formLoading } = useFormConfig('contact');

  // Fallback data
  const fallbackContactInfo = [
    {
      id: '1',
      contact_type: 'phone',
      title: 'Teléfono',
      value: '+34 96 123 45 67',
      description: 'Línea directa de 8:00 a 18:00',
      icon_name: 'Phone',
      is_primary: true,
      is_active: true,
      contact_order: 1
    },
    {
      id: '2',
      contact_type: 'email',
      title: 'Email',
      value: 'info@plataformaslaterra.es',
      description: 'Respuesta en 2 horas',
      icon_name: 'Mail',
      is_primary: true,
      is_active: true,
      contact_order: 2
    },
    {
      id: '3',
      contact_type: 'address',
      title: 'Oficina Central',
      value: 'Valencia, España',
      description: 'Servicio en toda la Comunidad Valenciana',
      icon_name: 'MapPin',
      is_primary: false,
      is_active: true,
      contact_order: 3
    },
    {
      id: '4',
      contact_type: 'hours',
      title: 'Horarios',
      value: '8:00 - 18:00',
      description: 'Lunes a Viernes',
      icon_name: 'Clock',
      is_primary: false,
      is_active: true,
      contact_order: 4
    }
  ];

  // Usar datos de la base de datos o fallback
  const contactData = contactInfo.length > 0 ? contactInfo : fallbackContactInfo;
  const backgroundColor = sectionData?.background_color || 'from-blue-900 to-slate-900';
  const sectionTitle = sectionData?.title || 'Contáctanos Hoy';
  const sectionDescription = sectionData?.description || 'Estamos listos para ayudarte con tu proyecto. Nuestro equipo de expertos te brindará la mejor solución para tus necesidades de traslado vertical.';
  const emergencyInfo: EmergencyInfo = {
    title: (sectionData?.content as SectionContent)?.emergency_info?.title || 'Horario de Trabajo',
    description: (sectionData?.content as SectionContent)?.emergency_info?.description || 'Nuestro equipo está disponible de lunes a viernes de 8:00 a 18:00 para atender todas tus necesidades.'
  };
  const footerContent: FooterContent = {
    company_description: (sectionData?.content as SectionContent)?.footer_content?.company_description || 'Líderes en servicios de traslado vertical en Valencia con más de 15 años de experiencia y tecnología de vanguardia.',
    services_list: (sectionData?.content as SectionContent)?.footer_content?.services_list || ['Edificios Residenciales', 'Casas Particulares', 'Electrodomésticos', 'Muebles de Oficina'],
    company_links: (sectionData?.content as SectionContent)?.footer_content?.company_links || ['Sobre Nosotros', 'Nuestro Equipo', 'Certificaciones', 'Seguros']
  };

  if (sectionLoading || contactLoading || formLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-white text-xl">Cargando información de contacto...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className={`py-20 bg-gradient-to-b ${backgroundColor} relative overflow-hidden`}>
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
          
          {/* Emergency Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-500/30 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-3">
              {emergencyInfo.title}
            </h3>
            <p className="text-gray-300 text-sm">
              {emergencyInfo.description}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              {contactData.map((contact, index) => {
                const IconComponent = 
                  contact.icon_name === 'Phone' ? Phone :
                  contact.icon_name === 'Mail' ? Mail :
                  contact.icon_name === 'MapPin' ? MapPin :
                  contact.icon_name === 'Clock' ? Clock : Phone;

                return (
                  <motion.div
                    key={contact.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      contact.is_primary 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{contact.title}</h4>
                      <p className={`font-medium mb-1 ${
                        contact.is_primary ? 'text-orange-400' : 'text-blue-400'
                      }`}>
                        {contact.value}
                      </p>
                      <p className="text-gray-400 text-sm">{contact.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="https://wa.me/34961234567?text=Hola,%20necesito%20información%20sobre%20sus%20servicios%20de%20grúas%20elevadoras"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 p-[2px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
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
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                      placeholder="Describe tu proyecto o necesidades..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg text-lg transition-all duration-300 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Solicitud
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-6xl mx-auto p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Company Description */}
              <div className="text-left">
                <h4 className="text-xl font-bold text-white mb-4">Sobre Nosotros</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {footerContent.company_description}
                </p>
              </div>
              
              {/* Services List */}
              <div className="text-left">
                <h4 className="text-xl font-bold text-white mb-4">Nuestros Servicios</h4>
                <ul className="space-y-2">
                  {footerContent.services_list?.map((service, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Company Links */}
              <div className="text-left">
                <h4 className="text-xl font-bold text-white mb-4">Enlaces Útiles</h4>
                <ul className="space-y-2">
                  {footerContent.company_links?.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 text-sm hover:text-orange-400 transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 