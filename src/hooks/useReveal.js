import { useEffect, useRef } from 'react';

/**
 * Custom hook to add scroll-reveal animations via IntersectionObserver.
 * Returns a ref to attach to the container element.
 * Children with class "reveal" will animate in when they enter the viewport.
 */
const useReveal = (options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.reveal');
    if (elements.length === 0) return;

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
        rootMargin: '0px 0px -40px 0px',
        ...options,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
};

export default useReveal;
