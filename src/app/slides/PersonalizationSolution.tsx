import { SlideLayout } from '../components/SlideLayout';
import { ShoppingCart, Target, TrendingUp, Sparkles, DollarSign, Users } from 'lucide-react';

export function PersonalizationSolution() {
  return (
    <SlideLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block px-4 py-1 bg-purple-100 rounded-full mb-4">
            <span className="text-purple-700 font-semibold text-sm">AI Solution #2</span>
          </div>
          <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-4">
            Personalized Recommendations & Dynamic Pricing
          </h1>
          <p className="text-xl text-gray-600 font-open-sans">
            ML-powered engines to boost conversions through intelligent product suggestions and pricing
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Personalized Recommendations */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-12 h-12" />
              <h2 className="text-3xl font-montserrat font-bold">Smart Recommendations</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-montserrat font-bold mb-2">Collaborative Filtering</h4>
                <p className="text-sm opacity-90 font-open-sans">
                  "Customers who bought X also bought Y" - analyzing purchase patterns
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-montserrat font-bold mb-2">Content-Based Filtering</h4>
                <p className="text-sm opacity-90 font-open-sans">
                  Recommend similar products based on attributes and user preferences
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-montserrat font-bold mb-2">Behavioral Targeting</h4>
                <p className="text-sm opacity-90 font-open-sans">
                  Track browsing history, cart abandonment, wish-lists for personalization
                </p>
              </div>
            </div>

            <div className="border-t border-white/30 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-open-sans">Expected Impact:</span>
                <span className="text-2xl font-bold">+30% Conversion</span>
              </div>
            </div>
          </div>

          {/* Dynamic Pricing */}
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-12 h-12" />
              <h2 className="text-3xl font-montserrat font-bold">Dynamic Pricing</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-montserrat font-bold mb-2">Competitor Analysis</h4>
                <p className="text-sm opacity-90 font-open-sans">
                  Real-time tracking of competitor prices to stay competitive
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-montserrat font-bold mb-2">Demand-Based Pricing</h4>
                <p className="text-sm opacity-90 font-open-sans">
                  Adjust prices based on demand, inventory levels, and market conditions
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-montserrat font-bold mb-2">Customer Segmentation</h4>
                <p className="text-sm opacity-90 font-open-sans">
                  Personalized pricing strategies for different customer segments
                </p>
              </div>
            </div>

            <div className="border-t border-white/30 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-open-sans">Expected Impact:</span>
                <span className="text-2xl font-bold">+15% Margin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Showcase */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-purple-600" />
            <h2 className="text-3xl font-montserrat font-bold text-gray-900">
              Measurable Business Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <ShoppingCart className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-purple-600 mb-2">₹8-12L</div>
              <div className="font-open-sans text-gray-700">Additional Annual Revenue</div>
              <div className="text-sm text-gray-500 mt-2">For ₹50L GMV business</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-blue-600 mb-2">2.5x</div>
              <div className="font-open-sans text-gray-700">Average Order Value</div>
              <div className="text-sm text-gray-500 mt-2">Through upsell/cross-sell</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="font-open-sans text-gray-700">Higher Retention</div>
              <div className="text-sm text-gray-500 mt-2">Personalized experience</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
