import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  delay?: number;
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Counts from 0 to `value` the first time it scrolls into view. */
const CountUp = ({ value, decimals = 0, suffix = '', prefix = '', duration = 1300, className = '', delay = 0 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = performance.now() + delay;
      const step = (now: number) => {
        const elapsed = now - start;
        if (elapsed < 0) {
          requestAnimationFrame(step);
          return;
        }
        const progress = Math.min(elapsed / duration, 1);
        setDisplay(value * easeOut(progress));
        if (progress < 1) requestAnimationFrame(step);
        else setDisplay(value);
      };
      requestAnimationFrame(step);
    };

    if (typeof IntersectionObserver === 'undefined') {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
