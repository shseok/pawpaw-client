import Image from 'next/image';
import Link from 'next/link';
import NoticeIcon from '@/public/ChatCard/notice.svg';
import ScheduleIcon from '@/public/ChatCard/schedule.svg';
import { EnteredChatList } from '@/types/types';
import { FlexBox, Divider, TagList, ChatCard } from '@/components/ui/ui';

export default function ImageChatCard({ ...list }: EnteredChatList) {
  const {
    coverUrl,
    description,
    hasNotice,
    hasSchedule,
    hashTagList,
    id,
    lastChatTime,
    managerImageUrl,
    managerName,
    name,
    participantNumber,
  } = list;
  return (
    <Link href="/" className="w-fit">
      <ChatCard>
        <Image
          src={coverUrl ?? '/default.png'}
          alt={name}
          width={300}
          height={200}
          priority
          className="w-full h-80 rounded-[10px]"
        />
        <ChatCard.Header justify="between">
          <ChatCard.Title title={name} />
          <p className="text-gray-400 body2">
            {lastChatTime
              ? `최근 대화 ${lastChatTime}`
              : '최근 대화가 없어요.🥹'}
          </p>
        </ChatCard.Header>
        <TagList list={hashTagList} />
        <Divider type="horizontal" />
        <FlexBox justify="between" className="w-full">
          <ChatCard.Info
            image={managerImageUrl}
            name={managerName}
            participants={participantNumber}
          />
          <div className="flex items-center gap-3">
            <NoticeIcon className="w-10 h-10 " />
            <ScheduleIcon className="w-10 h-10" />
          </div>
        </FlexBox>
      </ChatCard>
    </Link>
  );
}
