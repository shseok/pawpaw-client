import { Divider, Skeleton } from '../ui';

export default function TrendingChatListLoading() {
  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 min-[1921px]:grid-cols-4">
      {new Array(6).fill('').map((_, i) => (
        <div
          className="w-full flex flex-col gap-2 max-w-[517px] shadow-chatCard p-4 sm:p-6 rounded-[10px]"
          // eslint-disable-next-line react/no-array-index-key
          key={`trending-${i}`}
        >
          <Skeleton className="w-20 h-8 rounded-lg mb-2.5" />
          <Skeleton className="w-40 h-8 mb-8 rounded-lg" />
          <Divider type="horizontal" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Skeleton className="w-10 h-10 rounded-full " />
              <Skeleton className="w-20 h-5 rounded-lg" />
            </div>
            <Skeleton className="w-20 h-10 rounded-[10px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
