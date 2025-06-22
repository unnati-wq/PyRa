
import React from 'react';
import { Gift, Star, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LoyaltyProgram = () => {
  const tiers = [
    {
      name: "Starter",
      threshold: "$100",
      points: "1 point per $10",
      benefits: ["Basic rewards", "1% cashback", "Email support"],
      color: "from-gray-500 to-gray-600",
      icon: Star
    },
    {
      name: "Pro",
      threshold: "$1,000",
      points: "1.5 points per $10",
      benefits: ["Enhanced rewards", "2% cashback", "Priority support", "Free invoice templates"],
      color: "from-purple-500 to-purple-600",
      icon: TrendingUp
    },
    {
      name: "Elite",
      threshold: "$10,000",
      points: "2 points per $10",
      benefits: ["Premium rewards", "3% cashback", "Dedicated support", "Custom integrations", "API access"],
      color: "from-yellow-500 to-yellow-600",
      icon: Award
    }
  ];

  const rewards = [
    { points: 100, value: "$10", description: "App subscriptions, services" },
    { points: 500, value: "$50", description: "Premium features, tools" },
    { points: 1000, value: "$100", description: "Cash rewards, gift cards" }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-6 py-2 mb-6">
            <Gift className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Loyalty Program</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Earn While You
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Transact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get rewarded for every payment. The more you use PYRA, the more you earn.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Make Payments</h4>
              <p className="text-gray-300">Every transaction earns you points automatically</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Accumulate Points</h4>
              <p className="text-gray-300">Points add up based on your transaction volume</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Redeem Rewards</h4>
              <p className="text-gray-300">Use points for subscriptions, services, or cash</p>
            </div>
          </div>
        </div>

        {/* Loyalty Tiers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Loyalty Tiers</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mb-4`}>
                    <tier.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-gray-300">
                    Reach {tier.threshold} in transactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{tier.points}</div>
                    <div className="text-sm text-gray-400">Points earning rate</div>
                  </div>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reward Examples */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-3xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Reward Examples</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {rewards.map((reward, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 rounded-2xl p-6 mb-4">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{reward.points}</div>
                  <div className="text-sm text-gray-400">Points</div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{reward.value}</div>
                <div className="text-gray-300">{reward.description}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 p-6 bg-white/5 rounded-2xl">
            <p className="text-gray-300 text-lg">
              <span className="text-purple-400 font-semibold">Example:</span> Complete $1,000 in transactions → Earn 100 points → Get $10 in rewards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;
