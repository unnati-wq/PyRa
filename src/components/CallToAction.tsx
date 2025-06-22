
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-purple-900/50 rounded-3xl p-12 border border-white/20 text-center relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 animate-pulse" />
          
          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400/20 rounded-full animate-float" />
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-purple-600/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-semibold">Early Access</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Enter the
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Era of Programmable Payments?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing the future of payments. 
              Gasless, walletless, and borderless.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">For Solopreneurs</h3>
            <p className="text-gray-300 mb-6">
              Create payment links, send invoices, and get paid instantly in any currency.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2">
              Create Invoice Link
            </Button>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">For Businesses</h3>
            <p className="text-gray-300 mb-6">
              Integrate PYRA into your platform and offer seamless global payments.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2">
              Explore API
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
