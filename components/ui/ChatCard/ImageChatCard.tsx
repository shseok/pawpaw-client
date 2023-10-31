import Image from 'next/image';
import Link from 'next/link';
import ScheduleIcon from '@/public/svgs/schedule.svg';
import { EnteredChatList } from '@/types/types';
import { FlexBox, Divider, TagList } from '@/components/ui/ui';
import { ChatCard } from '.';

export default function ImageChatCard({ ...list }: EnteredChatList) {
  const {
    coverUrl,
    hashTagList,
    id,
    lastChatTime,
    managerImageUrl,
    managerName,
    name,
    participantNumber,
    hasSchedule,
  } = list;
  return (
    <Link href={`/chat/${id}`} className="w-full">
      <ChatCard>
        <Image
          src={coverUrl ?? '/images/default.png'}
          alt={name}
          width={300}
          height={200}
          priority
          className="w-full  h-80 rounded-[10px]"
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
          {hasSchedule && <ScheduleIcon className="w-10 h-10" />}
        </FlexBox>
      </ChatCard>
    </Link>
  );
}
