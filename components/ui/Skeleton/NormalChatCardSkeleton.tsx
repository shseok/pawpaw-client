import { Skeleton, Divider } from '../ui';

export default function NormalChatCardSkeleton() {
  return (
    <div className="w-full flex flex-col shadow-chatCard gap-2 max-w-[517px] p-4 sm:p-6 rounded-[10px]">
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
  );
}
