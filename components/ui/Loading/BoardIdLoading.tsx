import { Divider, FlexBox, Skeleton } from '../ui';

export default function BoardIdLoading() {
  return (
    <FlexBox
      direction="column"
      justify="between"
      className="w-full h-full gap-4 p-9"
    >
      <FlexBox justify="start" className="w-full gap-[10px]">
        <Skeleton className="rounded-full w-14 h-14" />
        <Skeleton className="h-10 rounded-lg w-60" />
      </FlexBox>
      <Divider type="horizontal" />
      <div className="flex flex-row w-full h-full gap-9">
        <Skeleton className="w-2/3 h-full rounded-lg" />
        <div className="flex flex-col w-1/3 gap-3">
          <Skeleton className="w-full rounded-lg h-1/3" />
          <Divider type="horizontal" />
          <Skeleton className="w-full rounded-lg h-2/3" />
        </div>
      </div>
    </FlexBox>
  );
}
