import Button from "@/components/ui/Button";
import FlexBox from "@/components/ui/FlexBox";
import Image from "next/image";

export default function Post() {
  return (
    <>
      <div className="w-full p-[36px] rounded-[10px] border-[1px] border-[#E9EBED] gap-[16px]">
        <FlexBox direction="column" justify="between" gap={36}>
          <FlexBox justify="between" className="w-full">
            <FlexBox>
              <Image
                src={`main/desktop/tempProfilePic.svg`}
                alt="프로필 사진"
                width={56}
                height={56}
              />
              <FlexBox direction="column" align="start">
                <FlexBox>
                  <div>냥이최고</div>
                  <Button>팔로우</Button>
                </FlexBox>
                <div>고양이 아무튼 자격증 보유중 • 3시간 전</div>
              </FlexBox>
            </FlexBox>
            <Image
              src={"main/desktop/dot.svg"}
              alt="더보기"
              width={24}
              height={24}
            />
          </FlexBox>
          <FlexBox justify="between" className="w-full">
            <Image
              src={`main/desktop/tempPostPic.svg`}
              alt="게시글 사진"
              width={300}
              height={260}
            />
            <FlexBox>
              <div>천재 고양이 구름이를 소개합니다</div>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </div>
    </>
  );
}
