import Divider from '@/components/ui/Divider';
import React from 'react';
import Checkbox from './Checkbox';
import CheckList from './CheckList';
import { useRegisterStore } from '@/hooks/stores/useRegisterStore';
import { termList } from '@/constant/term';

export default function CheckListOfTerm() {
  const isAllCheck = useRegisterStore((state) => state.allCheked);
  const setIsAllCheck = useRegisterStore((state) => state.setAllCheked);
  const isCheckList = useRegisterStore((state) => state.checkList);
  const setIsCheckList = useRegisterStore((state) => state.setCheckList);

  const handleAllCheck = () => {
    setIsAllCheck(!isAllCheck);
  };

  return (
    <div className="w-full">
      <Checkbox
        isChecked={isAllCheck}
        onValueChangeHandler={handleAllCheck}
        text="모두 동의 (선택 정보 포함)"
      />
      <Divider type="horizontal" className="my-[20px]" />
      <div className="flex flex-col gap-[28px]">
        {termList.map((item, idx) => (
          <CheckList
            key={idx}
            isChecked={isCheckList[idx]}
            setCheck={() => {
              setIsCheckList(idx, !isCheckList[idx]);
            }}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
