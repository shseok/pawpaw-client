'use client';

import X from '@/public/svgs/X.svg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { cn } from '@/utils/common';

interface Props {
  urls: string[];
  deleteImage?: (index: number) => void;
  isDeletableImage?: boolean;
  wrapperClassName?: string;
  className?: string;
}

export default function ImageSlider({
  urls,
  isDeletableImage = false,
  deleteImage,
  wrapperClassName = 'w-[110px] h-[110px]',
  className = 'rounded-[10px]',
}: Props) {
  return (
    <Swiper slidesPerView={3.5} spaceBetween={8} centerInsufficientSlides>
      {urls.map((url, idx) => (
        <SwiperSlide key={url}>
          <div className={cn('relative', wrapperClassName)}>
            {!isDeletableImage ? (
              <Image
                src={url}
                alt="test"
                fill
                priority
                sizes="100vw"
                className={cn('object-cover', className)}
              />
            ) : (
              <>
                <button
                  type="button"
                  className="absolute top-0 right-0 w-7 h-7 flex justify-center items-center bg-grey-600 cursor-pointer z-10"
                  onClick={deleteImage ? () => deleteImage(idx) : () => {}}
                  aria-label="Delete Image"
                >
                  <X className="w-5 h-5 fill-white" />
                </button>
                <Image
                  src={url}
                  alt="test"
                  fill
                  priority
                  sizes="100vw"
                  className={cn('object-cover', className)}
                />
              </>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
