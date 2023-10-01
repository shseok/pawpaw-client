import { cookies } from 'next/headers';
import { UserInfo } from '@/types/types';

export default async function getUserInfo(): Promise<UserInfo> {
  try {
    const url = 'http://localhost:3000/api/user';
    const response = await fetch(url, {
      credentials: 'include',
      headers: {
        Cookie: `ACCESS=${cookies()?.get('ACCESS')?.value as string}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
