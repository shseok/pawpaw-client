import { Place, SearchPlaceParams } from '@/types/types';
import { stringify } from 'qs';

// 장소 검색
export async function searchPlace({
  query,
  placeType,
  latMin,
  latMax,
  longMin,
  longMax,
}: SearchPlaceParams) {
  const querys = stringify(
    { query, placeType, latMin, latMax, longMin, longMax },
    { addQueryPrefix: true },
  );
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/place/search`.concat(querys),
    {
      method: 'GET',
      credentials: 'include',
    },
  );
  if (!response.ok) {
    throw new Error('장소 검색에 실패하였습니다.');
  }
  const data = (await response.json()) as Place[];
  return data;
}
