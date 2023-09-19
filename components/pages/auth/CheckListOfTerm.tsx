import Divider from '@/components/ui/Divider';
import React, { Dispatch } from 'react';
import Checkbox from './Checkbox';
import CheckList from './CheckList';

interface Props {
  isAllChecked: boolean;
  setIsAllChecked: (value: boolean) => void;
  isCheckList: boolean[];
  setIsCheckList: Dispatch<React.SetStateAction<boolean[]>>;
}

export const termList = [
  { text: '[필수] 만 14세 이상입니다' },
  { text: '[필수] 서비스 통합이용약관 동의', to: '/' },
  { text: '[필수] 위치정보 이용약관 동의', to: '/' },
  { text: '[선택] 개인정보 수집 및 이용 동의', to: '/' },
];

const CheckListOfTerm = ({
  isAllChecked,
  setIsAllChecked,
  isCheckList,
  setIsCheckList,
}: Props) => {
  const check = (idx: number) => {
    setIsCheckList((prev) => {
      const newCheckList = [...prev];
      newCheckList[idx] = !newCheckList[idx];
      return newCheckList;
    });
  };

  return (
    <div className="w-full">
      <Checkbox
        isChecked={isAllChecked}
        onValueChangeHandler={setIsAllChecked}
        text="모두 동의 (선택 정보 포함)"
      />
      <Divider type="horizontal" className="my-[20px]" />
      <div className="flex flex-col gap-[28px]">
        {termList.map((item, idx) => (
          <CheckList
            key={idx}
            isChecked={isCheckList[idx]}
            setCheck={() => {
              check(idx);
            }}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckListOfTerm;
