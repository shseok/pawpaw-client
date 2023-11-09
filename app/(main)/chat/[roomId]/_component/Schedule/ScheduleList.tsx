'use client';

import FlexBox from '@/components/ui/FlexBox';
import useGetScheduleList from '@/hooks/queries/useGetScheduleList';
import useGetChatRoomUserList from '@/hooks/queries/useGetChatRoomUserList';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import LoadingIcon from '@/public/svgs/loading.svg';
import ScheduleCard from './ScheduleCard';
import ScheduleDropdownButton from './ScheduleDropdownButton';

export default function ScheduleList({ roomId }: { roomId: string }) {
  const { data: scheduleList, isLoading } = useGetScheduleList(roomId);
  const { data: userList } = useGetChatRoomUserList(roomId);
  const { data: userInfo } = useGetUserInfo();
  const isManager =
    userList?.find((user) => user.role === 'MANAGER')?.nickname ===
    userInfo?.nickname;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-auto">
        <LoadingIcon className="w-10 h-10 animate-spin" />
      </div>
    );
  }
  return (
    <FlexBox
      direction="column"
      justify="start"
      className="gap-5 px-8 pt-8 h-1/2"
    >
      <FlexBox as="header" justify="between" className="w-full">
        <h2 className="header2">스케줄</h2>
        {isManager && <ScheduleDropdownButton />}
      </FlexBox>
      <ul className="flex flex-col w-full max-w-md gap-5 p-2 overflow-auto scrollbar-hide">
        {scheduleList?.length === 0 ? (
          <p className="header3">등록된 스케줄이 없어요.📁</p>
        ) : (
          scheduleList?.map((schedule) => (
            <ScheduleCard
              key={schedule.id}
              {...schedule}
              isManager={isManager}
            />
          ))
        )}
      </ul>
    </FlexBox>
  );
}
