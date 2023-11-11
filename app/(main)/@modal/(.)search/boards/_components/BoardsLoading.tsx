import { Skeleton, Divider } from '@/components/ui/ui';

export default function BoardsLoading() {
  return (
    <div className="grid h-full grid-cols-1 gap-4 p-2 sm:grid-cols-2 ">
      {Array.from({ length: 4 })
        .fill('')
        .map((_, i) => (
          <div
            className="flex flex-col shadow-chatCard rounded-[10px] px-6 py-4 gap-3"
            // eslint-disable-next-line react/no-array-index-key
            key={i}
          >
            <div className="flex items-center gap-4">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="flex flex-col gap-1">
                <Skeleton className="w-12 h-5 rounded-md" />
                <Skeleton className="w-20 h-5 rounded-md" />
              </div>
            </div>
            <Skeleton className="w-40 h-5 rounded-md" />
            <Divider type="horizontal" />
            <div className="flex items-center gap-1">
              <Skeleton className="w-10 h-5 rounded-md" />
              <Skeleton className="w-10 h-5 rounded-md" />
            </div>
          </div>
        ))}
    </div>
  );
}
