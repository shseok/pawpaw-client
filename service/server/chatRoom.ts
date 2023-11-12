import { BoardList, ChatList, ChatRoomInfo } from '@/types/types';
import { cookies } from 'next/headers';

const generateOptions = () =>
  ({
    credentials: 'include',
    headers: { Cookie: `ACCESS=${cookies().get('ACCESS')?.value}` },
  }) as const;
const ITEM_PER_PAGE = 6;

// 페이지별로 나누어져있는 채팅방 요청 함수
export async function fetchFilteredChatRooms(
  query: string,
): Promise<ChatList[]> {
  const options = generateOptions();

  const url = `${process.env.SERVER_API_URL}/api/chatroom/search?query=${query}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ChatRoomList Error Code:${response.status}`,
    );
  }
  return response.json();
}
// 페이지별로 나누어져있는 게시글 요청 함수
export async function fetchFilteredBoards(
  query: string,
  page: number = 1,
): Promise<BoardList> {
  const options = generateOptions();
  const url = `${process.env.SERVER_API_URL}/api/board/search?pageNumber=${page}&pageSize=${ITEM_PER_PAGE}&query=${query}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch BoardList Error Code: ${response.status}`);
  }
  return response.json();
}
// 검색된 게시물의 총갯수를 구하여 총 페이지를 계산하는 함수
export async function fetchBoardsPages(query: string) {
  const options = generateOptions();

  const url = `${process.env.SERVER_API_URL}/api/board/search?query=${query}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch BoardList Error Code: ${response.status}`);
  }
  const data = await response.json();
  const totalPage = Math.ceil(data.content.length / ITEM_PER_PAGE);
  return totalPage;
}

// 검색된 채팅방의 총갯수를 구하여 총 페이지를 계산하는 함수
export async function fetchChatRoomsPage(query: string) {
  const options = generateOptions();

  const url = `${process.env.SERVER_API_URL}/api/chatroom/search?query=${query}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ChatroomList Error Code: ${response.status}`,
    );
  }
  const data = await response.json();
  const totalPage = Math.ceil(data.length / ITEM_PER_PAGE);
  return totalPage;
}

// 채팅방 정보 조회 함수
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
