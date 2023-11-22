'use client';

import Image from 'next/image';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { SwiperSlide } from 'swiper/react';

interface Props {
  images: string[];
}

export default function ImageSlider({ images }: Props) {
  return (
    <Swiper slidesPerView={3.5} spaceBetween={8} centerInsufficientSlides>
      {images.map((image, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-[110px] h-[110px]">
            <Image
              src={image}
              alt="test"
              fill
              priority
              sizes="100vw"
              className="object-cover rounded-[10px]"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
