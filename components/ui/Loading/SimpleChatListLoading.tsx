import { Skeleton } from '../ui';

export default function SimpleChatListLoading() {
  return (
    <div className="flex flex-col gap-3">
      {new Array(3).fill('').map((_, index) => (
        <div
          className="rounded-[10px] bg-white shadow-chatCard w-96 flex flex-col p-6"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          <div className="flex flex-col gap-3">
            <Skeleton className="w-32 h-8 rounded-md" />
            <div className="flex justify-between">
              <Skeleton className="h-6 rounded-md w-52" />
              <Skeleton className="w-12 h-6 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
