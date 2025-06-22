
import React from 'react';
import { ArrowRight, Zap, Globe, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-600/20 animate-pulse" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full animate-float" />
      <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-green-500/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            PYRA
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 font-light tracking-wider">
            Era of Programmable Payments
          </p>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Send & Receive Payments
          <br />
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            In Any Currency
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Gasless. Walletless. Borderless. Create invoices, receive payments, and earn loyalty rewards 
          - all powered by the future of programmable payments.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Gasless</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <CreditCard className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">Walletless</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">Any Currency</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
          >
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-400">Supported Currencies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">$0</div>
            <div className="text-gray-400">Gas Fees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Global Payments</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
