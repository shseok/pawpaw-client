import useGetEnteredChatList from '@/hooks/queries/useGetEnteredChatList';
import ImageChatCard from '@/components/ui/ChatCard/ImageChatCard';
import EnteredChatLoading from '@/components/ui/Loading/EnteredChatLoading';

export default function MyChatRoom() {
  const { data, isLoading } = useGetEnteredChatList();
  if (isLoading) {
    return <EnteredChatLoading />;
  }
  return (
    <div className="grid w-full gap-5 tablet:grid-cols-2 tablet:mt-4">
      {data && data.map((list) => <ImageChatCard {...list} />)}
    </div>
  );
}
