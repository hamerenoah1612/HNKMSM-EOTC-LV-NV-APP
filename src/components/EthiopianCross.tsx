import React from 'react';

interface EthiopianCrossProps {
  className?: string;
  size?: number;
}

export const EthiopianCross: React.FC<EthiopianCrossProps> = ({
  className = "text-[#8a4b26]",
  size = 48
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ethiopian Orthodox Cross"
    >
      {/* Outer Glow / Halo Effect */}
      <circle cx="50" cy="50" r="38" fill="currentColor" fillOpacity="0.06" />

      {/* Main Shaft and Arms */}
      <rect x="46" y="8" width="8" height="96" rx="2" fill="currentColor" />
      <rect x="18" y="36" width="64" height="8" rx="2" fill="currentColor" />

      {/* Center Diamond & Knotwork */}
      <rect x="42" y="32" width="16" height="16" transform="rotate(45 50 40)" fill="currentColor" />
      <circle cx="50" cy="40" r="3" fill="#fdfaf5" />

      {/* Top Cross Terminal */}
      <path
        d="M50 4 L56 12 L52 14 L55 20 L45 20 L48 14 L44 12 Z"
        fill="currentColor"
      />
      <circle cx="50" cy="4" r="2.5" fill="currentColor" />

      {/* Left Cross Arm Terminal */}
      <path
        d="M14 40 L22 34 L20 38 L26 41 L26 39 L20 42 L22 46 Z"
        fill="currentColor"
      />
      <circle cx="14" cy="40" r="2.5" fill="currentColor" />

      {/* Right Cross Arm Terminal */}
      <path
        d="M86 40 L78 34 L80 38 L74 41 L74 39 L80 42 L78 46 Z"
        fill="currentColor"
      />
      <circle cx="86" cy="40" r="2.5" fill="currentColor" />

      {/* Diagonal Lattice Ties (Lalibela style open filigree) */}
      <path
        d="M34 24 L50 40 L66 24 M34 56 L50 40 L66 56"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Diamond Trefoils in quadrants */}
      <circle cx="36" cy="26" r="3.5" fill="currentColor" />
      <circle cx="64" cy="26" r="3.5" fill="currentColor" />
      <circle cx="36" cy="54" r="3.5" fill="currentColor" />
      <circle cx="64" cy="54" r="3.5" fill="currentColor" />

      {/* Lower Shaft Filigree Rings & Base */}
      <rect x="40" y="70" width="20" height="4" rx="2" fill="currentColor" />
      <circle cx="50" cy="72" r="2" fill="#fdfaf5" />

      {/* Base handle / foot piece with cross flairs */}
      <path
        d="M44 94 L50 86 L56 94 L54 106 L58 114 L42 114 L46 106 Z"
        fill="currentColor"
      />
      <circle cx="50" cy="104" r="2" fill="#fdfaf5" />
      <line x1="38" y1="114" x2="62" y2="114" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};
