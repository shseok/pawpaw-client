import FlexBox from '@/components/ui/FlexBox';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import Title from './Title';
import Upload from './Upload';

export default function FeedHeader() {
  const { data } = useGetUserInfo();
  return (
    <FlexBox
      direction="column"
      align="start"
      justify="between"
      className="w-full gap-5 "
    >
      <Title nickname={data?.nickname} />
      <FlexBox
        direction="column"
        align="start"
        justify="between"
        className="w-full gap-4"
      >
        <Upload userImage={data?.imageUrl} nickname={data?.nickname} />
      </FlexBox>
    </FlexBox>
  );
}
