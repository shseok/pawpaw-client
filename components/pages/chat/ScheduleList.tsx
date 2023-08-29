'use client';

import FlexBox from '@/components/ui/FlexBox';
import ScheduleCard from './ScheduleCard';
import ScheduleDropdownButton from './ScheduleDropdownButton';

export default function Schedule() {
  return (
    <FlexBox direction="column" className="gap-5 px-8 pt-8 h-1/2">
      <FlexBox as="header" justify="between" className="w-full">
        <h2 className="header2">스케줄</h2>
        <ScheduleDropdownButton />
      </FlexBox>
      <ul className="flex flex-col w-full gap-5 p-2 overflow-auto scrollbar-hide">
        {Array.from({ length: 4 }).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ScheduleCard key={i} />
        ))}
      </ul>
    </FlexBox>
  );
}
