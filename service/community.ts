/* eslint-disable consistent-return */
import { cookies } from 'next/headers';
import { RecommendedChatList, EnteredChatList } from '@/types/types';

export async function getRecommendedChatList(): Promise<RecommendedChatList[]> {
  try {
    const url = `http://localhost:3000/api/chatroom/recommended`;
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        Cookie: `ACCESS=${cookies()?.get('ACCESS')?.value as string}`,
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
export async function getEnteredChatList(): Promise<EnteredChatList[]> {
  try {
    const url = `http://localhost:3000/api/chatroom/participated`;
    const response = await fetch(url, {
      headers: {
        Cookie: `ACCESS=${cookies()?.get('ACCESS')?.value as string}`,
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
