import { FileDown, X, Printer, Check } from 'lucide-react';
import { useState } from 'react';

export function PrintButton() {
  const [showModal, setShowModal] = useState(false);

  const handlePrint = () => {
    setShowModal(false);
    setTimeout(() => window.print(), 100);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="fixed top-4 right-4 z-30 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 print:hidden transition-colors"
        aria-label="Export to PDF"
      >
        <FileDown className="w-5 h-5" />
        <span className="font-montserrat font-semibold">Export to PDF</span>
      </button>

      {/* Instructions Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 print:hidden">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Printer className="w-8 h-8" />
                  <h2 className="text-2xl font-montserrat font-bold">Export Presentation to PDF</h2>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-3">
                  📄 Quick Steps to Save as PDF:
                </h3>
                <ol className="space-y-4 font-open-sans text-gray-700">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                      1
                    </span>
                    <div>
                      <strong className="block mb-1">Click "Start Print" below</strong>
                      <span className="text-sm text-gray-600">This will open your browser's print dialog</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                    <div>
                      <strong className="block mb-1">Select "Save as PDF"</strong>
                      <span className="text-sm text-gray-600">In the Destination/Printer dropdown</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <div>
                      <strong className="block mb-1">Set to Landscape orientation</strong>
                      <span className="text-sm text-gray-600">For better slide layout</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                      4
                    </span>
                    <div>
                      <strong className="block mb-1">Enable "Background graphics"</strong>
                      <span className="text-sm text-gray-600">To preserve colors, gradients, and design</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                      5
                    </span>
                    <div>
                      <strong className="block mb-1">Click Save</strong>
                      <span className="text-sm text-gray-600">Choose your file location and filename</span>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
                <div className="flex gap-3">
                  <span className="text-2xl">💡</span>
                  <div className="text-sm font-open-sans">
                    <strong className="text-yellow-900 block mb-1">Pro Tip:</strong>
                    <p className="text-yellow-800">
                      Navigate through all slides first (use arrow keys or arrow buttons) to ensure all content is loaded, 
                      then print. This will capture all 11 pages in one PDF.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm font-open-sans">
                    <strong className="text-blue-900 block mb-1">What's Included:</strong>
                    <ul className="text-blue-800 space-y-1 ml-4 list-disc">
                      <li>All 11 professional slides</li>
                      <li>Full-color gradients and graphics</li>
                      <li>Charts and data visualizations</li>
                      <li>Contact information footer on each page</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrint}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-lg font-montserrat font-bold transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <Printer className="w-6 h-6" />
                  Start Print Process
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-4 border-2 border-gray-300 hover:border-gray-400 rounded-lg font-montserrat font-semibold text-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
