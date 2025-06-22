
import React from 'react';
import { Link, FileText, Gift, Globe, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Link,
      title: "Instant Payment Links",
      description: "Generate payment links in seconds. Share via email, SMS, or social media. Get paid immediately.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Accept payments in one currency, customer pays in their preferred currency. Automatic conversion.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: FileText,
      title: "Smart Invoicing",
      description: "Create professional invoices with payment links. Perfect for freelancers and small businesses.",
      gradient: "from-indigo-400 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Zero Gas Fees",
      description: "No blockchain fees, no hidden costs. Keep 100% of your earnings with transparent pricing.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption. Your transactions are always protected.",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: Gift,
      title: "Loyalty Rewards",
      description: "Earn points with every transaction. Redeem for subscriptions, services, or cash rewards.",
      gradient: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section className="py-24 px-4 relative bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Accept Payments</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed for modern merchants and solopreneurs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-800 text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
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
