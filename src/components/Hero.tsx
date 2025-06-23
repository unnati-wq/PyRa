
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-medium text-black mb-2">
            PyRa
          </h1>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-normal text-black mb-8 leading-tight">
          Accept payments in any
          <br />
          currency
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light">
          Get paid in PYUSD. Easy payments with card or Apple Pay.
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <Button 
            size="lg" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-normal rounded-lg transition-all duration-300"
          >
            Create Payment Link
          </Button>
        </div>

        {/* Bottom Text */}
        <p className="text-lg text-gray-500 font-light">
          Convert to your local currency
        </p>
      </div>
    </section>
  );
};

export default Hero;
