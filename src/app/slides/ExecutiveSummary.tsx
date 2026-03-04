import { SlideLayout } from "../components/SlideLayout";
import { TrendingUp, DollarSign, Zap, Target } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const roiData = [
  { month: "Month 1-2", roi: 5, color: "#3b82f6" },
  { month: "Month 3-4", roi: 15, color: "#10b981" },
  { month: "Month 5-6", roi: 35, color: "#22c55e" },
  { month: "Month 7-12", roi: 120, color: "#16a34a" },
];

export function ExecutiveSummary() {
  return (
    <SlideLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-700 font-semibold text-sm">
              Executive Summary
            </span>
          </div>
          <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-4">
            Transform Your E-commerce Business
          </h1>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl">
            Leverage AI and modern technology to increase revenue, reduce costs,
            and scale efficiently
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
            <TrendingUp className="w-12 h-12 mb-4 opacity-90" />
            <div className="text-5xl font-bold mb-2">30%</div>
            <div className="text-lg font-open-sans">Sales Increase</div>
            <div className="text-sm opacity-90 mt-2">
              via AI-powered personalization & recommendations
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
            <DollarSign className="w-12 h-12 mb-4 opacity-90" />
            <div className="text-5xl font-bold mb-2">25%</div>
            <div className="text-lg font-open-sans">Cost Savings</div>
            <div className="text-sm opacity-90 mt-2">
              through intelligent inventory management & automation
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
            <Zap className="w-12 h-12 mb-4 opacity-90" />
            <div className="text-5xl font-bold mb-2">40%</div>
            <div className="text-lg font-open-sans">Faster Operations</div>
            <div className="text-sm opacity-90 mt-2">
              with automated workflows & dynamic pricing
            </div>
          </div>
        </div>

        {/* ROI Projection Chart */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-montserrat font-bold text-gray-900">
              Projected ROI Growth
            </h2>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#6b7280", fontFamily: "Open Sans" }}
                />
                <YAxis
                  tick={{ fill: "#6b7280", fontFamily: "Open Sans" }}
                  label={{
                    value: "ROI %",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: "#6b7280" },
                  }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    fontFamily: "Open Sans",
                  }}
                />
                <Bar dataKey="roi" radius={[8, 8, 0, 0]}>
                  {roiData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-600 font-open-sans">
              Expected break-even in{" "}
              <span className="font-bold text-green-600">3-4 months</span>, with{" "}
              <span className="font-bold text-green-600">120%+ ROI</span> by end
              of year
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
