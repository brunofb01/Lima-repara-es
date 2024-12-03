import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Differentials } from './components/Differentials';
import { ServiceAreas } from './components/ServiceAreas';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Differentials />
      <ServiceAreas />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}