
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import GetStarted from '../components/GetStarted';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import LoyaltyProgram from '../components/LoyaltyProgram';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Hero />
      <Features />
      <GetStarted />
      <HowItWorks />
      <Benefits />
      <LoyaltyProgram />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
