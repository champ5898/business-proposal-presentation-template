import { SlideLayout } from "../components/SlideLayout";
import {
  Calendar,
  FileText,
  Rocket,
  Mail,
  CheckCircle2,
  Linkedin,
  Globe,
} from "lucide-react";

export function NextSteps() {
  return (
    <SlideLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-semibold text-sm">
              Let's Get Started
            </span>
          </div>
          <h1 className="text-6xl font-montserrat font-bold text-gray-900 mb-4">
            Next Steps
          </h1>
          <p className="text-2xl text-gray-600 font-open-sans">
            Ready to transform your e-commerce business?
          </p>
        </div>

        {/* Action Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl font-bold">1</span>
            </div>
            <Calendar className="w-12 h-12 mb-4" />
            <h3 className="font-montserrat font-bold text-2xl mb-3">
              Schedule a Call
            </h3>
            <p className="font-open-sans text-sm opacity-90 mb-4">
              Book a 30-minute free consultation to discuss your specific needs
              and goals
            </p>
            <div className="bg-white/20 rounded-lg p-3 text-sm">
              Available: Mon-Sat, 10 AM - 7 PM IST
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl font-bold">2</span>
            </div>
            <FileText className="w-12 h-12 mb-4" />
            <h3 className="font-montserrat font-bold text-2xl mb-3">
              Review Proposal
            </h3>
            <p className="font-open-sans text-sm opacity-90 mb-4">
              Get a customized proposal with detailed scope, timeline, and
              pricing for your business
            </p>
            <div className="bg-white/20 rounded-lg p-3 text-sm">
              Delivered within 2-3 business days
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl font-bold">3</span>
            </div>
            <Rocket className="w-12 h-12 mb-4" />
            <h3 className="font-montserrat font-bold text-2xl mb-3">
              Launch Project
            </h3>
            <p className="font-open-sans text-sm opacity-90 mb-4">
              Sign agreement and kick off development. First results visible in
              2-3 weeks
            </p>
            <div className="bg-white/20 rounded-lg p-3 text-sm">
              Full deployment in 8-10 weeks
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 mb-10">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-8 text-center">
            Get in Touch Today
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-lg text-gray-900">
                    Email
                  </div>
                  <a
                    href="mailto:info@daslabs.online"
                    className="text-blue-600 font-open-sans hover:underline"
                  >
                    info@daslabs.online
                  </a>
                  <div className="text-sm text-gray-500">
                    Response within 24 hours
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-lg text-gray-900">
                    LinkedIn
                  </div>
                  <a
                    href="https://www.linkedin.com/company/daslabs/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-open-sans hover:underline"
                  >
                    DAS Labs
                  </a>
                  <div className="text-sm text-gray-500">Connect with us</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-lg text-gray-900">
                    Website
                  </div>
                  <a
                    href="https://www.daslabs.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-open-sans hover:underline"
                  >
                    www.daslabs.online
                  </a>
                  <div className="text-sm text-gray-500">Visit our website</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-montserrat font-bold mb-6 text-center">
            What to Expect After Reaching Out
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm font-open-sans">
                Initial consultation (free)
              </div>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm font-open-sans">
                Technical feasibility analysis
              </div>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm font-open-sans">
                Custom proposal & quote
              </div>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm font-open-sans">
                Project kickoff within 1 week
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-12 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
            Transform your e-commerce business with AI-powered solutions.
            Contact us today to get started on your journey to increased sales
            and efficiency.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
