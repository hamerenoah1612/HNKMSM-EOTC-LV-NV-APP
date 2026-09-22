import React from 'react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenInfo: (type: 'help' | 'contact' | 'privacy' | 'terms') => void;
}

export const AuthFooter: React.FC<FooterProps> = ({
  language,
  onOpenInfo,
}) => {
  return (
    <footer className="w-full py-5 px-4 sm:px-8 border-t border-[#ebd9c7]/80 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7d5d4a]">
        <p className="order-2 sm:order-1 text-center sm:text-left">
          © {new Date().getFullYear()} HNKMSM-EOTC-LV-NV. {language === 'am' ? 'መብቱ በሕግ የተጠበቀ ነው።' : 'All rights reserved.'}
        </p>

        {/* Footer Links from Screenshot */}
        <div className="order-1 sm:order-2 flex items-center flex-wrap justify-center gap-2 sm:gap-3 text-xs font-medium">
          <button
            id="footer-help-btn"
            type="button"
            onClick={() => onOpenInfo('help')}
            className="hover:text-[#422213] hover:underline transition-colors cursor-pointer"
          >
            {language === 'am' ? 'እርዳታ ይፈልጋሉ?' : 'Need help?'}
          </button>
          <span className="text-[#ceb29f]">|</span>
          <button
            id="footer-contact-btn"
            type="button"
            onClick={() => onOpenInfo('contact')}
            className="hover:text-[#422213] hover:underline transition-colors cursor-pointer"
          >
            {language === 'am' ? 'ያግኙን' : 'Contact Us'}
          </button>
          <span className="text-[#ceb29f]">|</span>
          <button
            id="footer-privacy-btn"
            type="button"
            onClick={() => onOpenInfo('privacy')}
            className="hover:text-[#422213] hover:underline transition-colors cursor-pointer"
          >
            {language === 'am' ? 'የግላዊነት ፖሊሲ' : 'Privacy Policy'}
          </button>
          <span className="text-[#ceb29f]">|</span>
          <button
            id="footer-terms-btn"
            type="button"
            onClick={() => onOpenInfo('terms')}
            className="hover:text-[#422213] hover:underline transition-colors cursor-pointer"
          >
            {language === 'am' ? 'የአገልግሎት ውሎች' : 'Terms of Service'}
          </button>
        </div>
      </div>
    </footer>
  );
};
