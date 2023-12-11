import { Place } from '@/types/types';
import { cookies } from 'next/headers';

// 세부 장소 조회
export async function getDetailedPlace(placeId: string) {
  const response = await fetch(
    `${process.env.SERVER_API_URL}/api/place/${placeId}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        Cookie: `ACCESS=${cookies().get('ACCESS')?.value}`,
      },
    },
  );
  if (!response.ok) {
    throw new Error('장소 정보 획득에 실패하였습니다.');
  }
  const data = (await response.json()) as Place;
  return data;
}
