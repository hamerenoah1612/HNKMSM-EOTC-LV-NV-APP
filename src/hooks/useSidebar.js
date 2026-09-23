import { useCallback, useEffect, useState } from 'react';

const DESKTOP_QUERY = '(min-width: 900px)';

function isDesktopViewport() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(DESKTOP_QUERY).matches;
}

export function useSidebar() {
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    if (isDesktopViewport()) {
      setIsDesktopExpanded((expanded) => !expanded);
    } else {
      setIsMobileOpen((open) => !open);
    }
  }, []);

  const openMobile = useCallback(() => setIsMobileOpen(true), []);
  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  useEffect(() => {
    function handleKeydown(event) {
      if (event.key !== 'Escape') return;
      if (isDesktopViewport()) setIsDesktopExpanded(false);
      else setIsMobileOpen(false);
    }
    function handleResize() {
      if (isDesktopViewport()) setIsMobileOpen(false);
      else setIsDesktopExpanded(false);
    }
    document.addEventListener('keydown', handleKeydown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isDesktopExpanded,
    isMobileOpen,
    toggleSidebar,
    openMobile,
    closeMobile,
  };
}
