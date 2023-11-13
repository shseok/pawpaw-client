import ChatRoom from '@/app/(main)/chat/[roomId]/_component/ChatRoom/ChatRoom';
import ChatUserList from '@/app/(main)/chat/[roomId]/_component/ChatRoom/ChatUserList';
import ScheduleList from '@/app/(main)/chat/[roomId]/_component/Schedule/ScheduleList';
import { getChatRoomInfo } from '@/service/server/chatRoom';

import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { roomId: string };
}): Promise<Metadata> {
  const { roomId } = params;
  const { coverUrl, description, name, participantNumber } =
    await getChatRoomInfo(roomId);
  return {
    title: `${name} | Chat`,
    description,
    openGraph: {
      images: { url: coverUrl, alt: description },
      title: name,
      description: `현재 ${participantNumber}명이 참여하고있는 오픈채팅방 입니다.`,
      url: `/chat/${roomId}`,
    },
  };
}

export default async function ChatRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  const { roomId } = params;
  const { name } = await getChatRoomInfo(roomId);

  return (
    <main className="flex flex-1 w-screen">
      <ChatRoom roomId={roomId} title={name} />
      <aside className="flex-col hidden w-3/6 h-screen min-w-fit tablet:flex">
        <ChatUserList roomId={roomId} />
        <ScheduleList roomId={roomId} />
      </aside>
    </main>
  );
}
