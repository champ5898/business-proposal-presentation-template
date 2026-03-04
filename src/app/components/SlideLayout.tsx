import { ReactNode } from 'react';

interface SlideLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function SlideLayout({ children, showFooter = true }: SlideLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden print:break-after-page">
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 p-8 md:p-12 lg:p-16">
          {children}
        </div>

        {/* Footer */}
        {showFooter && (
          <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm print:hidden">
            <div className="px-8 md:px-12 lg:px-16 py-4 text-center">
              <div className="text-sm text-gray-600">
                DAS Labs | info@daslabs.online | www.daslabs.online
              </div>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}
