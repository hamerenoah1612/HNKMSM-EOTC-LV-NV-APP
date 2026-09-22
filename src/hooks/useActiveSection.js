import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently crossing the middle of the viewport.
 * Used by the Navbar to move the `.active` underline while scrolling.
 */
export default function useActiveSection(ids, fallback = ids[0]) {
  const [active, setActive] = useState(fallback);
  const key = ids.join('|');

  useEffect(() => {
    const elements = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
