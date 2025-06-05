
import React from 'react';
import CryptrixNavbar from '@/components/CryptrixNavbar';
import HeroSection from '@/components/HeroSection';
import StatsCounter from '@/components/StatsCounter';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TrustSection from '@/components/TrustSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      <CryptrixNavbar />
      <main>
        <HeroSection />
        <StatsCounter />
        <ServicesSection />
        <TestimonialsSection />
        <TrustSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
