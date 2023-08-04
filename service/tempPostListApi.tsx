interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface tempPostListApiProps {
  pageParam: number;
  pageSize: number;
}

export default async function tempPostListApi({
  pageParam,
  pageSize,
}: tempPostListApiProps): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=${pageSize}`
  );
  return res.json();
}
