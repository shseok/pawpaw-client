'use client';

import { useRouter } from 'next/navigation';
import ShareIcon from '@/public/svgs/ShareNetwork.svg';
import BadgeIcon from '@/public/svgs/Badge.svg';
import { RecommendedChatList } from '@/types/types';
import { joinChatRoom } from '@/service/chatRoom';
import copyToClipBoard from '@/utils/copyToClipBoard';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/constant/query-keys';
import { ChatCard } from '.';
import { Button, Divider, TagList } from '../ui';

export default function NormalChatCard({ ...list }: RecommendedChatList) {
  const {
    description,
    hashTagList,
    id,
    managerImageUrl,
    managerName,
    name,
    participantNumber,
  } = list;
  const router = useRouter();
  const queryClient = useQueryClient();
  const enterChatRoom = async () => {
    if (window.confirm('채팅방에 입장하시겠습니까?')) {
      await joinChatRoom(id);
      queryClient.invalidateQueries([queryKeys.ENTERED_CHAT_LIST]);
      router.push(`/chat/${id}`);
    }
    return false;
  };
  return (
    <ChatCard>
      <ChatCard.Header justify="between">
        <ChatCard.Title title={name} />

        <div className="flex items-center gap-1">
          <BadgeIcon />
          <button
            aria-label="Copy Button"
            type="button"
            onClick={() =>
              copyToClipBoard(
                `${process.env.NEXT_PUBLIC_CLIENT_URL}/chat/${id}`,
              )
            }
          >
            <ShareIcon className="w-6 h-6" />
          </button>
        </div>
      </ChatCard.Header>
      <ChatCard.Body>
        <ChatCard.Description description={description} />
        <TagList list={hashTagList} />
      </ChatCard.Body>
      <Divider type="horizontal" />
      <div className="flex justify-between w-full">
        <ChatCard.Info
          image={managerImageUrl}
          name={managerName}
          participants={participantNumber}
        />
        <Button onClickAction={enterChatRoom}>입장하기</Button>
      </div>
    </ChatCard>
  );
}
