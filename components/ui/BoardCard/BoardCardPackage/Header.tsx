import useRelativeTime from '@/hooks/common/useRelativeTime';
import Avatar from '../../Avatar';
import FlexBox from '../../FlexBox';
import BoardCardDropdown from './BoardCardDropdown';

export default function BoardCardHeader({
  userName,
  userImage,
  createdDate,
}: {
  userName: string;
  userImage: string;
  createdDate: string;
}) {
  return (
    <FlexBox justify="between" className="w-full">
      <FlexBox className="gap-[10px]">
        <Avatar size="xl" image={userImage} name={String(userName)} />
        <FlexBox direction="column" align="start" className="gap-1">
          <FlexBox className="gap-2">
            <div className="header4 text-grey-800">{userName}</div>
          </FlexBox>
          <div className="caption2 text-grey-400">
            {useRelativeTime(createdDate)}
          </div>
        </FlexBox>
      </FlexBox>
      <BoardCardDropdown />
    </FlexBox>
  );
}
