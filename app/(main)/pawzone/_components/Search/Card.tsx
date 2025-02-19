import Image from 'next/image';
import Link from 'next/link';
import Clock from '@/public/svgs/Pawzone/clock.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import Chip from '../Chip';

interface Props {
  idx: number;
  // tag?: string[];
  name: string;
  imageSrc: string;
  address: string;
  time: string;
  rating: number | null;
}

export default function Card({
  idx,
  // tag,
  name,
  imageSrc,
  address,
  time,
  rating,
}: Props) {
  return (
    <li className="shadow-chatCard rounded-[10px]">
      <Link href={`/pawzone/place/${idx}`} className="flex flex-col gap-4 p-5">
        {/* tag 기능 활성화시 적용 */}
        <div className="flex gap-2">
          <Chip type="hot" />
          <Chip type="clean" />
        </div>
        <div className="flex gap-4">
          <div className="relative min-w-[120px] w-[120px] h-[120px]">
            <Image
              src={imageSrc}
              alt="test"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="header3 text-grey-800">{name}</p>
            <p className="body4 text-grey-800">{address}</p>
            {/* 한줄로 처리하고 세부 페이지 들어가면 거기서 여러 데이터 보여주는 걸로 */}
            <p className="flex items-center gap-1">
              <span>
                <Clock className="w-5 h-5" />
              </span>
              <span
                className="overflow-hidden overflow-ellipsis body3 text-grey-800"
                style={{
                  WebkitLineClamp: 1,
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {time}
              </span>
            </p>
            <p className="flex items-center gap-[3px] body2 text-grey-800">
              <Star className="w-[18px] h-[18px] fill-yellow-100" />
              {rating ? Math.round(rating * 10) / 10 : '리뷰 없음'}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
