import NormalChatCardSkeleton from '@/components/ui/Skeleton/NormalChatCardSkeleton';

export default function ChatRoomsLoading() {
  return (
    <div className="grid h-full grid-cols-1 gap-4 p-2 sm:grid-cols-2 ">
      {Array.from({ length: 4 })
        .fill('')
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <NormalChatCardSkeleton key={i} />
        ))}
    </div>
  );
}
