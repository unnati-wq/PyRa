
import React from 'react';
import { ArrowRight, Zap, Globe, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-200/40 rounded-full animate-float" />
      <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-purple-200/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-indigo-200/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            PYRA
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium tracking-wider">
            Era of Programmable Payments
          </p>
          <p className="text-lg text-gray-500 font-light mt-2">
            Powered by PYUSD
          </p>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Accept Payments Globally
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            In Any Currency
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Create payment links instantly. Accept payments in any currency. 
          Gasless, walletless, and borderless for merchants worldwide.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200 shadow-sm">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-700 font-medium">Gasless</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-200 shadow-sm">
            <CreditCard className="w-5 h-5 text-purple-500" />
            <span className="text-gray-700 font-medium">Walletless</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-indigo-200 shadow-sm">
            <Globe className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700 font-medium">Any Currency</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Create Payment Link
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">150+</div>
            <div className="text-gray-500">Supported Currencies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">$0</div>
            <div className="text-gray-500">Gas Fees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">24/7</div>
            <div className="text-gray-500">Global Payments</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
