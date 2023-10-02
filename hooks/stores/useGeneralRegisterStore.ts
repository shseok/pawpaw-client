import {
  SocialRegisterStore,
  useSocialRegisterStore,
} from './useSocialRegisterStore';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware'; // 미들웨어를 통해 Redux-devtools를 사용

interface GeneralRegisterStore extends SocialRegisterStore {
  email: string;
  password: string;
}

export const useGeneralRegisterStore =
  createWithEqualityFn<GeneralRegisterStore>()(
    devtools((set) => ({
      ...useSocialRegisterStore.getState(),
      email: '',
      password: '',
      setEmail: (email: string) => set((store) => ({ ...store, email })),
      setPassword: (password: string) =>
        set((store) => ({ ...store, password })),
    })),
    Object.is,
  );
