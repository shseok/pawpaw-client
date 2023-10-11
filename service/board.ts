import { AuthError } from '@/lib/error';
import { BoardList } from '@/types/types';

interface PostBoardType {
  title: string;
  content: string;
}

interface TempPostListApiProps {
  pageParam: number;
  pageSize: number;
}

export async function postBoard(postBoardData: PostBoardType) {
  const url = `/endpoint/api/board/register`;
  const formData = new FormData();
  const { title, content } = postBoardData;
  formData.append(title, content);

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });
  return response.json();
}

export default async function getBoardList({
  pageParam,
  pageSize,
}: TempPostListApiProps): Promise<BoardList[]> {
  try {
    const url = `/endpoint/api/board/list?_page=${pageParam}&_limit=${pageSize}`;
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
