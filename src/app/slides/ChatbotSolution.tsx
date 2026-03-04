import { SlideLayout } from '../components/SlideLayout';
import { MessageSquare, Clock, Smartphone, Zap, IndianRupee, CheckCircle } from 'lucide-react';

export function ChatbotSolution() {
  return (
    <SlideLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-700 font-semibold text-sm">AI Solution #3</span>
          </div>
          <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-4">
            AI Customer Support Chatbots
          </h1>
          <p className="text-xl text-gray-600 font-open-sans">
            24/7 automated support via WhatsApp & Telegram for instant customer service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Platform Integration */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-10 h-10 text-green-600" />
              <h2 className="text-2xl font-montserrat font-bold text-gray-900">
                Multi-Platform Support
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-lg mb-1">WhatsApp Business API</h4>
                  <p className="text-sm text-gray-600 font-open-sans">
                    Integrate with WhatsApp Business for seamless customer communication. 
                    90%+ of Indian customers prefer WhatsApp support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-lg mb-1">Telegram Bot</h4>
                  <p className="text-sm text-gray-600 font-open-sans">
                    Fast, lightweight bots for order tracking, FAQs, and product inquiries. 
                    Perfect for tech-savvy customers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-lg mb-1">Website Chat Widget</h4>
                  <p className="text-sm text-gray-600 font-open-sans">
                    Embedded chat on your e-commerce site with AI-powered instant responses 
                    and human handoff when needed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chatbot Capabilities */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-10 h-10" />
              <h2 className="text-2xl font-montserrat font-bold">
                Intelligent Capabilities
              </h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-open-sans text-sm">Order tracking & status updates</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-open-sans text-sm">Product recommendations & search</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-open-sans text-sm">FAQ answers & troubleshooting</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-open-sans text-sm">Return/refund request handling</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-open-sans text-sm">Payment link generation</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-open-sans text-sm">Multilingual support (Hindi, English, etc.)</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-open-sans text-sm">Cart abandonment recovery</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-open-sans text-sm">Promotional campaign broadcasts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-6 text-center">
            Cost Savings & Efficiency
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="font-open-sans text-gray-700">Availability</div>
              <div className="text-xs text-gray-500 mt-1">No holidays</div>
            </div>

            <div className="text-center">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-green-600 mb-2">&lt;30s</div>
              <div className="font-open-sans text-gray-700">Response Time</div>
              <div className="text-xs text-gray-500 mt-1">Instant replies</div>
            </div>

            <div className="text-center">
              <IndianRupee className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
              <div className="font-open-sans text-gray-700">Cost Reduction</div>
              <div className="text-xs text-gray-500 mt-1">vs. human agents</div>
            </div>

            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
              <div className="font-open-sans text-gray-700">Auto-Resolution</div>
              <div className="text-xs text-gray-500 mt-1">Common queries</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
