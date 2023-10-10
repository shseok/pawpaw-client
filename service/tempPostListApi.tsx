import { Board, TempPostListApiProps } from '@/types/types';

export default async function tempPostListApi({
  pageParam,
  pageSize,
}: TempPostListApiProps): Promise<Board> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${pageParam}&_limit=${pageSize}`,
  );
  return res.json();
}
