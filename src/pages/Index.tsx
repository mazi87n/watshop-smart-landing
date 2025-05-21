
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import FeaturesSection from '@/components/FeaturesSection';
import OfferSection from '@/components/OfferSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import FloatingCta from '@/components/FloatingCta';

const Index = () => {
  return (
    <div className="min-h-screen font-tajawal">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <OfferSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <FloatingCta />
    </div>
  );
};

export default Index;
