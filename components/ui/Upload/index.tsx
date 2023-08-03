import FlexBox from "@/components/ui/FlexBox";
import Image from "next/image";
import Button from "../Button";
import Avatar from "../Avatar";

export default function Upload() {
  return (
    <>
      <FlexBox
        direction="column"
        align="start"
        justify="between"
        className="gap-[20px] w-full"
      >
        <div className="text-[32px]/[40px]">
          <span className="text-[#08995C]">수박이</span>와 좋은 하루 되세요!
        </div>
        <FlexBox
          direction="column"
          align="start"
          justify="between"
          className="gap-[16px] w-full"
        >
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
          <FlexBox
            direction="column"
            className="bg-[#F5FFF6] p-[20px] border-[1px] rounded-[10px] w-full"
          >
            <FlexBox className="w-full gap-[24px]">
              <Avatar
                size="xxlarge"
                user_img="/Feed/desktop/tempUserProfilePic.svg"
                user_name="수박이"
              />
              <textarea
                className="bg-[#F5FFF6] w-full h-[77px] resize-none"
                placeholder="동네 주민들에게 즐거운 소식을 전해보세요!"
              />
            </FlexBox>
            <FlexBox justify="end" className="gap-[10px] w-full">
              <Button size="xl" variant="secondary">
                파일
              </Button>
              <Button size="xl">업로드</Button>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
}
