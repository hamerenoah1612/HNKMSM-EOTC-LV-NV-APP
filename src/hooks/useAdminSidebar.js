import { useCallback, useEffect, useState } from 'react';

const DESKTOP_QUERY = '(min-width: 1024px)';

function isDesktopViewport() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(DESKTOP_QUERY).matches;
}

/**
 * Reproduces the original app.js behavior for the admin shell:
 * - Desktop (>=1024px): sidebar is folded by default. The fold button (or the
 *   cross/logo mark) expands/collapses it. Clicking a nav link while folded just
 *   expands the sidebar (first click doesn't navigate away).
 * - Mobile/tablet (<1024px): sidebar is an off-canvas drawer with an overlay;
 *   the cross mark and drawer-close button close it, as does clicking a link.
 * - Resizing across the breakpoint resets the other mode's state.
 */
export function useAdminSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleDesktop = useCallback(() => setIsExpanded((expanded) => !expanded), []);
  const openMobile = useCallback(() => setIsMobileOpen(true), []);
  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  const handleCrossClick = useCallback(() => {
    if (isDesktopViewport()) toggleDesktop();
    else closeMobile();
  }, [toggleDesktop, closeMobile]);

  const handleNavClick = useCallback(
    (event) => {
      if (isDesktopViewport() && !isExpanded) {
        event.preventDefault();
        toggleDesktop();
        return true;
      }
      if (!isDesktopViewport()) {
        closeMobile();
      }
      return false;
    },
    [isExpanded, toggleDesktop, closeMobile]
  );

  useEffect(() => {
    function handleResize() {
      if (isDesktopViewport()) setIsMobileOpen(false);
      else setIsExpanded(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isExpanded,
    isMobileOpen,
    toggleDesktop,
    openMobile,
    closeMobile,
    handleCrossClick,
    handleNavClick,
  };
}
