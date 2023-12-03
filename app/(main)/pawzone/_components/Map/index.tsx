'use client';

import MarkerIcon from '@/public/svgs/pawzone/marker.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import ConfirmLocationModal from '@/components/ui/Modal/ConfirmLocationModal';
import useGeolocation from '@/hooks/common/useGeolocation';
import { useLocationStore } from '@/hooks/stores/useLocationStore';
import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  MarkerF,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';
// import useSupercluster from 'use-supercluster';

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

const AnyReactComponent = ({
  text,
  rating,
}: {
  text: string;
  rating: number;
}) => (
  <div className="flex min-w-[126px] justify-center items-center bg-white rounded-[100px] border border-primary-200 p-2 gap-1">
    <div className="bg-primary-200 rounded-full p-2">
      <MarkerIcon className="w-[22px] h-[22px] fill-white" />
    </div>
    <div className="flex flex-col">
      <span className="caption1 text-grey-800">{text}</span>
      <div className="flex gap-[2px]">
        <Star className="w-[14px] h-[14px] fill-yellow-100" />
        <span className="caption3 text-grey-800">{rating}</span>
      </div>
    </div>
  </div>
);

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
  // const points = places.map((place) => ({
  //   type: 'Feature',
  //   properties: {
  //     cluster: false,
  //     placeId: place.id,
  //     category: 'cafe',
  //   },
  //   geometry: {
  //     type: 'Point',
  //     coordinates: [
  //       parseFloat(place.position.longitude.toString()),
  //       parseFloat(place.position.latitude.toString()),
  //     ] as [number, number],
  //   },
  // }));
  // const [zoom, setZoom] = useState(10);
  // const [clusterBounds, setClusterBounds] = useState<number[]>([]);

  // const { clusters, supercluster } = useSupercluster({
  //   points,
  //   bounds: clusterBounds,
  //   zoom,
  //   options: { radius: 75, maxZoom: 20 },
  // });
  // useEffect(() => {
  //   console.log(clusters);
  //   console.log(supercluster);
  // }, [clusters, supercluster]);

  useEffect(() => {
    async function getLocation() {
      await getLocationData();
    }
    getLocation();
  }, []);

  useEffect(() => {
    if (!defaultLocation.lat || !defaultLocation.lng) return;
    setCenter({ lat: defaultLocation.lat, lng: defaultLocation.lng });
  }, [defaultLocation.lat, defaultLocation.lng]);

  const [selectedMarker, setSelectedMarker] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  if (!KEY) {
    throw new Error('Google Map API key is missing');
  }

  return (
    <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
      <LoadScript googleMapsApiKey={KEY}>
        <GoogleMap
          options={{ disableDefaultUI: true, zoomControl: true }}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={14}
          onLoad={(map) => {
            mapRef.current = map;
            map.addListener('tilesloaded', () => {
              const bounds = map.getBounds();
              const center = map.getCenter();
              if (!bounds || !center) return;
              const sw = bounds.getSouthWest();
              const ne = bounds.getNorthEast();
              const se = bounds.getSouthWest();
              const nw = bounds.getNorthEast();
              setCenter({ lat: center.lat(), lng: center.lng() });
              setBounds({
                sw: { lat: sw.lat(), lng: sw.lng() },
                ne: { lat: ne.lat(), lng: ne.lng() },
              });
              // setClusterBounds([nw.lng(), se.lat(), se.lng(), nw.lat()]);
            });
          }}
          onZoomChanged={() => {
            if (!mapRef.current) return;
            const zoom = mapRef.current.getZoom();
            if (!zoom) return;
            // setZoom(zoom);
          }}
        >
          {places.map((place) => (
            <MarkerF
              position={{
                lat: place.position.latitude,
                lng: place.position.longitude,
              }}
              key={place.id}
              onClick={() => {
                setSelectedMarker({
                  lat: place.position.latitude,
                  lng: place.position.longitude,
                });
                setCenter({
                  lat: place.position.latitude,
                  lng: place.position.longitude,
                });
              }}
            />
          ))}
          {selectedMarker && (
            <InfoWindowF
              position={selectedMarker}
              options={{ pixelOffset: new window.google.maps.Size(0, -25) }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <AnyReactComponent
                text="수박이와 함께할 수 있는 장소"
                rating={3.5}
              />
            </InfoWindowF>
          )}
          {/* {clusters.map((cluster) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties;
            if (isCluster) {
              return (
                <MarkerF
                  key={cluster.id}
                  position={{ lat: latitude, lng: longitude }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20,
                    );
                    mapRef.current?.setZoom(expansionZoom);
                    mapRef.current?.panTo({
                      lat: latitude,
                      lng: longitude,
                    });
                  }}
                >
                  <div
                    className="bg-primary-200 rounded-full p-2"
                    style={{
                      width: `${10 + (pointCount / points.length) * 20}px`,
                      height: `${10 + (pointCount / points.length) * 20}px`,
                    }}
                  >
                    <span className="caption1 text-grey-800">{pointCount}</span>
                  </div>
                </MarkerF>
              );
            }
            return (
              <MarkerF
                key={cluster.properties.placeId}
                position={{ lat: latitude, lng: longitude }}
                onClick={() => {
                  setSelectedMarker({
                    lat: latitude,
                    lng: longitude,
                  });
                  setCenter({
                    lat: latitude,
                    lng: longitude,
                  });
                }}
              />
            );
          })} */}
        </GoogleMap>
      </LoadScript>
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
