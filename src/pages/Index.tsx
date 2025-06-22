
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import LoyaltyProgram from '../components/LoyaltyProgram';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <LoyaltyProgram />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
