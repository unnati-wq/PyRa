
import React from 'react';
import { UserPlus, Link, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const GetStarted = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up with your email in under 30 seconds. No complex verification required.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Link,
      title: "Generate Payment Link",
      description: "Set your amount, currency, and description. Get a shareable payment link instantly.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Send,
      title: "Share & Get Paid",
      description: "Send the link to your customer via email, SMS, or any platform. They pay, you receive.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-24 px-4 relative bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start accepting payments globally with just three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 mx-auto ${step.bgColor} rounded-full flex items-center justify-center mb-4 relative`}>
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <CardTitle className="text-gray-800 text-xl font-bold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Accept Your First Payment?
              </CardTitle>
              <CardDescription className="text-gray-600 text-lg mb-6">
                Join thousands of merchants already using PYRA for seamless global payments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                Sign Up & Create Payment Link
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No setup fees • Start earning immediately</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
