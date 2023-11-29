'use client';

import ConfirmLocationModal from '@/components/ui/Modal/ConfirmLocationModal';
import useGeolocation from '@/hooks/common/useGeolocation';
import { useLocationStore } from '@/hooks/stores/useLocationStore';
import GoogleMapReact from 'google-map-react';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

export default function Map() {
  const { setCenter, setBounds } = useLocationStore(
    (state) => ({
      setCenter: state.setCenter,
      setBounds: state.setBounds,
    }),
    shallow,
  );

  const { location, isOpen, setIsOpen, getLocationData } = useGeolocation();
  const latitude = location?.coordinates?.lat ?? 0;
  const longitude = location?.coordinates?.lng ?? 0;
  const defaultLocation = { lat: latitude, lng: longitude };

  useEffect(() => {
    async function getLocation() {
      await getLocationData();
    }
    getLocation();
  }, []);

  useEffect(() => {
    console.log(location);
  }, [location]);

  if (!KEY) {
    throw new Error('Google Map API key is missing');
  }
  // location 초기 값이 0,0 에서 현재 위치로 바뀌는 시점에 map이 변하지 않음을 방지 (defaultCenter의 변화를 막아놓았기 때문)
  if (defaultLocation.lat === 0 && defaultLocation.lng === 0) {
    return null;
  }

  console.log('map');

  return (
    <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY }}
        defaultCenter={defaultLocation}
        // center={currentLocation}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={}
        onChange={(e) => {
          setCenter(e.center);
          setBounds(e.bounds);
        }}
        onGoogleApiLoaded={({ map, maps }) => {
          const bounds = map.getBounds();
          const sw = bounds.getSouthWest();
          const ne = bounds.getNorthEast();
          setBounds({
            sw: { lat: sw.lat(), lng: sw.lng() },
            ne: { lat: ne.lat(), lng: ne.lng() },
          });
        }}
        // onChildClick={}
      ></GoogleMapReact>
      <ConfirmLocationModal
        open={isOpen}
        onClose={async () => {
          // 닫기를 누르는 시점에서 다시 위치를 받아오고 위치가 없다면 다시 오픈(수동 요청)
          await getLocationData();
          setIsOpen(false);
        }}
      />
    </div>
  );
}
