
import React from 'react';
import { CreditCard, FileText, Gift, Globe, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Multi-Currency Payments",
      description: "Send money in one currency, recipient receives it in their preferred currency. Seamless conversion at the best rates.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "One-Time Payment Links",
      description: "Generate instant invoice links for solopreneurs and businesses. Send to clients and get paid immediately.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Gift,
      title: "Loyalty Rewards",
      description: "Earn points with every transaction. Redeem for app subscriptions, services, or cash rewards.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Gasless Transactions",
      description: "No blockchain fees, no gas costs. Pure, efficient payments that don't drain your wallet.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: CreditCard,
      title: "Walletless Experience",
      description: "No complex wallet setup. Just your email and payment method. Simple as sending an email.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption. Your transactions are always protected.",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Modern Payments</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to send, receive, and manage payments in the digital age
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
