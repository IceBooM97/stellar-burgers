import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds, containerRef, options) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sectionElements = sectionIds.map(id => document.getElementById(id));
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { root: containerRef.current, ...options });

    sectionElements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, containerRef, options]);

  return activeSection;
};

