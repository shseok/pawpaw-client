'use client';

import { Swiper } from 'swiper/react';
import 'swiper/css';

export default function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <Swiper
      className="w-full"
      slidesPerView={1.1}
      spaceBetween={20}
      breakpoints={{
        640: {
          slidesPerView: 2.1,
        },
        1240: {
          slidesPerView: 3.1,
        },
      }}
    >
      {children}
    </Swiper>
  );
}
