// interface PostType {
// 게시글 제목 : string;
// }

// export async function postChatRoom(chatRoomData: ChatRoomType) {
//   const url = `/endpoint/api/chatroom`;
//   const formData = new FormData();
//   const { body, image } = chatRoomData;
//   formData.append(
//     'body',
//     new Blob([JSON.stringify({ ...body })], { type: 'application/json' }),
//   );
//   formData.append('image', image);

//   const response = await fetch(url, {
//     method: 'POST',
//     credentials: 'include',
//     body: formData,
//   });
//   return response.json();
// }

// export async function getChatroomUserList(chatRoomId: string) {
//   const url = `/endpoint/api/chatroom/${chatRoomId}/participants`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }
