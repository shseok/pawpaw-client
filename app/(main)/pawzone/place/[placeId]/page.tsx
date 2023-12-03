import React from 'react';
import { getDetailedPlace } from '@/service/server/pawzone';
import PlaceResult from '../../_components/Place/PlaceResult';

interface Props {
  params: { placeId: string };
}

// id로 이에 대한 데이터를 활용하기
export default async function page({ params: { placeId } }: Props) {
  const place = await getDetailedPlace(placeId);
  return <PlaceResult item={place} />;
}
