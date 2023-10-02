import { UserInfo } from '@/types/types';

export default async function getUserInfo(): Promise<UserInfo> {
  try {
    const url = 'http://localhost:3000/api/user';
    const response = await fetch(url, {
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
