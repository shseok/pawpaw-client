import ShareIcon from '@/public/share.svg';
import NoticeIcon from '@/public/ChatCard/notice.svg';
import BadgeIcon from '@/public/Badge.svg';
import ChatCard from '.';

export default function SimpleChatCard() {
  return (
    <ChatCard>
      <ChatCard.Header justify="between">
        <div className="flex items-center w-full gap-1">
          <ChatCard.Title title="강아지 방광암 TCC 정보 공유해요" />
          <BadgeIcon />
        </div>
        <button type="button" onClick={() => alert('d')}>
          <ShareIcon className="w-6 h-6" />
        </button>
      </ChatCard.Header>
      <div className="flex justify-between w-full">
        <ChatCard.Description description="병을 앓고있는 노견  보호자님들 이야기 나눠요" />
        <div>
          <NoticeIcon className="w-7 h-7" />
        </div>
      </div>
    </ChatCard>
  );
}
