'use client';

import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import CraneScrollSection from './components/CraneScrollSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <CraneScrollSection />
      <ContactSection />
    </main>
  );
}
