import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleBtnProps {
  id?: string;
  className?: string;
  variant?: 'pill' | 'chip' | 'minimal';
  showLabel?: boolean;
}

export const LanguageToggleBtn: React.FC<LanguageToggleBtnProps> = ({
  id = 'global-lang-toggle',
  className = '',
  variant = 'pill',
  showLabel = true,
}) => {
  const { language, toggleLanguage } = useLanguage();

  const basePillStyles = `
    inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
    bg-[#f3e7da] hover:bg-[#ebd9c7] text-[#5a331c] border border-[#d6beaa]
    transition-all cursor-pointer shadow-xs select-none
  `.trim();

  return (
    <button
      id={id}
      type="button"
      onClick={toggleLanguage}
      className={`${basePillStyles} ${className}`.trim()}
      title={language === 'en' ? 'ወደ አማርኛ ቀይር (Switch to Amharic)' : 'Switch to English'}
      aria-label="Toggle Language"
    >
      <svg
        className="w-3.5 h-3.5 text-[#8a4a25] shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
        <path d="M2 12h20" strokeWidth="2" />
      </svg>
      {showLabel && (
        <span className="font-bold tracking-wide">
          {language === 'en' ? 'አማርኛ' : 'English'}
        </span>
      )}
    </button>
  );
};

export default LanguageToggleBtn;
