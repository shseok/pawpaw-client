import Avatar from "../../Avatar";
import Button from "../../Button";
import FlexBox from "../../FlexBox";

export default function Upload() {
  return (
    <FlexBox
      direction="column"
      className="bg-[#F5FFF6] p-[20px] border-[1px] rounded-[10px] w-full"
    >
      <FlexBox className="w-full gap-[24px]">
        <Avatar
          size="xxl"
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
  );
}
