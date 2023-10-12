import { Skeleton } from '../ui';

export default function ChatUserListLoading() {
  return (
    <ul className="w-full h-full">
      {new Array(3).fill('').map((_, index) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="flex gap-3 px-5 items-center py-3 h-fit rounded-[10px]"
        >
          <Skeleton className="rounded-full w-14 h-14" />
          <div className="flex flex-col gap-2">
            <Skeleton className="w-20 h-5 rounded-full" />
            <Skeleton className="w-32 h-5 rounded-full" />
          </div>
        </li>
      ))}
    </ul>
  );
}
