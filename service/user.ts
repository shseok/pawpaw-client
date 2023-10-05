import { UserInfo } from '@/types/types';
import { AuthError } from '@/lib/error';

export default async function getUserInfo(): Promise<UserInfo> {
  try {
    const url = 'http://localhost:3000/api/user';
    const response = await fetch(url, {
      credentials: 'include',
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
      alert(error.message);
      // window.location.replace('/auth/login');
    }
    console.error(error);
    throw error;
  }
}
