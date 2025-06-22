
import React from 'react';
import { UserPlus, Send, ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up in Seconds",
      description: "Create your account with just an email. No wallet setup, no complex verification.",
      color: "text-purple-400"
    },
    {
      icon: Send,
      title: "Set Your Currencies",
      description: "Choose what currency you're sending and what currency the recipient should receive.",
      color: "text-blue-400"
    },
    {
      icon: CheckCircle,
      title: "Send & Receive",
      description: "Instant transfers with automatic conversion. Recipients get exactly what they expect.",
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three simple steps to revolutionize your payment experience
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-white text-purple-900 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>

                {/* Arrow (except last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <span className="text-white text-lg">Ready to get started?</span>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Try PYRA Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
