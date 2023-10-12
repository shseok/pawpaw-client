import { AuthError } from '@/lib/error';
import { MyBoardList } from '@/types/types';

interface TempPostListApiProps {
  pageParam: number;
  pageSize: number;
}

export default async function getMyBoardList({
  pageParam,
  pageSize,
}: TempPostListApiProps): Promise<MyBoardList[]> {
  try {
    const url = `/endpoint/api/board/myPage?pageNumber=${pageParam}&pageSize=${pageSize}`;
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
