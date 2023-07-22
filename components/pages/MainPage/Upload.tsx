import FlexBox from "@/components/ui/FlexBox";

export default function Upload() {
  return (
    <>
      <FlexBox
        direction="column"
        align="start"
        justify="between"
        className="h-full"
      >
        <div className="text-[32px]/[40px]">
          <span className="text-[#08995C]">수박이</span>와 좋은 하루 되세요!
        </div>
        <FlexBox
          direction="column"
          align="start"
          justify="between"
          className="h-full"
        >
          <FlexBox>
            <div>
              서울특별시 마포구 <span className="font-bold">연남동</span>
            </div>
            <div className="text-neutral-500 p-[8px] underline underline-offset-2">
              동네 설정하기
            </div>
          </FlexBox>
          <div className="bg-red-300">하하</div>
        </FlexBox>
      </FlexBox>
    </>
  );
}
