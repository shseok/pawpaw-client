import { createWithEqualityFn } from 'zustand/traditional';
import { termList } from '@/constant/term';
import { devtools } from 'zustand/middleware'; // 미들웨어를 통해 Redux-devtools를 사용
import { Species } from '@/types/types';

export interface GeneralRegisterStore {
  allCheked: boolean;
  checkList: boolean[];
  position: { lat: number; lng: number; name: string };
  searchHistory: string;
  nickname: string;
  petInfo: {
    name: string;
    species: Species;
  };
  imageFile: File | string;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setAllCheked: (checked: boolean) => void;
  setCheckList: (index: number, checked: boolean) => void;
  setPosition: (position: { lat: number; lng: number; name: string }) => void;
  setSearchHistory: (searchHistory: string) => void;
  setNickname: (nickname: string) => void;
  setPetInfo: (info: { name: string; species: Species }) => void;
  setImageFile: (imageFile: File | string) => void;
}

export const useGeneralRegisterStore =
  createWithEqualityFn<GeneralRegisterStore>()(
    devtools((set) => ({
      allCheked: false,
      checkList: Array(termList.length).fill(false),
      position: { lat: 0, lng: 0, name: '' },
      searchHistory: '',
      nickname: '',
      petInfo: {
        name: '',
        species: '강아지',
      },
      imageFile: '',
      email: '',
      password: '',
      setEmail: (email: string) => set((store) => ({ ...store, email })),
      setPassword: (password: string) =>
        set((store) => ({ ...store, password })),
      setAllCheked: (checked: boolean) =>
        set((store) => ({
          ...store,
          allCheked: checked,
          checkList: checked
            ? Array(termList.length).fill(true)
            : Array(termList.length).fill(false),
        })),
      setCheckList: (index: number, checked: boolean) =>
        set((store) => {
          const newCheckList = [...store.checkList];
          newCheckList[index] = checked;
          return { ...store, checkList: newCheckList };
        }),
      setPosition: (position: { lat: number; lng: number; name: string }) =>
        set((store) => ({ ...store, position })),
      setSearchHistory: (searchHistory: string) =>
        set((store) => ({ ...store, searchHistory })),
      setNickname: (nickname: string) =>
        set((store) => ({ ...store, nickname })),
      setPetInfo: (petInfo: { name: string; species: Species }) =>
        set((store) => ({ ...store, petInfo })),
      setImageFile: (imageFile: File | string) =>
        set((store) => ({ ...store, imageFile })),
    })),
    Object.is,
  );
