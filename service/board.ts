import { AuthError } from '@/lib/error';

interface PostBoardType {
  title: string;
  content: string;
}

interface PostCommentType {
  boardId: number;
  parentId: number;
  content: string;
}
interface GetListApiProps {
  pageParam: number;
  pageSize: number;
}

export async function postBoard(postBoardData: PostBoardType) {
  const url = `endpoint/api/board/register`;

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postBoardData),
  });
  return response.json();
}

export async function getBoardList({ pageParam, pageSize }: GetListApiProps) {
  try {
    const url = `/endpoint/api/board/list?pageNumber=${pageParam}&pageSize=${pageSize}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`서버오류:${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof AuthError) {
      window.location.replace('/auth/login');
      alert(error.message);
    }
    throw error;
  }
}

export async function postComment(postCommentData: PostCommentType) {
  const url = `endpoint/api/reply/register`;

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postCommentData),
  });
  return response.json();
}

// export async function getCommentList({ pageParam, pageSize }: GetListApiProps) {
//   try {
//     const url = `/endpoint/api/reply/list?pageNumber=${pageParam}&pageSize=${pageSize}`;
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`서버오류:${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     if (error instanceof AuthError) {
//       window.location.replace('/auth/login');
//       alert(error.message);
//     }
//     throw error;
//   }
// }
