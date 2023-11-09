import { BoardList, ChatList, ChatRoomInfo } from '@/types/types';
import { cookies } from 'next/headers';

const options = {
  credentials: 'include',
  headers: {
    Cookie: `ACCESS=${cookies().get('ACCESS')?.value}`,
  },
} as const;
export async function fetchFilteredChatRooms(
  query: string,
): Promise<ChatList[]> {
  const url = `${process.env.SERVER_API_URL}/api/chatroom/search?query=${query}`;
  const response = await fetch(url, options);
  return response.json();
}
export async function fetchFilteredBoards(
  query: string,
  page: number = 1,
): Promise<BoardList> {
  const url = `${process.env.SERVER_API_URL}/api/board/search?pageNumber=${page}&pageSize=4&query=${query}`;
  const response = await fetch(url, options);
  return response.json();
}
export async function getChatRoomInfo(roomId: string): Promise<ChatRoomInfo> {
  const url = `${process.env.SERVER_API_URL}/api/chatroom/${roomId}`;
  const response = await fetch(url, {
    credentials: 'include',
    headers: {
      Cookie: `ACCESS=${cookies().get('ACCESS')?.value}`,
    },
  });
  return response.json();
}
