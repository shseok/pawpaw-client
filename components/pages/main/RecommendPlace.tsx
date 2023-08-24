'use client';

import { useCallback, useMemo, useState } from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import Link from 'next/link';
import Image from 'next/image';
import FlexBox from '@/components/ui/FlexBox';
import ArrowClockIcon from '@/public/ArrowClockwise.svg';

interface PropsType {
  geoCode: { lat: number; lng: number };
}
type RecommendedPlaceDetail = google.maps.places.PlaceResult;

export default function RecommendPlace({ geoCode }: PropsType) {
  const [placeDetail, setPlaceDetail] = useState<RecommendedPlaceDetail>();
  const [placesArray, setPlacesArray] = useState<RecommendedPlaceDetail[]>([]);
  const [distance, setDistance] = useState('');
  const libraries = useMemo(() => ['places'], []);
  const { isLoaded } = useJsApiLoader({
    language: 'KO',
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    libraries: libraries as any,
  });
  const calculateDistance = useCallback(
    (destination: google.maps.places.PlaceResult) => {
      const distanceService = new window.google.maps.DistanceMatrixService();
      const userCurrentLocation = new window.google.maps.LatLng(
        geoCode.lat,
        geoCode.lng,
      );
      const destinationLatLng = destination.geometry?.location;

      if (destinationLatLng) {
        distanceService.getDistanceMatrix(
          {
            origins: [userCurrentLocation],
            destinations: [destinationLatLng],
            travelMode: google.maps.TravelMode.TRANSIT,
          },
          (response) => {
            setDistance(response?.rows[0].elements[0].distance?.text || '');
          },
        );
      }
    },
    [geoCode.lat, geoCode.lng],
  );

  const changePlaceByIndex = useCallback(() => {
    const randomNewIndex = Math.floor(Math.random() * placesArray.length);
    const randomNewPlace = placesArray[randomNewIndex];
    calculateDistance(randomNewPlace);
    setPlaceDetail(randomNewPlace);
  }, [calculateDistance, placesArray]);

  const onMapLoad = useCallback(
    (map: google.maps.Map) => {
      const userCurrentLocation = new window.google.maps.LatLng(
        geoCode.lat,
        geoCode.lng,
      );
      const placesService = new window.google.maps.places.PlacesService(map);

      const keyword = {
        location: userCurrentLocation,
        radius: 5000,
        query: '강아지', // 유저 정보로부터 키워드를 받아야함.
      };

      placesService.textSearch(keyword, (result, status) => {
        try {
          if (status === 'OK' && result) {
            setPlacesArray(result);
            const randomIndex = Math.floor(Math.random() * result.length);
            const randomResult = result[randomIndex];
            setPlaceDetail(randomResult);
            calculateDistance(randomResult);
          }
        } catch (error: unknown) {
          console.error(error);
        }
      });
    },
    [calculateDistance, geoCode.lat, geoCode.lng],
  );

  return (
    <FlexBox direction="column" className="w-full gap-3">
      <h3 className="flex items-center justify-between w-full header3">
        <p>
          <span className="text-primary-300">수박이</span>와 가기 좋은 장소
        </p>
        <button type="button" onClick={changePlaceByIndex}>
          <ArrowClockIcon />
        </button>
      </h3>
      <Link
        href={`/${placeDetail?.place_id}`}
        className="w-full rounded-[10px] shadow-chatCard p-5 gap-5 flex flex-col"
      >
        <Image
          src="/default.png"
          alt="d"
          width={300}
          height={100}
          priority
          className="w-full h-32 rounded-[10px] object-fill"
        />
        <div className="hidden">
          {isLoaded && <GoogleMap onLoad={(map) => onMapLoad(map)} />}
        </div>
        <FlexBox direction="column" align="start" className="w-full gap-1">
          <p className="flex gap-1 body2">
            {placeDetail && placeDetail.name}
            <span className="body3 text-grey-300">{distance}</span>
          </p>
          <p className="body4">
            {placeDetail && placeDetail.formatted_address}
          </p>
        </FlexBox>
      </Link>
    </FlexBox>
  );
}
