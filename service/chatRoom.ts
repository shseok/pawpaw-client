import {
  ChatHistory,
  ChatRoomUserList,
  Schedule,
  ScheduleList,
  ChatRoomType,
} from '@/types/types';
import Toast from '@/utils/notification';
import { AuthError, ImageSizeError } from '@/lib/error';

// 채팅방 생성 API
export async function postChatRoom(chatRoomData: ChatRoomType) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom`;
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
  if (response.status === 413) {
    throw new Error('이미지 크기는 2MB를 초과할 수 없어요.😢');
  }
  if (!response.ok) {
    throw new Error('채팅방을 만들수 없어요. 잠시후 다시 시도해주세요.');
  }
  return response.json();
}
// 채팅룸 입장 API
export async function joinChatRoom(id: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${id}/participants`;
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
  });
  if (response.status === 401) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }
  if (!response.ok) {
    console.error(response.status);
    throw new Error(`채팅룸에 입장하지 못했어요. 잠시후 다시 시도해주세요.`);
  }
}
// 채팅룸 나가기 API
export async function leaveChatRoom(roomId: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}/participants`;
  const response = await fetch(url, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (response.status === 400) {
    Toast.error('방장은 채팅방 삭제만 가능해요.');
  }
  if (!response.ok) {
    console.error(response.status);
    throw new Error(`잠시후 다시 시도해주세요.`);
  }
}

// 현재 채팅룸에 참여중인 유저리스트 조회 API
export async function getChatroomUserList(
  chatRoomId: string,
): Promise<ChatRoomUserList[]> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${chatRoomId}/participants`;
  const response = await fetch(url, { credentials: 'include' });
  if (response.status === 400) {
    throw new Error('현재 참여하고 있지 않은 채팅룸 입니다.');
  }
  if (!response.ok) {
    throw new Error('채팅룸 참가 유저리스트를 불러오지 못하였습니다.');
  }
  return response.json();
}

// 채팅룸에 등록되어있는 종료되지않은 스케줄 리스트 조회 API
export async function getScheduleList(roomId: string): Promise<ScheduleList[]> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}/schedule`;
  const response = await fetch(url, { credentials: 'include' });
  if (!response.ok) {
    throw new Error('스케줄 리스트를 불러오지 못하였습니다.');
  }
  return response.json();
}

// 채팅룸 스케줄 등록 API
export async function postSchedule(
  roomId: string,
  scheduleInfo: Omit<Schedule, 'id'>,
) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}/schedule`;
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(scheduleInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(
      '스케줄을 생성하지 못하였습니다. 잠시후 다시 시도해주세요.🥲',
    );
  }
  return response.json();
}

// 채팅룸 스케줄 삭제 API
export async function deleteSchedule(roomId: string, scheduleId: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}/schedule/${scheduleId}`;
  const response = await fetch(url, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('스케줄 삭제에 실패했어요.🥲 잠시후 다시 시도해주세요.');
  }
}

// 현재 채팅에 참여중인 유저를 제외한 전체유저 검색 API
export async function getSearchedUserList(roomId: string, nickname: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}/non-participants?nickname=${nickname}`;
  const response = await fetch(url, { credentials: 'include' });
  return response.json();
}
// 현재 채팅에 참여중인 유저를 제외한 유저 초대 API
export async function inviteUserToChatRoom(
  roomId: string,
  userId: { userId: string },
) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}/invite`;
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(userId),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('유저를 초대하지 못했어요. 잠시후 다시 시도해주세요.');
  }
}

// 스케줄 참여 API
export async function joinSchedule(roomId: string, scheduleId: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}/schedule/${scheduleId}/participant`;
  const response = await fetch(url, { method: 'POST', credentials: 'include' });
  if (response.status === 401) {
    throw new AuthError('로그인이 필요합니다.');
  }
  if (response.status === 404) {
    throw new Error('삭제된 일정이어서 참여할 수 없어요.');
  }
  if (!response.ok) {
    throw new Error('잠시후 다시 시도해주세요.');
  }
}

// 스케줄 철회 API
export async function withdrawSchedule(roomId: string, scheduleId: number) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}/schedule/${scheduleId}/participant`;
    await fetch(url, { method: 'DELETE', credentials: 'include' });
  } catch (error) {
    console.error(error);
  }
}

// 채팅룸 이전 채팅기록 조회 API
export async function getChatHistory(
  roomId: string,
  targetId: number,
): Promise<ChatHistory> {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}/message?size=20`;
  if (targetId !== 0) {
    url += `&targetId=${targetId}`;
  }
  const response = await fetch(url, { credentials: 'include' });
  if (response.status === 401) {
    throw new AuthError('로그인이 필요합니다.');
  }
  if (response.status === 400) {
    throw new Error('현재 참여하고 있지 않은 채팅룸입니다.');
  }
  if (!response.ok) {
    throw new Error('잠시후 다시 시도해주세요.');
  }
  return response.json();
}

// 채팅룸 이미지 전송 API
export async function uploadChatImage(roomId: string, image: File) {
  const formData = new FormData();
  formData.append('multipartFile', image);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}/message/image`;
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });
  if (response.status === 413) {
    throw new ImageSizeError('2MB 이하의 이미지만 업로드 가능해요.🤯');
  }
}

// 채팅룸 방장 권한위임 API
export async function delegateRoomOwner(roomId: string, userId: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}/manager`;
  const response = await fetch(url, {
    method: 'PUT',
    credentials: 'include',
    body: JSON.stringify({
      nextManagerId: userId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 409) {
    throw new Error('본인에게 방장을 넘길수 없어요.🥸');
  }
  if (!response.ok) {
    throw new Error('앗! 방장을 넘기지 못했어요. 잠시후 다시 시도해주세요.');
  }
}

// 채팅룸 삭제 API
export async function deleteChatRoom(roomId: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/chatroom/${roomId}`;
  const response = await fetch(url, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (response.status === 400) {
    throw new Error('채팅방 삭제는 채팅방 참여자가 없어야 가능해요.🐶');
  }
  if (!response.ok) {
    throw new Error('채팅방을 삭제하지 못했어요.🧐 잠시후 다시 시도해주세요.');
  }
}
