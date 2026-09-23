import { useEffect, useRef } from 'react';

const IO_OPTIONS = { threshold: 0.04, rootMargin: '0px 0px -40px 0px' };

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
    }, IO_OPTIONS);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export function useStaggerReveal(delay = 90) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll('.fade-up').forEach((child, i) =>
          setTimeout(() => child.classList.add('visible'), i * delay)
        );
        obs.disconnect();
      }
    }, IO_OPTIONS);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
