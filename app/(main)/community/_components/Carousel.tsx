'use client';

import { useKeenSlider } from 'keen-slider/react';

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [ref] = useKeenSlider({
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 1, spacing: 5 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 10 },
      },
    },
  });

  return (
    <div className="keen-slider" ref={ref}>
      {children}
    </div>
  );
}
