import { Skeleton, Divider } from '../ui';

export default function EnteredChatLoading() {
  return (
    <ul className="flex min-w-full gap-5 ">
      <li className="border w-full h-full max-h-[538px] max-w-[518px] rounded-[10px]">
        <Skeleton className="rounded-t-[10px] w-full h-80" />
        <div className="flex flex-col gap-4 p-5">
          <div className="flex items-center justify-between">
            <Skeleton className="w-40 h-6 rounded-lg" />
            <Skeleton className="w-20 h-6 rounded-lg" />
          </div>
          <Divider type="horizontal" />
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <Skeleton className="w-10 h-10 rounded-full" />
              <Skeleton className="w-24 h-8 rounded-lg" />
            </div>
            <Skeleton className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </li>
    </ul>
  );
}
