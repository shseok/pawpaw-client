import Avatar from '../../Avatar';
import Button from '../../Button';
import FlexBox from '../../FlexBox';

export default function Upload() {
  return (
    <FlexBox
      direction="column"
      className="bg-primary-50 p-5 border-[1px] border-primary-300 rounded-[10px] w-full"
    >
      <FlexBox justify="between" className="w-full gap-[24px]">
        <Avatar
          size="xxl"
          image="/Feed/desktop/tempUserProfilePic.svg"
          name="수박이"
        />
        <textarea
          className="bg-primary-50 w-full h-[77px] resize-none header4 text-grey-300"
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
