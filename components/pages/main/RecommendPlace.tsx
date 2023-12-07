'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import ArrowClockIcon from '@/public/svgs/ArrowClockwise.svg';
import FlexBox from '@/components/ui/FlexBox';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';

type RecommendedPlaceDetail = google.maps.places.PlaceResult;

const libraries = ['places'];

export default function RecommendPlace() {
  const [placeDetail, setPlaceDetail] = useState<RecommendedPlaceDetail>();
  const [placesArray, setPlacesArray] = useState<RecommendedPlaceDetail[]>([]);
  const [distance, setDistance] = useState('');
  const { data } = useGetUserInfo();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    libraries: libraries as any,
  });
  const calculateDistance = useCallback(
    (destination: RecommendedPlaceDetail) => {
      const distanceService = new window.google.maps.DistanceMatrixService();
      const userCurrentLocation = new window.google.maps.LatLng(
        data?.position.latitude as number,
        data?.position.longitude,
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
    [data?.position.latitude, data?.position.longitude],
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
        data?.position.latitude as number,
        data?.position.longitude,
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
    [calculateDistance, data?.position.latitude, data?.position.longitude],
  );

  return (
    <FlexBox direction="column" className="w-full gap-3 ">
      <h3 className="flex items-center justify-between w-full header3">
        <p>
          <span className="text-primary-300">수박이</span>와 가기 좋은 장소
        </p>
        <button
          type="button"
          onClick={changePlaceByIndex}
          aria-label="Change Place"
        >
          <ArrowClockIcon />
        </button>
      </h3>
      <div className="w-full rounded-[10px] shadow-chatCard p-5 h-64 gap-5 flex flex-col">
        <div className="relative w-full h-[149px]">
          <Image
            src={
              placeDetail?.photos
                ? placeDetail.photos[0].getUrl()
                : '/images/default.png'
            }
            alt={placeDetail?.name ?? '매장 사진'}
            fill
            sizes="100vw"
            priority
            className=" rounded-[10px] object-cover"
          />
        </div>

        <div className="hidden">
          {isLoaded && data && <GoogleMap onLoad={(map) => onMapLoad(map)} />}
        </div>
        <FlexBox direction="column" align="start" className="w-full gap-1">
          <div className="flex gap-1">
            <p className="truncate w-52 body2">
              {placeDetail && placeDetail.name}
            </p>
            <p className="body3 min-w-fit text-grey-300">{distance}</p>
          </div>
          <p className="body4">
            {placeDetail && placeDetail.formatted_address}
          </p>
        </FlexBox>
      </div>
    </FlexBox>
  );
}
