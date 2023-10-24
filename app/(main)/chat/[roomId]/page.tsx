import ChatRoom from '@/components/pages/chat/ChatRoom/ChatRoom';
import ChatUserList from '@/components/pages/chat/ChatRoom/ChatUserList';
import ScheduleList from '@/components/pages/chat/Schedule/ScheduleList';
import { ChatRoomInfo } from '@/types/types';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

// 쿠키에 접근해야해서 해당파일에서 fetch 함수를 작성하였습니다.
async function getChatRoomInfo(roomId: string): Promise<ChatRoomInfo> {
  const url = `${process.env.SERVER_API_URL}/api/chatroom/${roomId}`;
  const response = await fetch(url, {
    headers: {
      Cookie: `ACCESS=${cookies().get('ACCESS')?.value}`,
    },
  });
  return response.json();
}

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
