import { create } from 'zustand';
import { termList } from '@/constant/term';
import { devtools } from 'zustand/middleware'; // 미들웨어를 통해 Redux-devtools를 사용

interface RegisterStore {
  step: number;
  allCheked: boolean;
  checkList: boolean[];
  setStep: (curStep: number) => void;
  setAllCheked: (checked: boolean) => void;
  setCheckList: (index: number, checked: boolean) => void;
}

export const useRegisterStore = create<
  RegisterStore,
  [['zustand/devtools', RegisterStore]]
>(
  devtools((set) => ({
    step: 1,
    allCheked: false,
    checkList: Array(termList.length).fill(false),
    setStep: (curStep: number) => set((store) => ({ ...store, step: curStep })),
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
  })),
);
