'use client';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
    </main>
  );
}
