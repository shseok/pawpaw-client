'use client';

import { Swiper } from 'swiper/react';
import 'swiper/css';

export default function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      }}
      className="w-full"
    >
      {children}
    </Swiper>
  );
}
