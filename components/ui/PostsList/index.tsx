"use client";

import { useIntersectionObserver } from "@/hooks/common/useIntersectionObserver";
import usePosts from "@/hooks/queries/PostQuery";

export default function PostsList() {
  const { data, isLoading, fetchNextPage, hasNextPage } = usePosts();
  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>Posts</h1>
      <div>
        {data?.pages?.map((page) =>
          page?.map((posts) => (
            <div>
              <h2>{posts.id}</h2>
              <p>{posts.body}</p>
            </div>
          ))
        )}
      </div>
      <div ref={setTarget} />
    </>
  );
}
