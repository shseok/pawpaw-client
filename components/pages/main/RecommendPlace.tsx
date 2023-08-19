import Image from 'next/image';
import FlexBox from '@/components/ui/FlexBox';
import ArrowClockIcon from '@/public/ArrowClockwise.svg';

export default function RecommendPlace() {
  return (
    <FlexBox direction="column" className="w-full gap-3">
      <h3 className="flex items-center justify-between w-full header3">
        <p>
          <span className="text-primary-300">수박이</span>와 가기 좋은 장소
        </p>
        <button type="button">
          <ArrowClockIcon />
        </button>
      </h3>
      <FlexBox
        direction="column"
        className="w-full rounded-[10px] shadow-chatCard gap-5 p-5"
      >
        <Image
          src="/default.png"
          alt=""
          width={300}
          height={100}
          className="w-full h-32 rounded-[10px] object-fit"
        />
        <FlexBox direction="column" align="start" className="w-full gap-1">
          <p className="flex gap-1 body2">
            카페 멍스 <span className="body3 text-grey-300">4m</span>
          </p>
          <p className="body4">서을 특별시 송파구 송파동 31-2</p>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
