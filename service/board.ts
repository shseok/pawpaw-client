import { AuthError } from '@/lib/error';
import { CommentList, PostBoardType, PostCommentType } from '@/types/types';

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

export async function getBoardList(pageParam: number) {
  const url = `/endpoint/api/board/list?pageSize=5&pageNumber=${pageParam}`;
  try {
    const response = await fetch(url);
    if (response.status === 401) {
      throw new AuthError('로그인이 필요한 서비스입니다.');
    }
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

export async function getCommentList(
  pageParam: number,
  boardId: number,
): Promise<CommentList> {
  let url = `/endpoint/api/reply/list?boardId=${boardId}&pageSize=3`;
  if (pageParam) {
    url += `&pageNumber=${pageParam}`;
  }
  try {
    const response = await fetch(url);
    if (response.status === 401) {
      throw new AuthError('로그인이 필요한 서비스입니다.');
    }
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

export async function updateBoardLike(boardId: number) {
  const url = `endpoint/api/boardLike/like?boardId=${boardId}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 401) {
      throw new AuthError('로그인이 필요한 서비스입니다.');
    }
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

export async function deleteBoardLike(boardId: number) {
  const url = `endpoint/api/boardLike/deleteLike?boardId=${boardId}`;
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 401) {
      throw new AuthError('로그인이 필요한 서비스입니다.');
    }
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
