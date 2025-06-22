
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-24 px-4 relative bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 rounded-3xl p-12 border border-gray-200 text-center relative overflow-hidden shadow-lg">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-purple-100/20" />
          
          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-200/40 rounded-full animate-float" />
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-purple-200/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-purple-200">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-purple-600 font-semibold">Start Today</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Start Accepting Payments
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                In Any Currency
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of merchants who are already experiencing the future of payments. 
              Create your first payment link in under a minute.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Create Payment Link
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">For Solopreneurs</h3>
            <p className="text-gray-600 mb-6">
              Create payment links, send invoices, and get paid instantly in any currency.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 shadow-sm">
              Start as Solopreneur
            </Button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">For Businesses</h3>
            <p className="text-gray-600 mb-6">
              Integrate PYRA into your platform and offer seamless global payments to customers.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2 shadow-sm">
              Explore Business Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
