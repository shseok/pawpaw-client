import { cookies } from 'next/headers';

const options = {
  credentials: 'include',
  headers: {
    Cookie: `ACCESS=${cookies().get('ACCESS')?.value}`,
  },
} as const;

export async function fetchFilteredChatRooms(query: string) {
  const url = `${process.env.SERVER_API_URL}/api/chatroom/search?query=${query}`;
  const response = await fetch(url, options);
  return response.json();
}
export async function fetchFilteredBoards(query: string) {
  const url = `${process.env.SERVER_API_URL}/api/board/search?pageNumber=1&pageSize=4&query=${query}`;
  const response = await fetch(url, options);
  return response.json();
}
