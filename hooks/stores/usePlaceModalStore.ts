import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

export interface PlaceModalStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const usePlaceModalStore = createWithEqualityFn<PlaceModalStore>()(
  devtools((set) => ({
    isOpen: true,
    setIsOpen: (isOpen: boolean) => set((store) => ({ ...store, isOpen })),
  })),
  Object.is,
);
