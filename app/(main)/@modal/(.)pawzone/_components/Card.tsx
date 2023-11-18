import Image from 'next/image';
import Link from 'next/link';
import Clock from '@/public/svgs/Pawzone/clock.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import Bookmark from '@/public/svgs/Pawzone/bookmark.svg';

interface Props {
  tag?: string[];
  name: string;
  imageSrc: string;
  address: string;
  time: string;
  rating: number;
}

export default function Card({
  tag,
  name,
  imageSrc,
  address,
  time,
  rating,
}: Props) {
  return (
    <li className="shadow-chatCard rounded-[10px]">
      <Link href="" className="flex flex-col gap-4 p-5">
        <div className="flex">
          <div className="rounded-[10px] flex gap-[1px] bg-yellow-30 py-1 px-2">
            <Bookmark className="w-[22px] h-[22px] fill-yellow-100" />
            <p className="body3 text-grey-800">저장 많은</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src={imageSrc}
            alt="test"
            width={120}
            height={120}
            className="object-fill rounded-[10px]"
          />
          <div className="flex flex-col gap-2">
            <p className="header3 text-grey-800">{name}</p>
            <p className="body4 text-grey-800">{address}</p>
            <p className="flex items-center gap-1 body3 text-grey-800">
              <span>
                <Clock className="w-5 h-5" />
              </span>
              {time}
              <span className="body2">연중 무휴</span>
            </p>
            <p className="flex items-center gap-[3px] body2 text-grey-800">
              <Star className="w-[18px] h-[18px] fill-yellow-100" />
              {rating}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
