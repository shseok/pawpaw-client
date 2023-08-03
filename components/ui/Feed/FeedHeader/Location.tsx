import FlexBox from "../../FlexBox";
import Image from "next/image";

export default function Location() {
  return (
    <FlexBox className="gap-[12px]">
      <Image
        src="/Feed/desktop/currentPlaceBtn.svg"
        alt="현재위치로"
        width={24}
        height={24}
      />
      <div>
        서울특별시 마포구 <span className="font-bold">연남동</span>
      </div>
      <div className="text-neutral-500 p-[8px] underline underline-offset-2">
        동네 설정하기
      </div>
    </FlexBox>
  );
}
