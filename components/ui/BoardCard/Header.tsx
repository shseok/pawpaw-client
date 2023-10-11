import Avatar from '../Avatar';
import Button from '../Button';
import FlexBox from '../FlexBox';
import BoardCardDropdown from './BoardCardDropdown';

export default function BoardCardHeader({ userId }: { userId: string }) {
  return (
    <FlexBox justify="between" className="w-full">
      <FlexBox className="gap-[10px]">
        <Avatar
          size="xl"
          image="/Feed/desktop/tempProfilePic.svg"
          name={String(userId)}
        />
        <FlexBox direction="column" align="start" className="gap-1">
          <FlexBox className="gap-2">
            <div className="header4 text-grey-800">{userId}</div>
            <Button size="xs" variant="secondary">
              팔로우
            </Button>
          </FlexBox>
          <div className="caption2 text-grey-400">
            고양이 아무튼 자격증 보유중 ・ 3시간 전
          </div>
        </FlexBox>
      </FlexBox>
      <BoardCardDropdown />
    </FlexBox>
  );
}
