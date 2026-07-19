import { useEffect, useRef } from 'react';

/**
 * Custom React hook to trigger fade-in animations on scroll.
 * Can be used by attaching the returned ref to a container element.
 * It will find all child elements with class 'reveal-on-scroll' and animate them.
 * If the ref is not attached, it will fall back to scan the entire DOM.
 * @returns {React.RefObject} Ref to attach to the observed container
 */
export default function useAnimateOnScroll() {
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px', // trigger animation 50px before entering viewport
      }
    );

    const elements = [];
    
    if (domRef.current) {
      if (domRef.current.classList.contains('reveal-on-scroll')) {
        elements.push(domRef.current);
      }
      const children = domRef.current.querySelectorAll('.reveal-on-scroll');
      children.forEach((child) => elements.push(child));
    } else {
      // Fallback: observe all reveal-on-scroll elements in document
      const docElements = document.querySelectorAll('.reveal-on-scroll');
      docElements.forEach((el) => elements.push(el));
    }

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return domRef;
}
