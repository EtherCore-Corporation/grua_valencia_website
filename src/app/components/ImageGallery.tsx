"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageItem {
  id: string;
  src: string;
  alt: string;
  title: string;
}

const images: ImageItem[] = [
  {
    id: '1',
    src: 'https://nmkpirdalwowkmwpiitf.supabase.co/storage/v1/object/sign/videos/Imagen%20platadorma.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTc2OWU0MS04YmFmLTQxOWUtODA5Zi02ODg5YmIzNjUxZjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvSW1hZ2VuIHBsYXRhZG9ybWEuanBnIiwiaWF0IjoxNzU1NjA3MDI2LCJleHAiOjE3ODcxNDMwMjZ9.ODAmZojYoR3QGp61TwFB8sVJ4c0YD4RW1Yk5luRSBj4',
    alt: 'Imagen Plataforma',
    title: 'Plataforma de Trabajo'
  },
  {
    id: '2',
    src: 'https://nmkpirdalwowkmwpiitf.supabase.co/storage/v1/object/sign/videos/Organizando%20Cjas.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTc2OWU0MS04YmFmLTQxOWUtODA5Zi02ODg5YmIzNjUxZjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvT3JnYW5pemFuZG8gQ2phcy5qcGVnIiwiaWF0IjoxNzU1NjA3MTU2LCJleHAiOjE5MTMyODcxNTZ9.8ZAmjmg7v9ppDiBW_w3QCA7HWeiJY7idJ9wzC6ohc1E',
    alt: 'Organizando Cajas',
    title: 'Organización de Carga'
  },
  {
    id: '3',
    src: 'https://nmkpirdalwowkmwpiitf.supabase.co/storage/v1/object/sign/videos/470757481_596493032974025_2561398504859135118_n.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTc2OWU0MS04YmFmLTQxOWUtODA5Zi02ODg5YmIzNjUxZjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvNDcwNzU3NDgxXzU5NjQ5MzAzMjk3NDAyNV8yNTYxMzk4NTA0ODU5MTM1MTE4X24uanBnIiwiaWF0IjoxNzU1NjA3MTE5LCJleHAiOjE5MTMyODcxMTl9.AD5FNVxI4K92TwAUdAZbektb4L5edQF28tc52_OWugw',
    alt: 'Trabajo en Altura',
    title: 'Servicios en Altura'
  }
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: ImageItem, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Trabajos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre la calidad y profesionalidad de nuestros servicios a través de nuestra galería de trabajos realizados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="relative">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button
                      onClick={prevImage}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
