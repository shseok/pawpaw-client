'use client';

import { Swiper } from 'swiper/react';
import 'swiper/css';

export default function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      centerInsufficientSlides
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1240: {
          slidesPerView: 3,
        },
        1921: {
          slidesPerView: 4,
        },
      }}
    >
      {children}
    </Swiper>
  );
}
