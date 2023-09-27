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
  const url = `http://localhost:3000/api/chatroom`;
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
  const url = `http://localhost:3000/api/chatroom/${id}/participants`;
  const response = await fetch(url, {
    method: 'POST',
  });
  console.log(response);
  const data = await response.json();
  return data;
}
