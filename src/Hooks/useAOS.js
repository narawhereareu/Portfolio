import { useEffect } from 'react';

export const useAOS = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-aos]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};