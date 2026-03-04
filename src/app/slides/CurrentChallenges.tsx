import { SlideLayout } from '../components/SlideLayout';
import { 
  Package, 
  TrendingDown, 
  MessageSquare, 
  Search, 
  AlertCircle,
  Clock,
  Users,
  Shield
} from 'lucide-react';

const challenges = [
  {
    icon: Package,
    title: 'Manual Inventory Management',
    description: 'Stock-outs and overstocking lead to lost sales and tied-up capital',
    impact: 'Revenue Loss: 15-20%',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: TrendingDown,
    title: 'Low Conversion Rates',
    description: 'Generic product displays fail to engage customers effectively',
    impact: 'Avg. Conversion: <2%',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: MessageSquare,
    title: 'Poor Customer Support',
    description: 'Slow response times and limited availability frustrate customers',
    impact: 'Support Cost: High',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: Search,
    title: 'Ineffective Marketing',
    description: 'Manual campaigns without personalization yield poor results',
    impact: 'CAC: Very High',
    color: 'from-yellow-500 to-lime-500'
  },
  {
    icon: Clock,
    title: 'Slow Decision Making',
    description: 'Lack of real-time analytics delays critical business decisions',
    impact: 'Opportunity Cost',
    color: 'from-lime-500 to-green-500'
  },
  {
    icon: Users,
    title: 'Poor Customer Retention',
    description: 'No personalized engagement leads to one-time buyers',
    impact: 'LTV: Low',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Fraud & Security Issues',
    description: 'Manual fraud detection misses sophisticated attacks',
    impact: 'Fraud Loss: 2-3%',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: AlertCircle,
    title: 'Pricing Challenges',
    description: 'Static pricing cannot respond to market dynamics',
    impact: 'Margin Loss',
    color: 'from-teal-500 to-cyan-500'
  },
];

export function CurrentChallenges() {
  return (
    <SlideLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1 bg-red-100 rounded-full mb-4">
            <span className="text-red-700 font-semibold text-sm">Problem Analysis</span>
          </div>
          <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-4">
            Current E-commerce Challenges
          </h1>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl">
            Common pain points that limit growth and profitability in traditional e-commerce operations
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${challenge.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-3">
                  {challenge.title}
                </h3>
                
                <p className="text-sm text-gray-600 font-open-sans mb-4 leading-relaxed">
                  {challenge.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="inline-block px-3 py-1 bg-red-50 rounded-full">
                    <span className="text-xs font-semibold text-red-600">
                      {challenge.impact}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-montserrat font-bold mb-3">
            The Solution: AI-Powered Optimization
          </h3>
          <p className="text-lg font-open-sans opacity-95">
            Our comprehensive tech stack addresses each of these challenges systematically
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
