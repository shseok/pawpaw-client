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
    <Link
      href={`/chat/${id}`}
      className="flex flex-col rounded-[10px] h-[518px]"
    >
      <div className="relative w-full overflow-hidden h-2/3">
        <Image
          src={coverUrl ?? '/images/default.png'}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover rounded-t-[10px]"
        />
      </div>
      <ChatCard className="h-1/3">
        <ChatCard.Header justify="between">
          <ChatCard.Title title={name} />
          <p className="text-gray-400 truncate body2">
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
