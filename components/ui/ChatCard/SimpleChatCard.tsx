import ShareIcon from '@/public/svgs/ShareNetwork.svg';
import BadgeIcon from '@/public/svgs/Badge.svg';
import { ChatList } from '@/types/types';
import copyToClipBoard from '@/utils/copyToClipBoard';
import { joinChatRoom } from '@/service/chatRoom';
import { useRouter } from 'next/navigation';
import Toast from '@/utils/notification';
import { ChatCard } from '.';
import Button from '../Button';

export default function SimpleChatCard({ ...info }: ChatList) {
  const { description, id, name } = info;
  const router = useRouter();
  const onEnterChatRoom = async () => {
    if (window.confirm(`${name}방에 입장하시겠습니까?`)) {
      try {
        await joinChatRoom(id);
        router.push(`/chat/${id}`);
      } catch (error) {
        if (error instanceof Error) {
          Toast.error(error.message);
        }
      }
    }
  };
  return (
    <ChatCard>
      <ChatCard.Header justify="between">
        <div className="flex items-center w-full gap-1">
          <ChatCard.Title title={name} />
          <BadgeIcon />
        </div>
        <button
          type="button"
          onClick={() => copyToClipBoard(`https://www.paw-paw.xyz/chat/${id}`)}
          aria-label="Share Chat Url"
        >
          <ShareIcon className="w-6 h-6" />
        </button>
      </ChatCard.Header>
      <div className="flex items-center justify-between w-full">
        <ChatCard.Description description={description} />
        <Button size="xs" className="w-14" onClickAction={onEnterChatRoom}>
          입장
        </Button>
      </div>
    </ChatCard>
  );
}
