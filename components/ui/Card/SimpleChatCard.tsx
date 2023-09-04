import ShareIcon from '@/public/share.svg';
import ChatCard from '.';
import Badge from '../Badge';

export default function SimpleChatCard() {
  return (
    <ChatCard>
      <ChatCard.Header justify="between">
        <div className="flex items-center w-full">
          <ChatCard.Title title="강아지 방광암 TCC 정보 공유해요" />
          <Badge />
        </div>
        <button type="button" onClick={() => alert('d')}>
          <ShareIcon className="w-6 h-6" />
        </button>
      </ChatCard.Header>
      <ChatCard.Description description="병을 앓고있는 노견  보호자님들 이야기 나눠요" />
    </ChatCard>
  );
}
