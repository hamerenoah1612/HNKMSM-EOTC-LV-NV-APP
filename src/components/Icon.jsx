/** Small inline SVG icon set (solid brown line-up used in the design mockup). */
export default function Icon({ name, size = 20, className }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': 'true',
    focusable: 'false',
    className,
  };

  switch (name) {
    case 'crown':
      return (
        <svg {...common}>
          <path d="M3 19h18v2H3v-2zM2 7l5 4 5-7 5 7 5-4-2 10H4L2 7z" />
        </svg>
      );
    case 'users':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.4" />
          <circle cx="17.2" cy="9.2" r="2.7" />
          <path d="M2.5 19c0-3.4 2.9-5.6 6.5-5.6s6.5 2.2 6.5 5.6v1h-13v-1zM16 14.1c.4-.1.8-.1 1.2-.1 2.9 0 4.8 1.7 4.8 4.4V20h-5.2v-1.2c0-1.8-.5-3.3-1.4-4.7z" />
        </svg>
      );
    case 'user':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-6.4 8-6.4s8 2.4 8 6.4v1H4v-1z" />
        </svg>
      );
    case 'lock':
      return (
        <svg {...common}>
          <path d="M7 10V8a5 5 0 0110 0v2h1.2c.9 0 1.8.9 1.8 1.8v8.4c0 .9-.9 1.8-1.8 1.8H5.8c-.9 0-1.8-.9-1.8-1.8v-8.4C4 10.9 4.9 10 5.8 10H7zm2 0h6V8a3 3 0 00-6 0v2z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M14 8.5V6.9c0-.7.3-1 1-1h2.2V2.2H14C11 2.2 10 4 10 6.3v2.2H7.2v3.6H10V22h4v-9.9h3l.5-3.6H14z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...common}>
          <path d="M21.6 7.2a2.6 2.6 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.6 2.6 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'home':
      return (
        <svg {...common}>
          <path d="M12 3l9 8h-2.5v9h-5v-6h-3v6h-5v-9H3l9-8z" />
        </svg>
      );
    case 'grid':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="8" height="8" rx="2" />
          <rect x="13" y="3" width="8" height="8" rx="2" />
          <rect x="3" y="13" width="8" height="8" rx="2" />
          <rect x="13" y="13" width="8" height="8" rx="2" />
        </svg>
      );
    case 'church':
      return (
        <svg {...common}>
          <path fillRule="evenodd" d="M11 1.5h2v2h2v2h-2v2.3l6 4V21H5v-9.2l6-4V5.5H9v-2h2v-2zm-.5 19.5h3v-4a1.5 1.5 0 00-3 0v4z" />
        </svg>
      );
    case 'play':
      return (
        <svg {...common}>
          <path fillRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 5.5l7 4.5-7 4.5v-9z" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...common}>
          <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.8-8 11-8 11z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common}>
          <path fillRule="evenodd" d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm1.5 2.3L12 13l7.5-5.7V7L12 11.6 4.5 7v.3z" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path fillRule="evenodd" d="M12 2l8 3v6c0 5-3.4 8.9-8 11-4.6-2.1-8-6-8-11V5l8-3zm0 4.2L7 8v3.1c0 3.5 2.1 6.2 5 7.7 2.9-1.5 5-4.2 5-7.7V8l-5-1.8z" />
        </svg>
      );
    case 'star':
      return (
        <svg {...common}>
          <path d="M12 2.5l2.9 6 6.6.7-4.9 4.5 1.3 6.5L12 16.9l-5.9 3.3 1.3-6.5-4.9-4.5 6.6-.7L12 2.5z" />
        </svg>
      );
    case 'hands':
      return (
        <svg {...common}>
          <path d="M4 12.5l3.2-4.3a1.6 1.6 0 012.6 1.9L8 13h1l4.6-2a1.6 1.6 0 011.8 2.6L11 16l-3 .3-4-1.3v-2.5zM3 12v6h2.4v-6H3z" />
          <path d="M20 12.5l-3.2-4.3a1.6 1.6 0 00-2.6 1.9L16 13h-1l-1.2-.5-1 1.8L14 15l-.3 1.3L17 17l4-1.3v-3.2zM21 12v6h-2.4v-6H21z" />
        </svg>
      );
    case 'link':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M9.5 14.5l5-5" />
          <path d="M8 16.5l-1.8 1.8a3.2 3.2 0 01-4.5-4.5L4.5 11a3.2 3.2 0 014.5 0" />
          <path d="M16 7.5l1.8-1.8a3.2 3.2 0 014.5 4.5L19.5 13a3.2 3.2 0 01-4.5 0" />
        </svg>
      );
    case 'book':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M12 5.5C10.3 4.4 7.8 4 5 4v14c2.8 0 5.3.4 7 1.5" />
          <path d="M12 5.5c1.7-1.1 4.2-1.5 7-1.5v14c-2.8 0-5.3.4-7 1.5" />
          <path d="M12 5.5v14" />
        </svg>
      );
    case 'flame':
      return (
        <svg {...common}>
          <path d="M12 2c1 3-3 4.2-3 7.8A3 3 0 0012 13.5a3 3 0 003-3.7c1.2.9 2 2.5 2 4.2 0 3.3-2.2 6-5 6s-5-2.7-5-6C7 9.3 9.5 6.6 12 2z" />
        </svg>
      );
    case 'refresh':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12a8 8 0 0113.7-5.7L20 8" />
          <path d="M20 4v4h-4" />
          <path d="M20 12a8 8 0 01-13.7 5.7L4 16" />
          <path d="M4 20v-4h4" />
        </svg>
      );
    case 'bolt':
      return (
        <svg {...common}>
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case 'compass':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M15 9l-2 6-6 2 2-6 6-2z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'school':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" fill="none" />
          <path d="M8 12.5l2.5 2.5L16 9" />
        </svg>
      );
    default:
      return null;
  }
}
