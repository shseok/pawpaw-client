// import { useInfiniteQuery } from '@tanstack/react-query';
// import { CommentList } from '@/types/types';
// import { getCommentList } from '@/service/board';
// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// export default function useGetCommentList(boardId: number) {
//   const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
//     useInfiniteQuery<CommentList>({
//       queryKey: ['commentList'],
//       queryFn: ({ pageParam = 0 }) => getCommentList(pageParam, boardId),
//       getNextPageParam: (commentList) =>
//         commentList.last ? undefined : commentList.number + 1,
//     });
//   // 무한 스크롤 화면 가장 아래 부분 탐지하는 observer
//   function Observer({ children }: { children: React.ReactNode }) {
//     const { ref, inView } = useInView({ threshold: 1 });
//     useEffect(() => {
//       if (inView && hasNextPage) {
//         fetchNextPage();
//       }
//     }, [inView]);
//     if (!hasNextPage || !data) return null;
//     return (
//       <div ref={ref}>{isLoading || isFetchingNextPage ? children : null}</div>
//     );
//   }

//   return {
//     data,
//     isLoading,
//     Observer,
//     hasNextPage,
//   };
// }

'use client';

import { getCommentList } from '@/service/board';
import { CommentList } from '@/types/types';
import useInfiniteScroll from '../common/useInfiniteScroll';

export default function useGetCommentList(boardId: number) {
  const { data, isLoading, Observer, hasNextPage } =
    useInfiniteScroll<CommentList>({
      queryKey: 'commentList',
      firstPageParam: 0,
      queryFn: getCommentList,
      getNextPageParamFn: (boardList) =>
        boardList.last ? undefined : boardList.number + 1,
      params: [boardId],
    });

  return {
    Observer,
    data,
    isLoading,
    hasNextPage,
  };
}
