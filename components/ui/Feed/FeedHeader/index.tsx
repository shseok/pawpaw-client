import FlexBox from '@/components/ui/FlexBox';
import Title from './Title';
import Location from './Location';
import Upload from './Upload';

export default function FeedHeader() {
  return (
    <FlexBox
      direction="column"
      align="start"
      justify="between"
      className="w-full gap-5 "
    >
      <Title />
      <FlexBox
        direction="column"
        align="start"
        justify="between"
        className="w-full gap-4"
      >
        <Location />
        <Upload />
      </FlexBox>
    </FlexBox>
  );
}
