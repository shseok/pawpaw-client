import { cookies } from 'next/headers';

// eslint-disable-next-line consistent-return
export default async function getUserInfo() {
  try {
    const url = 'http://localhost:3000/api/user';
    const response = await fetch(url, {
      credentials: 'include',
      headers: {
        Cookie: `ACCESS=${cookies()?.get('ACCESS')?.value as string}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
