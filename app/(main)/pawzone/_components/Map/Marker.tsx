import MarkerIcon from '@/public/svgs/pawzone/park.svg';
import Star from '@/public/svgs/Pawzone/star.svg';

export default function Marker({
  text,
  rating,
}: {
  text: string;
  rating: number;
}) {
  return (
    <div className="flex min-w-[126px] justify-center items-center bg-white rounded-[100px] border border-primary-200 p-2 gap-1">
      <div className="bg-primary-200 rounded-full p-2">
        <MarkerIcon className="w-[22px] h-[22px] fill-white" />
      </div>
      <div className="flex flex-col">
        <span className="caption1 text-grey-800">{text}</span>
        <div className="flex gap-[2px]">
          <Star className="w-[14px] h-[14px] fill-yellow-100" />
          <span className="caption3 text-grey-800">
            {rating || '평가 없음'}
          </span>
        </div>
      </div>
    </div>
  );
}
