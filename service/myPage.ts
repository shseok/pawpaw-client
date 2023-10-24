import { AuthError } from '@/lib/error';

export async function getMyBoardList(pageNumber: number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/board/myPage?pageSize=4`;
  if (pageNumber !== 0) {
    url += `&pageNumber=${pageNumber}`;
  }
  try {
    const response = await fetch(url, { credentials: 'include' });
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

export async function getBookmarkedBoardList(pageNumber: number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/bookmark/list?pageSize=4`;
  if (pageNumber !== 0) {
    url += `&pageNumber=${pageNumber}`;
  }
  try {
    const response = await fetch(url, { credentials: 'include' });
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
