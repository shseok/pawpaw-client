import ShareIcon from '@/public/share.svg';
import BadgeIcon from '@/public/Badge.svg';
import ChatCard from '.';
import TagList from '../TagList';
import Divider from '../Divider';
import Button from '../Button';

export default function NormalChatCard() {
  return (
    <ChatCard>
      <ChatCard.Header justify="between">
        <div className="flex items-center gap-1">
          <ChatCard.Title title="천하제일 내 반려동물 자랑방" />
          <BadgeIcon />
        </div>
        <button type="button">
          <ShareIcon className="w-6 h-6" />
        </button>
      </ChatCard.Header>
      <ChatCard.Body>
        <ChatCard.Description description="반려동물을 키우는 사람이라면 누구나 들어와서 자랑해주세요~" />
        <TagList list={['20대', '30대', '강아지', '노원구']} />
      </ChatCard.Body>
      <Divider type="horizontal" />
      <div className="flex justify-between w-full">
        <ChatCard.Info
          image="/default.png"
          name="지상최강감자"
          participants={24}
        />
        <Button>입장하기</Button>
      </div>
    </ChatCard>
  );
}
