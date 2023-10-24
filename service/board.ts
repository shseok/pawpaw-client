import { AuthError } from '@/lib/error';
import {
  Board,
  CommentList,
  PostBoardType,
  PostCommentType,
  PostImageType,
} from '@/types/types';

// 게시글 업로드 API
export async function postBoard(postBoardData: PostBoardType) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/board/register`;
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postBoardData),
  });
  if (!response.ok) {
    throw new Error(
      '게시글을 업로드하지 못했어요.🥲 잠시후 다시 시도해주세요.',
    );
  }
  return response.json();
}

// 게시글 이미지 업로드 API (이후 기능 추가 예정)
export async function postImageBoard(
  boardId: number,
  postImageData: PostImageType,
) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/file/upload?boardId=${boardId}`;
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postImageData),
  });
  if (!response.ok) {
    throw new Error(
      '게시글을 업로드하지 못했어요.🥲 잠시후 다시 시도해주세요.',
    );
  }
  return response.json();
}

// 게시글리스트 무한스크롤로 가져오는 API
export async function getBoardList(pageParam: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/board/list?pageSize=5&pageNumber=${pageParam}`;
  const response = await fetch(url, { credentials: 'include' });
  if (!response.ok) {
    throw new Error('게시글을 불러오지 못했어요.🥲 잠시후 다시 시도해주세요.');
  }
  return response.json();
}

// 단일 게시글 가져오는 API
export async function getBoard(boardId: number): Promise<Board> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/board/${boardId}`;
  const response = await fetch(url, { credentials: 'include' });
  if (!response.ok) {
    throw new Error('게시글을 불러오지 못했어요.🥲 잠시후 다시 시도해주세요.');
  }
  return response.json();
}

// 게시글 삭제하는 API
export async function deleteBoard(boardId: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/board/remove/${boardId}`;
  const response = await fetch(url, { method: 'DELETE' });
  if (response.status === 401) {
    throw new AuthError('로그인이 필요한 서비스입니다.');
  }
  if (!response.ok) {
    throw new Error(
      '게시글을 삭제하지 못했습니다.🥲 잠시후 다시 시도해주세요.',
    );
  }
  return response.json();
}

// 댓글 업로드 API
export async function postComment(postCommentData: PostCommentType) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/reply/register`;
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postCommentData),
  });
  if (response.status === 401) {
    throw new AuthError('로그인이 필요한 서비스입니다.');
  }
  if (!response.ok) {
    throw new Error(
      '댓글을 업로드하지 못했습니다.🥲 잠시후 다시 시도해주세요.',
    );
  }
  return response.json();
}

// 모달, 단일 게시물 보일 때 댓글 무한 스크롤로 가져오는 API
export async function getCommentList(
  pageParam: number,
  boardId: number,
): Promise<CommentList> {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/reply/list?boardId=${boardId}&pageSize=3`;
  if (pageParam) {
    url += `&pageNumber=${pageParam}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('댓글을 불러오지 못했어요.🥲 잠시후 다시 시도해주세요.');
  }
  return response.json();
}

// 댓글 삭제 API
export async function deleteComment(boardId: number, replyId: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/reply/remove/${boardId}/${replyId}`;
  const response = await fetch(url, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('댓글을 삭제하지 못했어요.🥲 잠시후 다시 시도해주세요.');
  }
}

// 게시글 북마크하는 API
export async function addBookmarkBoard(boardId: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/bookmark/add?boardId=${boardId}`;
  const response = await fetch(url, { method: 'POST', credentials: 'include' });
  if (response.status === 401) {
    throw new AuthError('로그인이 필요한 서비스입니다.');
  }
  if (!response.ok) {
    throw new Error(
      '북마크를 저장하지 못했습니다.🥲 잠시후 다시 시도해주세요.',
    );
  }
  return response.json();
}

// 게시글 북마크 삭제하는 API
export async function deleteBookmarkBoard(boardId: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/bookmark/delete?boardId=${boardId}`;
  const response = await fetch(url, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (response.status === 401) {
    throw new AuthError('로그인이 필요한 서비스입니다.');
  }
  if (!response.ok) {
    throw new Error(
      '북마크를 삭제하지 못했습니다.🥲 잠시후 다시 시도해주세요.',
    );
  }
  return response.json();
}

// 게시글 좋아요 API
export async function updateBoardLike(boardId: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/boardLike/like?boardId=${boardId}`;
  const response = await fetch(url, { method: 'POST', credentials: 'include' });
  if (response.status === 401) {
    throw new AuthError('로그인이 필요한 서비스입니다.');
  }
  if (!response.ok) {
    throw new Error('좋아요를 실패했습니다.🥲 잠시후 다시 시도해주세요.');
  }
  return response.json();
}

// 게시글 좋아요 삭제 API
export async function deleteBoardLike(boardId: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/boardLike/deleteLike?boardId=${boardId}`;
  const response = await fetch(url, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (response.status === 401) {
    throw new AuthError('로그인이 필요한 서비스입니다.');
  }
  if (!response.ok) {
    throw new Error('좋아요를 취소하지 못했어요.🥲 잠시후 다시 시도해주세요.');
  }
  return response.json();
}
