import Avatar from '../../Avatar';
// import Button from '../../Button';
import FlexBox from '../../FlexBox';
import BoardCardDropdown from './BoardCardDropdown';

export default function BoardCardHeader({ userName }: { userName: string }) {
  return (
    <FlexBox justify="between" className="w-full">
      <FlexBox className="gap-[10px]">
        <Avatar
          size="xl"
          // TODO : 유저 프로필 사진 연결!
          image="/Feed/desktop/tempProfilePic.svg"
          name={String(userName)}
        />
        <FlexBox direction="column" align="start" className="gap-1">
          <FlexBox className="gap-2">
            <div className="header4 text-grey-800">{userName}</div>
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
