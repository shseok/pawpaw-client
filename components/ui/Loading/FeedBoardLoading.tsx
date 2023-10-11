import FlexBox from '../FlexBox';
import { Divider, Skeleton } from '../ui';

export default function FeedBoardLoading() {
  return (
    <FlexBox direction="column" className="gap-10">
      {new Array(10).fill('').map((_, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={`board-${index}`}
          className=" w-[920px] tablet:min-w-[700px]"
        >
          <FlexBox
            direction="column"
            justify="between"
            className="h-[500px] p-9 rounded-[10px] border-[1px] border-grey-200 gap-4"
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
        </div>
      ))}
    </FlexBox>
  );
}
