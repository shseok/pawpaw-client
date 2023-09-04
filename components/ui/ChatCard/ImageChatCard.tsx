import Image from 'next/image';
import Link from 'next/link';
import NoticeIcon from '@/public/ChatCard/notice.svg';
import ScheduleIcon from '@/public/ChatCard/schedule.svg';
import ChatCard from '.';
import Divider from '../Divider';
import TagList from '../TagList';
import FlexBox from '../FlexBox';

export default function ImageChatCard() {
  return (
    <Link href="/">
      <Image
        src="/default.png"
        alt="채팅방 이미지"
        width={300}
        height={200}
        priority
        className="w-full"
      />
      <ChatCard>
        <ChatCard.Header justify="between">
          <ChatCard.Title title="같이 캠핑가요! 파주 반려캠핑 모임" />
          <p className="text-gray-400 body2">최근 대화 30분 전</p>
        </ChatCard.Header>
        <TagList list={['캠핑', '파주', '펫캠']} />
        <Divider type="horizontal" />
        <FlexBox justify="between" className="w-full">
          <ChatCard.Info image="/default.png" name="윤민덕" participants={21} />
          <div className="flex items-center gap-3">
            <NoticeIcon className="w-10 h-10" />
            <ScheduleIcon className="w-10 h-10" />
          </div>
        </FlexBox>
      </ChatCard>
    </Link>
  );
}
