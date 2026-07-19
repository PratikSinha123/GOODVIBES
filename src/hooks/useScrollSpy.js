import { useState, useEffect } from 'react';

/**
 * Custom hook to spy on active section based on viewport scroll position
 * @param {string[]} ids Array of section element IDs to spy on
 * @param {object} options IntersectionObserver options
 * @returns {string} The ID of the currently active section
 */
export default function useScrollSpy(ids, options = { rootMargin: '-30% 0px -50% 0px' }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: options.rootMargin,
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Handle scroll to top edge case (active goes back to first section if scrolled all the way up)
    const handleScroll = () => {
      if (window.scrollY < 100 && ids.length > 0) {
        setActiveId(ids[0]);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids, options.rootMargin]);

  return activeId;
}
