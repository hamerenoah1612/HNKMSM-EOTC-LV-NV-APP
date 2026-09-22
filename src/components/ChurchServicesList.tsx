import React from 'react';
import {
  Users,
  Church,
  HandHeart,
  Calendar,
  Heart,
  BookOpen,
  ChevronRight,
} from 'lucide-react';
import { ServiceFeature, Language } from '../types';
import { SERVICE_FEATURES } from '../data/churchContent';

interface ChurchServicesListProps {
  language: Language;
  onSelectFeature: (feature: ServiceFeature) => void;
}

export const ChurchServicesList: React.FC<ChurchServicesListProps> = ({
  language,
  onSelectFeature,
}) => {
  const getIcon = (iconName: ServiceFeature['iconName']) => {
    const iconClass = "w-5 h-5 text-[#63361c]";
    switch (iconName) {
      case 'Users':
        return <Users className={iconClass} />;
      case 'Church':
        return <Church className={iconClass} />;
      case 'HandHeart':
        return <HandHeart className={iconClass} />;
      case 'Calendar':
        return <Calendar className={iconClass} />;
      case 'Heart':
        return <Heart className={iconClass} />;
      case 'BookOpen':
        return <BookOpen className={iconClass} />;
      default:
        return <Church className={iconClass} />;
    }
  };

  return (
    <div className="w-full">
      {/* Title & Introduction */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#231208] tracking-tight font-['Cinzel',Georgia,serif] leading-tight">
          {language === 'am' ? 'እንኳን ደህና መጡ' : 'Welcome Back'}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#614534] font-normal leading-relaxed max-w-lg">
          {language === 'am'
            ? 'ከቤተክርስቲያንዎ፣ ከአገልግሎት፣ ከምጽዋት፣ ከትምህርትና ከማኅበራዊ ሕይወት ጋር ይገናኙ።'
            : 'Connect with your church, services, giving, learning, and community life.'}
        </p>
      </div>

      {/* Feature Items List */}
      <div className="space-y-4 sm:space-y-4.5">
        {SERVICE_FEATURES.map((feature) => {
          return (
            <button
              id={`service-item-${feature.id}`}
              key={feature.id}
              type="button"
              onClick={() => onSelectFeature(feature)}
              className="w-full text-left flex items-start gap-3.5 sm:gap-4 p-2.5 sm:p-3 rounded-2xl transition-all duration-200 hover:bg-[#f2e6d7]/70 group border border-transparent hover:border-[#dfceba] cursor-pointer"
            >
              {/* Circular Warm Icon Badge */}
              <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f1e3d3] group-hover:bg-[#edd9c5] border border-[#dfcfbd] flex items-center justify-center transition-colors shadow-2xs mt-0.5">
                {getIcon(feature.iconName)}
              </div>

              {/* Text Block */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-[17px] font-semibold text-[#29170e] group-hover:text-[#6e3b21] transition-colors leading-snug">
                    {language === 'am' ? feature.titleAm : feature.title}
                  </h3>
                  <ChevronRight className="w-4 h-4 text-[#ab876d] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-xs sm:text-[13px] text-[#6e5343] leading-normal mt-0.5 line-clamp-2">
                  {language === 'am' ? feature.descriptionAm : feature.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Church Line Art & Ge'ez Scripture matching the screenshot */}
      <div className="mt-8 pt-4 border-t border-[#e8d8c6]/70 flex items-center gap-4">
        {/* Antique Church Dome & Cross Vector Silhouette */}
        <div className="shrink-0 w-12 h-12 opacity-40 text-[#7a482b]">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
            {/* Dome */}
            <path d="M50 25 C62 25 74 42 74 65 L26 65 C26 42 38 25 50 25 Z" />
            <rect x="24" y="65" width="52" height="25" rx="2" />
            {/* Ethiopian Cross on spire */}
            <line x1="50" y1="8" x2="50" y2="25" stroke="currentColor" strokeWidth="3" />
            <line x1="43" y1="14" x2="57" y2="14" stroke="currentColor" strokeWidth="3" />
            <circle cx="50" cy="14" r="2.5" />
            {/* Arched Doors & Windows */}
            <path d="M44 90 L44 75 C44 72 47 70 50 70 C53 70 56 72 56 75 L56 90 Z" fill="#fcf8f2" />
          </svg>
        </div>

        <div className="min-w-0">
          <p className="text-xs sm:text-[13px] font-['Noto_Serif_Ethiopic',serif] font-semibold text-[#543320] leading-snug">
            “እስመ ኀበ ተጋብኡ ክልኤ ወሠለስቱ በስምየ፤ ህየ ሀሎኩ በማእከሎሙ።”
          </p>
          <p className="text-[11px] sm:text-xs italic text-[#7a5a46] font-['Cormorant_Garamond',Georgia,serif] mt-0.5">
            “For where two or three gather in my name, there am I with them.” — Matthew 18:20
          </p>
        </div>
      </div>
    </div>
  );
};
