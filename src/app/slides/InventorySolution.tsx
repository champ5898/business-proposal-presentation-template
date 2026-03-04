import { SlideLayout } from '../components/SlideLayout';
import { Package, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const demandData = [
  { week: 'W1', actual: 120, predicted: 125 },
  { week: 'W2', actual: 145, predicted: 142 },
  { week: 'W3', actual: 165, predicted: 168 },
  { week: 'W4', actual: 190, predicted: 188 },
  { week: 'W5', actual: 210, predicted: 215 },
  { week: 'W6', actual: 185, predicted: 182 },
];

export function InventorySolution() {
  return (
    <SlideLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block px-4 py-1 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-semibold text-sm">AI Solution #1</span>
          </div>
          <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-4">
            Inventory & Demand Forecasting
          </h1>
          <p className="text-xl text-gray-600 font-open-sans">
            AI-powered predictive analytics to optimize stock levels and prevent revenue loss
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Before/After */}
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-red-900 mb-2">Before: Manual Process</h3>
                  <ul className="space-y-2 text-gray-700 font-open-sans text-sm">
                    <li>• Frequent stock-outs during peak demand</li>
                    <li>• Excess inventory tying up ₹5-10L+ capital</li>
                    <li>• 15-20% revenue loss from unavailable items</li>
                    <li>• Time-consuming manual forecasting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-green-900 mb-2">After: AI-Powered</h3>
                  <ul className="space-y-2 text-gray-700 font-open-sans text-sm">
                    <li>• Automated demand predictions (95% accuracy)</li>
                    <li>• Optimal stock levels maintained automatically</li>
                    <li>• <strong>40% reduction in stock-outs</strong></li>
                    <li>• <strong>25% lower inventory holding costs</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Predictive Chart */}
          <div className="bg-white rounded-xl shadow-xl p-6">
            <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-4">
              Demand Prediction Accuracy
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={demandData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="week" 
                    tick={{ fill: '#6b7280', fontFamily: 'Open Sans', fontSize: 12 }}
                  />
                  <YAxis 
                    tick={{ fill: '#6b7280', fontFamily: 'Open Sans', fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: '1px solid #e5e7eb',
                      fontFamily: 'Open Sans'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ fontFamily: 'Open Sans', fontSize: 12 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    name="Actual Sales"
                    dot={{ fill: '#3b82f6', r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    name="AI Prediction"
                    dot={{ fill: '#10b981', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Features & Benefits */}
        <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-10 h-10" />
            <h2 className="text-3xl font-montserrat font-bold">Key Features</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <TrendingUp className="w-8 h-8 mb-3" />
              <h4 className="font-montserrat font-bold text-lg mb-2">Smart Forecasting</h4>
              <p className="text-sm opacity-90 font-open-sans">
                ML models analyze historical sales, seasonality, trends, and external factors
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <ArrowRight className="w-8 h-8 mb-3" />
              <h4 className="font-montserrat font-bold text-lg mb-2">Auto Reordering</h4>
              <p className="text-sm opacity-90 font-open-sans">
                Automatic purchase orders when stock reaches optimal reorder points
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <CheckCircle2 className="w-8 h-8 mb-3" />
              <h4 className="font-montserrat font-bold text-lg mb-2">Integration Ready</h4>
              <p className="text-sm opacity-90 font-open-sans">
                Works with Zoho Inventory, QuickBooks, or custom ERP systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
