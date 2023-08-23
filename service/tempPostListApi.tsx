interface Post {
  albumId: number;
  id: number;
  title: string;
  url: string;
}

interface TempPostListApiProps {
  pageParam: number;
  pageSize: number;
}

export default async function tempPostListApi({
  pageParam,
  pageSize,
}: TempPostListApiProps): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${pageParam}&_limit=${pageSize}`,
  );
  return res.json();
}
