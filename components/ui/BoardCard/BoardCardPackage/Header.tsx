import useRelativeTime from '@/hooks/common/useRelativeTime';
import { Board } from '@/types/types';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import Avatar from '../../Avatar';
import FlexBox from '../../FlexBox';
import BoardCardDropdown from './BoardCardDropdown';

export default function BoardCardHeader({ board }: { board: Board }) {
  const { data: user } = useGetUserInfo();

  return (
    <FlexBox justify="between" className="w-full">
      <FlexBox className="gap-[10px]">
        <Avatar size="xl" image={board.userImageUrl} name={board.writer} />
        <FlexBox direction="column" align="start" className="gap-1">
          <FlexBox className="gap-2">
            <div className="header4 text-grey-800">{board.writer}</div>
          </FlexBox>
          <div className="caption2 text-grey-400">
            {useRelativeTime(board.createdDate)}
          </div>
        </FlexBox>
      </FlexBox>
      <BoardCardDropdown
        boardId={board.id}
        isMyBoard={board.userId === user?.userId}
      />
    </FlexBox>
  );
}
