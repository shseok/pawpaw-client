import Image from 'next/image';
import Star from '@/public/svgs/Pawzone/star.svg';
import ImageSlider from './ImageSlider';
import { cn } from '@/utils/common';

interface Props {
  ImageSrc: string;
  name: string;
  subName: string;
  rating: number;
  description: string;
  placeReviewImageList?: string[];
}

export default function ReviewCard({
  ImageSrc,
  name,
  subName,
  rating,
  description,
  placeReviewImageList,
}: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <div className="relative w-[52px] h-[52px]">
          <Image
            src={ImageSrc}
            alt="Uploaded Profile"
            fill
            sizes="100vw"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="caption2 text-grey-500">
            <span className="body2 text-grey-800 pr-1">{name}</span>
            {subName}
          </p>
          <div className="flex gap-1 items-center">
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className={cn(
                    'w-[18px] h-[18px] fill-grey-200',
                    index < rating && 'fill-yellow-100',
                  )}
                />
              ))}
            </div>
            <p className="body2 text-grey-800">{rating}</p>
          </div>
        </div>
      </div>
      {placeReviewImageList && placeReviewImageList.length > 0 && (
        <ImageSlider urls={placeReviewImageList} />
      )}
      <p className="body4 text-grey-800 mb-5">{description}</p>
    </div>
  );
}
