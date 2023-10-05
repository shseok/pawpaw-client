import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

export interface IdentityStore {
  name: string;
  phoneNum: string;
  birthDate: string;
  setName: (name: string) => void;
  setPhoneNum: (phoneNum: string) => void;
  setBirthDate: (birthDate: string) => void;
}

export const useIdentityStore = createWithEqualityFn<IdentityStore>()(
  devtools((set) => ({
    name: '',
    phoneNum: '',
    birthDate: '',
    setName: (name: string) => set((store) => ({ ...store, name })),
    setPhoneNum: (phoneNum: string) => set((store) => ({ ...store, phoneNum })),
    setBirthDate: (birthDate: string) =>
      set((store) => ({ ...store, birthDate })),
  })),
  Object.is,
);
