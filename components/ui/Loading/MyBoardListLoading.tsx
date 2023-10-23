import FlexBox from '../FlexBox';
import { Divider, Skeleton } from '../ui';

export default function MyBoardListLoading() {
  return (
    <div className="grid w-full gap-5 mt-10 tablet:grid-cols-2 tablet:mt-0">
      {new Array(10).fill('').map((_, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={`myBoard-${index}`}
          className="w-full"
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
            <div className="flex flex-col w-full h-full gap-3">
              <Skeleton className="w-full rounded-lg h-3/4" />
              <Divider type="horizontal" />
              <Skeleton className="w-full rounded-lg h-1/4" />
            </div>
          </FlexBox>
        </div>
      ))}
    </div>
  );
}
