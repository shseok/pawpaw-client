import {
  RecommendedChatList,
  EnteredChatList,
  TrendingChatList,
} from '@/types/types';

export async function getRecommendedChatList(
  cookie: string,
): Promise<RecommendedChatList[]> {
  try {
    const url = `http://localhost:3000/api/chatroom/recommended`;
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        Cookie: `ACCESS=${cookie}`,
      },
    });

    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    }
    if (!response.ok) {
      throw new Error(`서버 오류:${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
    // throw error;
  }
}
export async function getEnteredChatList(
  cookie: string,
): Promise<EnteredChatList[]> {
  try {
    const url = `http://localhost:3000/api/chatroom/participated`;
    const response = await fetch(url, {
      headers: {
        Cookie: `ACCESS=${cookie}`,
      },
    });
    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    }
    if (!response.ok) {
      throw new Error(`서버 오류:${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getTrendingChatList(
  beforeId: number,
): Promise<TrendingChatList> {
  try {
    const url = `http://localhost:3000/api/chatroom/trending?beforeId=${beforeId}&size=9`;
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`서버 오류 ${response.status}`);
    }
    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
