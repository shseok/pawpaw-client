import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

interface Coordinates {
  lat: number;
  lng: number;
}

export interface LocationStore {
  center: Coordinates;
  bounds: { sw: Coordinates; ne: Coordinates };
  setCenter: (center: Coordinates) => void;
  setBounds: (bounds: { sw: Coordinates; ne: Coordinates }) => void;
}

export const useLocationStore = createWithEqualityFn<LocationStore>()(
  devtools((set) => ({
    center: { lat: 0, lng: 0 },
    bounds: { sw: { lat: 0, lng: 0 }, ne: { lat: 0, lng: 0 } },
    setCenter: (center: Coordinates) => set(() => ({ center })),
    setBounds: (bounds: { sw: Coordinates; ne: Coordinates }) =>
      set(() => ({ bounds })),
  })),
  Object.is,
);
