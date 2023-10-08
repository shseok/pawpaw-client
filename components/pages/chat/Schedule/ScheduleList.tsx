'use client';

import FlexBox from '@/components/ui/FlexBox';
import useGetScheduleList from '@/hooks/queries/useGetScheduleList';
import ScheduleCard from './ScheduleCard';
import ScheduleDropdownButton from './ScheduleDropdownButton';

export default function ScheduleList({ roomId }: { roomId: string }) {
  const { data: scheduleList, isLoading } = useGetScheduleList(roomId);
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <FlexBox direction="column" className="gap-5 px-8 pt-8 h-1/2">
      <FlexBox as="header" justify="between" className="w-full">
        <h2 className="header2">스케줄</h2>
        <ScheduleDropdownButton />
      </FlexBox>
      <ul className="flex flex-col w-full gap-5 p-2 overflow-auto scrollbar-hide">
        {scheduleList?.length === 0 ? (
          <p className="header3">등록된 스케줄이 없어요.📁</p>
        ) : (
          scheduleList?.map((schedule) => (
            <ScheduleCard key={schedule.id} {...schedule} />
          ))
        )}
      </ul>
    </FlexBox>
  );
}
