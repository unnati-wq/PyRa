
import React from 'react';
import { Clock, DollarSign, Globe2, Shield, Zap, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Transfers",
      description: "Money moves at the speed of light. No waiting days for international transfers.",
      stat: "< 1 min",
      statLabel: "Average Transfer Time"
    },
    {
      icon: DollarSign,
      title: "Zero Hidden Fees",
      description: "What you see is what you pay. No surprise charges, no hidden costs.",
      stat: "$0",
      statLabel: "Hidden Fees"
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Send money anywhere in the world with support for 150+ currencies.",
      stat: "150+",
      statLabel: "Supported Currencies"
    }
  ];

  return (
    <section className="py-24 px-4 relative bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> PYRA?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for the future of finance with today's simplicity
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{benefit.description}</p>
              
              <div className="border-t border-white/20 pt-6">
                <div className="text-3xl font-bold text-white mb-1">{benefit.stat}</div>
                <div className="text-purple-300 text-sm font-medium">{benefit.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white text-center mb-8">PYRA vs Traditional Methods</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-300 mb-4">Feature</div>
              <div className="space-y-3">
                <div className="text-white">Setup Time</div>
                <div className="text-white">Transfer Speed</div>
                <div className="text-white">Fees</div>
                <div className="text-white">Currency Support</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-semibold text-purple-400 mb-4">PYRA</div>
              <div className="space-y-3">
                <div className="text-green-400 font-medium">30 seconds</div>
                <div className="text-green-400 font-medium">Instant</div>
                <div className="text-green-400 font-medium">Transparent</div>
                <div className="text-green-400 font-medium">150+ currencies</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-400 mb-4">Banks</div>
              <div className="space-y-3">
                <div className="text-red-400">Days</div>
                <div className="text-red-400">3-5 days</div>
                <div className="text-red-400">High & Hidden</div>
                <div className="text-red-400">Limited</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-400 mb-4">Crypto</div>
              <div className="space-y-3">
                <div className="text-red-400">Complex</div>
                <div className="text-yellow-400">Variable</div>
                <div className="text-red-400">Gas fees</div>
                <div className="text-yellow-400">Volatile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
