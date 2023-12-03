import { Place } from '@/types/types';
import { createRef } from 'react';
import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

interface Coordinates {
  lat: number;
  lng: number;
}

export interface LocationStore {
  mapRef: React.MutableRefObject<google.maps.Map | null>;
  places: Place[];
  center: Coordinates;
  bounds: { sw: Coordinates; ne: Coordinates };
  setCenter: (center: Coordinates) => void;
  setBounds: (bounds: { sw: Coordinates; ne: Coordinates }) => void;
  setPlaces: (places: Place[]) => void;
}

export const useLocationStore = createWithEqualityFn<LocationStore>()(
  devtools((set) => ({
    mapRef: createRef<google.maps.Map | null>(),
    places: [],
    center: { lat: 0, lng: 0 },
    bounds: { sw: { lat: 0, lng: 0 }, ne: { lat: 0, lng: 0 } },
    setCenter: (center: Coordinates) => set((store) => ({ ...store, center })),
    setBounds: (bounds: { sw: Coordinates; ne: Coordinates }) =>
      set((store) => ({ ...store, bounds })),
    setPlaces: (places: Place[]) => set((store) => ({ ...store, places })),
  })),
  Object.is,
);
