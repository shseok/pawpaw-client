import { EnteredChatList, RecommendedChatList } from '@/types/types';
import { cookies } from 'next/headers';

const generateOptions = () =>
  ({
    credentials: 'include',
    headers: { Cookie: `ACCESS=${cookies().get('ACCESS')?.value}` },
  }) as const;
export async function fetchEnteredChatList(): Promise<EnteredChatList[]> {
  const url = `${process.env.SERVER_API_URL}/api/chatroom/participated`;
  const response = await fetch(url, {
    credentials: 'include',
    headers: { Cookie: `ACCESS=${cookies().get('ACCESS')?.value}` },
  });
  return response.json();
}

export async function fetchRecommendedChatList(): Promise<
  RecommendedChatList[]
> {
  const options = generateOptions();
  const REVALIDATE_TIME = 5;
  const url = `${process.env.SERVER_API_URL}/api/chatroom/recommended`;
  const response = await fetch(url, {
    ...options,
    next: { revalidate: REVALIDATE_TIME },
  });
  return response.json();
}
