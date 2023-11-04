'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export function Carousel({ children }: { children: React.ReactNode }) {
  const [ref] = useKeenSlider({
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 1, spacing: 20 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  return (
    <ul className="w-full keen-slider" ref={ref}>
      {children}
    </ul>
  );
}

export function CarouselSlide({ children }: { children: React.ReactNode }) {
  return (
    <li className="max-w-full min-w-full keen-slider__slide">{children}</li>
  );
}
