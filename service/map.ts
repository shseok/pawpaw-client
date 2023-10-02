import { LocationInfoType, LocationName } from '@/types/types';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL
    : process.env.NEXT_PUBLIC_CLIENT_BASE_URL;

export async function getLocationList(
  value: string,
): Promise<LocationInfoType> {
  const url = `${BASE_URL}/api/autocomplete?searchResult=${value}`;
  const response = await fetch(url);
  return response.json();
}

export async function getLocationKoreanName(
  latitude: number,
  longitude: number,
): Promise<LocationName> {
  const url = `${BASE_URL}/api/location?latitude=${latitude}&longitude=${longitude}`;
  const response = await fetch(url);
  return response.json();
}
