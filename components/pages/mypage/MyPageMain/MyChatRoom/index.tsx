import useGetEnteredChatList from '@/hooks/queries/useGetEnteredChatList';
import ImageChatCard from '@/components/ui/ChatCard/ImageChatCard';
import MyChatLoading from '@/components/ui/Loading/MyChatLoading';

export default function MyChatRoom() {
  const { data, isLoading } = useGetEnteredChatList();
  if (isLoading) {
    return <MyChatLoading />;
  }
  return (
    <div className="grid w-full gap-5 tablet:grid-cols-2 tablet:mt-4 place-items-center">
      {data && data.map((list) => <ImageChatCard {...list} />)}
    </div>
  );
}
