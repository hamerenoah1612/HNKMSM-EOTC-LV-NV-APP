import React from 'react';
import { Sparkles, HeartHandshake, Sprout, Building2 } from 'lucide-react';
import { PILLARS, TAGLINE_EN, TAGLINE_SUB_EN, TAGLINE_AM, TAGLINE_SUB_AM } from '../data/churchContent';
import { Language } from '../types';

interface CenterIconDisplayProps {
  language: Language;
  onSelectPillar: (pillarId: string) => void;
}

export const CenterIconDisplay: React.FC<CenterIconDisplayProps> = ({
  language,
  onSelectPillar,
}) => {
  const getPillarIcon = (name: string) => {
    const iconStyle = "w-5 h-5 text-[#5e341b]";
    switch (name) {
      case 'Sparkles':
        return <Sparkles className={iconStyle} />;
      case 'HeartHandshake':
        return <HeartHandshake className={iconStyle} />;
      case 'Sprout':
        return <Sprout className={iconStyle} />;
      case 'Building2':
        return <Building2 className={iconStyle} />;
      default:
        return <Sparkles className={iconStyle} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-full text-center relative px-2 py-4">
      {/* Background Architectural Etching & Crosses */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.14] flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full max-w-[580px] text-[#864c29]"
          fill="currentColor"
        >
          {/* Subtle Domes */}
          <path d="M250 80 C290 80 330 140 330 220 L170 220 C170 140 210 80 250 80 Z" />
          <path d="M120 180 C150 180 170 220 170 280 L70 280 C70 220 90 180 120 180 Z" />
          <path d="M380 180 C410 180 430 220 430 280 L330 280 C330 220 350 180 380 180 Z" />
          {/* Spires and Crosses */}
          <line x1="250" y1="30" x2="250" y2="80" stroke="currentColor" strokeWidth="6" />
          <line x1="235" y1="50" x2="265" y2="50" stroke="currentColor" strokeWidth="6" />
          <line x1="120" y1="140" x2="120" y2="180" stroke="currentColor" strokeWidth="5" />
          <line x1="108" y1="155" x2="132" y2="155" stroke="currentColor" strokeWidth="5" />
          <line x1="380" y1="140" x2="380" y2="180" stroke="currentColor" strokeWidth="5" />
          <line x1="368" y1="155" x2="392" y2="155" stroke="currentColor" strokeWidth="5" />
        </svg>
      </div>

      {/* Central Sacred Icon of St. Mary and Christ Child - Seamless Vignette matching screenshot */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="relative group flex items-center justify-center">
          {/* Luminous Golden Halo Ambient Glow */}
          <div className="absolute w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 rounded-full bg-gradient-to-r from-[#e7be84]/35 via-[#f6d7a4]/25 to-transparent blur-2xl pointer-events-none -top-4" />

          {/* Central Sacred Painting with feathered antique parchment blending */}
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-[350px] h-[320px] sm:h-[370px] md:h-[410px] lg:h-[430px] flex items-center justify-center">
            <img
              src="/assets/orthodox_mary_icon.jpg"
              alt="Holy Virgin Mary with Baby Jesus - Ethiopian Orthodox Tewahedo Icon"
              className="w-full h-full object-cover object-center feather-mask transform transition-transform duration-700 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Script & Tagline below Icon */}
        <div className="mt-2 text-center px-4 max-w-sm">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-[#c8a98f]" />
            <h3 className="text-xl sm:text-2xl text-[#63351b] font-['Alex_Brush',cursive] tracking-wider leading-none">
              {language === 'am' ? TAGLINE_AM : TAGLINE_EN}
            </h3>
            <div className="h-[1px] w-8 bg-[#c8a98f]" />
          </div>
          <p className="text-xs sm:text-sm text-[#735544] mt-1 font-medium">
            {language === 'am' ? TAGLINE_SUB_AM : TAGLINE_SUB_EN}
          </p>
        </div>
      </div>

      {/* 4 Pillars of the Church Ministry */}
      <div className="relative z-10 w-full mt-4 pt-3 border-t border-[#ead7c2]/70">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-1.5">
          {PILLARS.map((pillar) => (
            <button
              id={`pillar-${pillar.id}`}
              key={pillar.id}
              type="button"
              onClick={() => onSelectPillar(pillar.id)}
              className="flex flex-col items-center p-2 rounded-xl hover:bg-[#f3e6d6]/60 transition-colors group cursor-pointer text-center"
            >
              <div className="w-9 h-9 rounded-full bg-[#eedfcf] group-hover:bg-[#e4d2bf] flex items-center justify-center transition-colors shadow-2xs mb-1.5">
                {getPillarIcon(pillar.iconName)}
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#482c1b] group-hover:text-[#783e20] leading-tight">
                {language === 'am' ? pillar.titleAm : pillar.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
