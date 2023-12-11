'use client';

import ConfirmLocationModal from '@/components/ui/Modal/ConfirmLocationModal';
import useGeolocation from '@/hooks/common/useGeolocation';
import { useLocationStore } from '@/hooks/stores/useLocationStore';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';
import useSupercluster from 'use-supercluster';
import { ClusterProperties } from 'supercluster';
import Marker from './Marker';
import ClusterMarker, { PointFeatureArray, Properties } from './ClusterMarker';

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
  const points = places.map((place) => ({
    type: 'Feature',
    properties: {
      cluster: false,
      placeId: place.id,
      placeName: place.name,
      placeRating: place.score,
    },
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(place.position.longitude.toString()),
        parseFloat(place.position.latitude.toString()),
      ] as [number, number],
    },
  })) as PointFeatureArray;
  const [zoom, setZoom] = useState(10);
  const [clusterBounds, setClusterBounds] = useState<
    [number, number, number, number]
  >([0, 0, 0, 0]);

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds: clusterBounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
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
              const mapZoom = map.getZoom();
              if (!mapBounds || !mapCenter || !mapZoom) return;
              const sw = mapBounds.getSouthWest();
              const ne = mapBounds.getNorthEast();
              setCenter({ lat: mapCenter.lat(), lng: mapCenter.lng() });
              setBounds({
                sw: { lat: sw.lat(), lng: sw.lng() },
                ne: { lat: ne.lat(), lng: ne.lng() },
              });
              // update map bounds
              setClusterBounds([sw.lng(), sw.lat(), ne.lng(), ne.lat()]); // 왼쪽 하단에서 오른쪽 모서리
              setZoom(mapZoom);
            });
          }}
          // onZoomChanged={() => {
          //   if (!mapRef.current) return;
          //   const zoom = mapRef.current.getZoom();
          //   if (!zoom) return;
          //   // setZoom(zoom);
          // }}
        >
          {clusters.map((cluster) => {
            const [lng, lat] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties as Properties & ClusterProperties;
            if (isCluster) {
              return (
                <ClusterMarker
                  key={cluster.id}
                  position={{
                    lat,
                    lng,
                  }}
                  clusterId={+(cluster?.id ?? 0)}
                  points={points}
                  pointCount={pointCount}
                  supercluster={supercluster}
                />
              );
            }
            return (
              <Marker
                position={{
                  lat,
                  lng,
                }}
                key={cluster.properties.placeId}
                placeIndex={cluster.properties.placeId}
                text={cluster.properties.placeName}
                rating={cluster.properties.placeRating}
              />
            );
          })}
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
