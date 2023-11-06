import { UserInfo } from '@/types/types';
import { cookies } from 'next/headers';

export default async function fetchUserInfo(): Promise<UserInfo> {
  const options = {
    credentials: 'include',
    headers: { Cookie: `ACCESS=${cookies().get('ACCESS')?.value}` },
  } as const;
  const url = `${process.env.SERVER_API_URL}/api/user`;
  const response = await fetch(url, options);
  return response.json();
}
