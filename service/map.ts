import { LocationInfoType, LocationName } from '@/types/types';

export async function getLocationList(
  value: string,
): Promise<LocationInfoType> {
  const url = `${process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL}/api/autocomplete?searchResult=${value}`;
  const response = await fetch(url);
  return response.json();
}

export async function getLocationKoreanName(
  latitude: number,
  longitude: number,
): Promise<LocationName> {
  const url = `${process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL}/api/location?latitude=${latitude}&longitude=${longitude}`;
  const response = await fetch(url);
  return response.json();
}
