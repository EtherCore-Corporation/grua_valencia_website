'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react';

const serviceAreas = [
  "Valencia Centro",
  "Paterna",
  "Torrent",
  "Mislata",
  "Alaquàs",
  "Quart de Poblet",
  "Burjassot",
  "Godella",
  "Rocafort",
  "Moncada",
  "Alfara del Patriarca",
  "Vinalesa",
  "Foios",
  "Meliana",
  "Almàssera",
  "Tavernes Blanques",
  "Alboraya",
  "Massamagrell",
  "Puçol",
  "Sagunto"
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Oficina Central",
    value: "Valencia, España",
    description: "Servicio en toda la Comunidad Valenciana"
  },
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
    icon: Clock,
    title: "Horarios",
    value: "24/7 Disponible",
    description: "Emergencias incluidas"
  }
];

export default function LocationSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900 relative overflow-hidden">
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
            Servicio en <span className="text-orange-400">Valencia</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cubrimos toda la Comunidad Valenciana con nuestro servicio profesional de grúas elevadoras. 
            Llegamos a cualquier punto en menos de 60 minutos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-orange-400" />
                Nuestra Cobertura
              </h3>
              
              {/* Real Valencia Map */}
              <div className="relative bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl p-8 mb-6 border border-white/10 overflow-hidden">
                {/* Map background positioned behind text */}
                <div className="absolute inset-0 z-0">
                  <div 
                    className="w-full h-full bg-cover bg-center opacity-30"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMjM0NTY3O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0NTY3ODk7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz4KICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmY2YjNhIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuMyIgLz4KICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjZiM2EiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41IiAvPgogIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjIwMCIgcj0iNjAiIGZpbGw9IiNmZjZiM2EiIG9wYWNpdHk9IjAuNyIgLz4KICA8dGV4dCB4PSIzMDAiIHk9IjIxMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VmFsZW5jaWE8L3RleHQ+Cjwvc3ZnPgo=')`
                    }}
                  ></div>
                </div>
                
                {/* Text overlay */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <MapPin className="w-8 h-8 text-orange-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Valencia, España</h4>
                  <p className="text-gray-300 text-sm mb-4">Oficina Central</p>
                  
                  {/* Service Radius */}
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 border-2 border-orange-500/30 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 border-2 border-orange-500/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute inset-8 border-2 border-orange-500/70 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute inset-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-orange-400 text-sm font-medium mt-4">
                    Radio de servicio: 50km
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400 mb-1">60</div>
                  <div className="text-gray-300 text-sm">Minutos máximo</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400 mb-1">20+</div>
                  <div className="text-gray-300 text-sm">Poblaciones</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
              className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-500/30 rounded-2xl p-6"
            >
              <h4 className="text-xl font-bold text-white mb-4">🚨 Emergencias 24/7</h4>
              <p className="text-gray-300 mb-4">
                Para situaciones urgentes, nuestro equipo está disponible las 24 horas del día en toda Valencia.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Llamada de Emergencia
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Zonas de <span className="text-orange-400">Servicio</span>
          </h3>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 