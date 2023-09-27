import { cookies } from 'next/headers';
import { RecommendedChatList } from '@/types/types';

export default async function getRecommendedChatList(): Promise<
  RecommendedChatList[]
> {
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

    // 응답을 5초 동안 지연시킵니다.
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 3000);
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
