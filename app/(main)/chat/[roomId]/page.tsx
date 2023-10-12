import ChatRoom from '@/components/pages/chat/ChatRoom/ChatRoom';
import ChatUserList from '@/components/pages/chat/ChatRoom/ChatUserList';
import ScheduleList from '@/components/pages/chat/Schedule/ScheduleList';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export async function generateMetadata({
  params,
}: {
  params: { roomId: string };
}): Promise<Metadata> {
  const { roomId } = params;
  const url = `https://pawpawdev.duckdns.org/api/chatroom/${roomId}`;
  const response = await fetch(url, {
    headers: {
      Cookie: `ACCESS=${cookies().get('ACCESS')?.value}`,
    },
  });
  const { name, description, participantNumber, coverUrl } =
    await response.json();
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

export default function ChatRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  const { roomId } = params;
  return (
    <main className="flex w-screen">
      <ChatRoom />
      <aside className="flex-col hidden w-3/6 h-screen min-w-fit tablet:flex">
        <ChatUserList roomId={roomId} />
        <ScheduleList roomId={roomId} />
      </aside>
    </main>
  );
}
