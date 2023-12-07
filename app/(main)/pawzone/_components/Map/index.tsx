'use client';

import ConfirmLocationModal from '@/components/ui/Modal/ConfirmLocationModal';
import useGeolocation from '@/hooks/common/useGeolocation';
import { useLocationStore } from '@/hooks/stores/useLocationStore';
import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  MarkerF,
  useLoadScript,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';
import Marker from './Marker';
// import useSupercluster from 'use-supercluster';

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
const libraries = ['places'];

export default function Map() {
  const { mapRef, center, places, setCenter, setBounds } = useLocationStore(
    (state) => ({
      mapRef: state.mapRef,
      center: state.center,
      places: state.places,
      setCenter: state.setCenter,
      setBounds: state.setBounds,
    }),
    shallow,
  );

  const { location, isOpen, setIsOpen, getLocationData } = useGeolocation();
  const latitude = location?.coordinates?.lat ?? 0;
  const longitude = location?.coordinates?.lng ?? 0;
  const defaultLocation = { lat: latitude, lng: longitude };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    libraries: libraries as any,
  });

  // init map location
  useEffect(() => {
    async function getLocation() {
      await getLocationData();
    }
    getLocation();
  }, []);

  useEffect(() => {
    if (!defaultLocation.lat || !defaultLocation.lng) return;
    setCenter({ lat: defaultLocation.lat, lng: defaultLocation.lng });
  }, [defaultLocation.lat, defaultLocation.lng, setCenter]);

  const [selectedMarker, setSelectedMarker] = useState<{
    name: string;
    rating: number;
    lat: number;
    lng: number;
  } | null>(null);

  if (!KEY) {
    throw new Error('Google Map API key is missing');
  }

  return (
    <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
      {isLoaded && (
        <GoogleMap
          options={{ disableDefaultUI: true, zoomControl: true }}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={14}
          onLoad={(map) => {
            mapRef.current = map;
            map.addListener('tilesloaded', () => {
              const mapBounds = map.getBounds();
              const mapCenter = map.getCenter();
              if (!mapBounds || !mapCenter) return;
              const sw = mapBounds.getSouthWest();
              const ne = mapBounds.getNorthEast();
              setCenter({ lat: mapCenter.lat(), lng: mapCenter.lng() });
              setBounds({
                sw: { lat: sw.lat(), lng: sw.lng() },
                ne: { lat: ne.lat(), lng: ne.lng() },
              });
            });
          }}
          // onZoomChanged={() => {
          //   if (!mapRef.current) return;
          //   const zoom = mapRef.current.getZoom();
          //   if (!zoom) return;
          //   // setZoom(zoom);
          // }}
        >
          {places.map((place) => (
            <MarkerF
              position={{
                lat: place.position.latitude,
                lng: place.position.longitude,
              }}
              key={place.id}
              // onClick={() => {
              //   setCenter({
              //     lat: place.position.latitude,
              //     lng: place.position.longitude,
              //   });
              // }}
              onMouseOver={() => {
                setSelectedMarker({
                  name: place.name,
                  rating: place.score ? Math.round(place.score * 10) / 10 : 0,
                  lat: place.position.latitude,
                  lng: place.position.longitude,
                });
              }}
              onMouseOut={() => {
                setSelectedMarker(null);
              }}
            />
          ))}
          {selectedMarker && (
            <InfoWindowF
              position={selectedMarker}
              options={{ pixelOffset: new window.google.maps.Size(0, -25) }}
              // onCloseClick={() => setSelectedMarker(null)}
            >
              <Marker
                text={selectedMarker.name}
                rating={selectedMarker.rating}
              />
            </InfoWindowF>
          )}
        </GoogleMap>
      )}
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
