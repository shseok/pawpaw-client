import { ChatRoomUserList } from '@/types/types';
import { toast } from 'react-toastify';

interface ChatRoomType {
  image: File;
  body: {
    name: string;
    description: string;
    hashTagList: string[];
    searchable: boolean;
    locationLimit: boolean;
  };
}

export async function postChatRoom(chatRoomData: ChatRoomType) {
  const url = `/endpoint/api/chatroom`;
  const formData = new FormData();
  const { body, image } = chatRoomData;
  formData.append(
    'body',
    new Blob([JSON.stringify({ ...body })], { type: 'application/json' }),
  );
  formData.append('image', image);

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });
  return response.json();
}

export async function joinChatRoom(id: number) {
  const url = `/endpoint/api/chatroom/${id}/participants`;
  try {
    const response = await fetch(url, {
      method: 'POST',
    });
    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    }
    if (!response.ok) {
      throw new Error(`서버 오류:${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}
export async function getChatroomUserList(
  chatRoomId: string,
): Promise<ChatRoomUserList[]> {
  try {
    const url = `/endpoint/api/chatroom/${chatRoomId}/participants`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('채팅룸 참가 유저리스트를 불러오지 못하였습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    toast.error(error as string);
    throw error;
  }
}
export async function getScheduleList(roomId: string) {
  try {
    const url = `/endpoint/api/chatroom/${roomId}/schedule`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('스케줄 리스트를 불러오지 못하였습니다.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
