import { SlideLayout } from '../components/SlideLayout';
import { Mail, Search, Target, TrendingUp, Users, Sparkles } from 'lucide-react';

export function MarketingAutomation() {
  return (
    <SlideLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block px-4 py-1 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-700 font-semibold text-sm">AI Solution #4 & #5</span>
          </div>
          <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-4">
            Marketing Automation & Analytics
          </h1>
          <p className="text-xl text-gray-600 font-open-sans">
            Personalized campaigns, SEO optimization, fraud detection, and real-time insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Marketing Automation */}
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-10 h-10" />
              <h2 className="text-3xl font-montserrat font-bold">Marketing Automation</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5" />
                  <h4 className="font-montserrat font-bold">Personalized Email Campaigns</h4>
                </div>
                <ul className="text-sm space-y-1 font-open-sans opacity-90 ml-7">
                  <li>• Automated welcome series for new customers</li>
                  <li>• Abandoned cart recovery emails (15-20% recovery rate)</li>
                  <li>• Product recommendations based on browsing history</li>
                  <li>• Win-back campaigns for inactive customers</li>
                </ul>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-5 h-5" />
                  <h4 className="font-montserrat font-bold">SEO & Content Optimization</h4>
                </div>
                <ul className="text-sm space-y-1 font-open-sans opacity-90 ml-7">
                  <li>• AI-powered keyword research & product descriptions</li>
                  <li>• Automated meta tags and schema markup</li>
                  <li>• Content generation for blog posts & FAQs</li>
                  <li>• Local SEO optimization for Indian markets</li>
                </ul>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <h4 className="font-montserrat font-bold">Customer Segmentation</h4>
                </div>
                <ul className="text-sm space-y-1 font-open-sans opacity-90 ml-7">
                  <li>• Behavioral segmentation (VIP, regular, at-risk)</li>
                  <li>• RFM analysis (Recency, Frequency, Monetary)</li>
                  <li>• Automated segment-specific campaigns</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/30 pt-4">
              <div className="text-sm font-open-sans">
                <strong>Impact:</strong> 3x email engagement, 25% higher open rates, 40% more conversions
              </div>
            </div>
          </div>

          {/* Fraud Detection & Analytics */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-10 h-10" />
                <h2 className="text-2xl font-montserrat font-bold">Fraud Detection</h2>
              </div>

              <ul className="space-y-3 text-sm font-open-sans">
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Real-time transaction monitoring for suspicious patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>AI-based risk scoring for orders and customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Automated blocking of high-risk transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Save 2-3% revenue lost to fraud annually</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-10 h-10" />
                <h2 className="text-2xl font-montserrat font-bold">Real-Time Analytics</h2>
              </div>

              <ul className="space-y-3 text-sm font-open-sans">
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Live dashboards for sales, traffic, conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Predictive analytics for revenue forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Customer lifetime value (CLV) predictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Automated reports & alerts for key metrics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Combined Impact */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-6 text-center">
            Marketing & Analytics Impact
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">50%</div>
              <div className="font-open-sans text-sm text-gray-700">Lower CAC</div>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹1-2L</div>
              <div className="font-open-sans text-sm text-gray-700">Fraud Prevention Savings</div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">3x</div>
              <div className="font-open-sans text-sm text-gray-700">Faster Decision Making</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
