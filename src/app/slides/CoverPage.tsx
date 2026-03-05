import { SlideLayout } from "../components/SlideLayout";
import { Zap, TrendingUp, IndianRupee } from "lucide-react";

export function CoverPage() {
  return (
    <SlideLayout showFooter={false}>
      <div className="h-full flex flex-col justify-center items-center text-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/logo.png"
            alt="DAS Labs"
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold mb-6 bg-gradient-to-r from-blue-700 via-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
          Optimizing Your E-commerce
          <br />
          Business with AI & Tech
        </h1>

        {/* Subtitle with Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-4xl">
          <div className="flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <span className="font-open-sans font-semibold text-gray-700">
              Boost Sales
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <IndianRupee className="w-6 h-6 text-blue-600" />
            <span className="font-open-sans font-semibold text-gray-700">
              Cut Costs
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <Zap className="w-6 h-6 text-purple-600" />
            <span className="font-open-sans font-semibold text-gray-700">
              Scale Smartly
            </span>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600"></div>
      </div>
    </SlideLayout>
  );
}
