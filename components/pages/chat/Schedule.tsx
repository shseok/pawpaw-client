import FlexBox from '@/components/ui/FlexBox';
import DotsIcon from '@/public/tabler_dots.svg';
import ScheduleCard from './ScheduleCard';

export default function Schedule() {
  return (
    <FlexBox direction="column" className="gap-5 p-8 border h-1/2">
      <FlexBox as="header" justify="between" className="w-full">
        <h2 className="header2">스케줄</h2>
        <button type="button">
          <DotsIcon className="w-7 h-7" />
        </button>
      </FlexBox>
      <ul className="flex flex-col gap-5 p-2 overflow-auto scrollbar-hide">
        {Array.from({ length: 4 }).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ScheduleCard key={i} />
        ))}
      </ul>
    </FlexBox>
  );
}
