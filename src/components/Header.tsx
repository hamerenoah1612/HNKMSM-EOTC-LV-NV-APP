import React from 'react';
import { EthiopianCross } from './EthiopianCross';
import { Language } from '../types';
import {
  CHURCH_NAME_EN,
  CHURCH_SUBTITLE_EN,
  VERSE_EN,
  VERSE_REF_EN,
  VERSE_GEEZ,
  VERSE_REF_GEEZ,
} from '../data/churchContent';
import { Menu, X, Globe, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onOpenInfo: (type: string) => void;
  onBackToLanding?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  mobileMenuOpen,
  onToggleMobileMenu,
  onOpenInfo,
  onBackToLanding,
}) => {
  return (
    <header className="w-full pt-4 md:pt-6 pb-2 px-4 sm:px-8 md:px-12 border-b border-[#ebd8c5]/50 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Church Identity */}
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="shrink-0 p-1 bg-[#f4ebd9]/80 rounded-xl border border-[#decbba] shadow-2xs">
            <EthiopianCross size={46} className="text-[#804627]" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#2b180d] font-['Cinzel',Georgia,serif]">
              {CHURCH_NAME_EN}
            </h1>
            <p className="text-xs sm:text-sm text-[#7d5945] font-medium tracking-wide">
              {language === 'am' ? 'የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን' : CHURCH_SUBTITLE_EN}
            </p>
          </div>
        </div>

        {/* Top Right Verse & Controls */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-4">
          <div className="hidden lg:flex items-center gap-3 text-right max-w-md">
            {/* Subtle church dome outline etched into the sky behind verse */}
            <div className="w-9 h-9 opacity-35 text-[#865335] shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                <path d="M50 20 C64 20 75 42 75 68 L25 68 C25 42 36 20 50 20 Z" />
                <line x1="50" y1="6" x2="50" y2="20" stroke="currentColor" strokeWidth="4" />
                <line x1="42" y1="12" x2="58" y2="12" stroke="currentColor" strokeWidth="4" />
              </svg>
            </div>
            <div>
              <p className="text-xs sm:text-[13px] italic font-['Cormorant_Garamond',Georgia,serif] text-[#5c3e2e] leading-snug">
                {language === 'am' ? VERSE_GEEZ : VERSE_EN}
              </p>
              <p className="text-[11px] font-semibold text-[#946142] uppercase tracking-wider mt-0.5">
                {language === 'am' ? VERSE_REF_GEEZ : VERSE_REF_EN}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onBackToLanding && (
              <button
                id="header-back-to-site"
                type="button"
                onClick={onBackToLanding}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#ebd8c5] hover:bg-[#dfc5ac] text-[#472714] border border-[#cfb59d] transition-all cursor-pointer shadow-2xs"
                title={language === 'am' ? 'ወደ ቤተክርስቲያን ዋና ገጽ ተመለስ' : 'Back to Church Website'}
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#7f4422]" />
                <span>{language === 'am' ? 'ወደ ዋና ገጽ' : 'Back to Site'}</span>
              </button>
            )}

            {/* Language Switcher */}
            <button
              id="header-lang-toggle"
              type="button"
              onClick={onToggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#f3e7da] hover:bg-[#ebd9c7] text-[#5a331c] border border-[#d6beaa] transition-colors cursor-pointer shadow-2xs"
              title="Toggle English / አማርኛ"
            >
              <Globe className="w-3.5 h-3.5 text-[#8a4a25]" />
              <span>{language === 'en' ? 'አማርኛ' : 'English'}</span>
            </button>

            {/* Mobile Navigation Toggle */}
            <button
              id="mobile-nav-toggle"
              type="button"
              onClick={onToggleMobileMenu}
              className="md:hidden p-2 rounded-lg bg-[#f3e7da] text-[#4a2714] border border-[#d8c0ac] hover:bg-[#ead6c3]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scripture quote on mobile when small */}
      <div className="lg:hidden mt-3 pt-2 border-t border-[#ebd8c5]/70 text-center">
        <p className="text-xs italic font-['Cormorant_Garamond',Georgia,serif] text-[#694836]">
          {language === 'am' ? VERSE_GEEZ : VERSE_EN}
        </p>
        <span className="text-[10px] font-semibold text-[#946142] uppercase tracking-wider block mt-0.5">
          {language === 'am' ? VERSE_REF_GEEZ : VERSE_REF_EN}
        </span>
      </div>

      {/* Sub-header Values Bar: FAITH • COMMUNITY • SERVICE • TOGETHER */}
      <div className="mt-4 pt-3 border-t border-[#eddccb]/60 flex items-center justify-center sm:justify-start">
        <nav className="flex items-center flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#85573d] uppercase font-['Cinzel',Georgia,serif]">
          <button
            type="button"
            onClick={() => onOpenInfo('faith')}
            className="hover:text-[#422111] transition-colors cursor-pointer"
          >
            FAITH
          </button>
          <span className="text-[#c79d7d]">•</span>
          <button
            type="button"
            onClick={() => onOpenInfo('community')}
            className="hover:text-[#422111] transition-colors cursor-pointer"
          >
            COMMUNITY
          </button>
          <span className="text-[#c79d7d]">•</span>
          <button
            type="button"
            onClick={() => onOpenInfo('service')}
            className="hover:text-[#422111] transition-colors cursor-pointer"
          >
            SERVICE
          </button>
          <span className="text-[#c79d7d]">•</span>
          <button
            type="button"
            onClick={() => onOpenInfo('together')}
            className="hover:text-[#422111] transition-colors cursor-pointer"
          >
            TOGETHER
          </button>
        </nav>
      </div>
    </header>
  );
};
