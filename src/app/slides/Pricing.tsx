import { SlideLayout } from "../components/SlideLayout";
import { IndianRupee, CheckCircle2, Sparkles, Star, Crown } from "lucide-react";

const packages = [
  {
    name: "Starter",
    icon: Sparkles,
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-200",
    recommended: false,
    setup: "₹1,00,000",
    monthly: "₹20,000",
    description: "Perfect for small e-commerce businesses",
    features: [
      "50,000 Monthly Active Users",
      "500 MB Database Size",
      "AI Chatbot (WhatsApp/Telegram)",
      "Basic inventory forecasting",
      "Email marketing automation",
      "Product recommendations",
      "SEO optimization basics",
      "Monthly analytics reports",
      "2 integration points",
      "Email support",
    ],
  },
  {
    name: "Professional",
    icon: Star,
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-300",
    recommended: true,
    setup: "₹3,00,000",
    monthly: "₹50,000",
    description: "Most popular for growing businesses",
    features: [
      "100,000 Monthly Active Users",
      "4 GB Database Size",
      "Everything in Starter, plus:",
      "Advanced AI demand forecasting",
      "Dynamic pricing engine",
      "Fraud detection system",
      "Advanced customer segmentation",
      "Real-time analytics dashboard",
      "A/B testing automation",
      "5 integration points",
    ],
  },
  {
    name: "Enterprise",
    icon: Crown,
    color: "from-green-500 to-emerald-600",
    borderColor: "border-green-200",
    recommended: false,
    setup: "₹6,00,000",
    monthly: "₹85,000",
    description: "For large-scale operations",
    features: [
      "Everything in Professional, plus:",
      "Custom AI model training",
      "Multi-channel integration",
      "Advanced fraud prevention",
      "Predictive CLV analytics",
      "Custom reporting & BI",
      "Dedicated account manager",
      "Unlimited integrations",
      "On-site training & support",
    ],
  },
];

export function Pricing() {
  return (
    <SlideLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-block px-4 py-1 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-semibold text-sm">
              Investment & Packages
            </span>
          </div>
          <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-4">
            Flexible Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
            Choose the package that fits your business size and goals. All
            prices in Indian Rupees (₹)
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {packages.map((pkg, idx) => {
            const PackageIcon = pkg.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl shadow-xl border-2 ${pkg.borderColor} overflow-hidden relative ${
                  pkg.recommended
                    ? "ring-4 ring-purple-200 lg:scale-105 lg:z-10"
                    : ""
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    RECOMMENDED
                  </div>
                )}

                <div
                  className={`bg-gradient-to-br ${pkg.color} p-8 text-white`}
                >
                  <PackageIcon className="w-12 h-12 mb-3" />
                  <h3 className="font-montserrat font-bold text-3xl mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm opacity-90 font-open-sans mb-6">
                    {pkg.description}
                  </p>

                  <div className="space-y-2">
                    <div>
                      <div className="text-sm opacity-80 font-open-sans">
                        One-time Setup
                      </div>
                      <div className="text-4xl font-bold font-montserrat">
                        {pkg.setup}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-80 font-open-sans">
                        Monthly Retainer
                      </div>
                      <div className="text-3xl font-bold font-montserrat">
                        {pkg.monthly}/mo
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            feature.includes("Everything")
                              ? "text-purple-600"
                              : "text-green-600"
                          }`}
                        />
                        <span
                          className={`text-sm font-open-sans ${
                            feature.includes("Everything")
                              ? "font-bold text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <IndianRupee className="w-6 h-6 text-blue-600" />
              <h3 className="font-montserrat font-bold text-lg text-gray-900">
                Payment Terms
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 font-open-sans">
              <li>• 50% setup fee upfront, 50% before launch</li>
              <li>• Monthly retainer billed at month start</li>
              <li>• Flexible payment via UPI, bank transfer, or invoice</li>
              <li>• 3-month minimum commitment</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-green-600" />
              <h3 className="font-montserrat font-bold text-lg text-gray-900">
                What's Included
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 font-open-sans">
              <li>• All development & deployment costs</li>
              <li>• Ongoing maintenance & updates</li>
              <li>• Cloud hosting (AWS/Vercel/Firebase)</li>
              <li>• Monthly performance optimization</li>
            </ul>
          </div>
        </div>

        {/* ROI Note */}
        <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <IndianRupee className="w-6 h-6" />
            <h3 className="text-2xl font-montserrat font-bold">Expected ROI</h3>
          </div>
          <p className="text-lg font-open-sans">
            Break-even in 3-4 months. For a ₹50L GMV business, expect ₹8-12L
            additional annual revenue and ₹3-5L cost savings with the
            Professional package.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
