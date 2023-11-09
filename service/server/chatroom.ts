import { ChatRoomInfo } from '@/types/types';
import { cookies } from 'next/headers';

export default async function getChatRoomInfo(
  roomId: string,
): Promise<ChatRoomInfo> {
  const url = `${process.env.SERVER_API_URL}/api/chatroom/${roomId}`;
  const response = await fetch(url, {
    credentials: 'include',
    headers: {
      Cookie: `ACCESS=${cookies().get('ACCESS')?.value}`,
    },
  });
  return response.json();
}
