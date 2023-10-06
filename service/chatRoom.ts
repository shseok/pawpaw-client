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
export async function getChatroomUserList(chatRoomId: string) {
  const url = `/endpoint/api/chatroom/${chatRoomId}/participants`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
