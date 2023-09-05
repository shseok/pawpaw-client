import FlexBox from '../../FlexBox';
import Button from '../../Button';
import Avatar from '../../Avatar';
import PostDropdownButton from './PostDropdownButton';

export default function PostHeader({ userId }: { userId: number }) {
  return (
    <FlexBox justify="between" className="w-full">
      <FlexBox className="gap-[10px]">
        <Avatar
          size="xl"
          image="/Feed/desktop/tempProfilePic.svg"
          name={String(userId)}
        />
        <FlexBox direction="column" align="start" className="gap-[4px]">
          <FlexBox className="gap-[8px]">
            <div className="header4 text-grey-800">{userId}</div>
            <Button size="mini" variant="secondary">
              팔로우
            </Button>
          </FlexBox>
          <div className="caption2 text-grey-400">
            고양이 아무튼 자격증 보유중 ・ 3시간 전
          </div>
        </FlexBox>
      </FlexBox>
      <PostDropdownButton />
    </FlexBox>
  );
}
