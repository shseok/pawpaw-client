import React from 'react';
import { useRegisterStore } from '@/hooks/stores/useRegisterStore';
import Divider from '@/components/ui/Divider';
import { termList } from '@/constant/term';
import Checkbox from './Checkbox';
import CheckList from './CheckList';

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
        option={0}
        isChecked={isAllCheck}
        onValueChangeHandler={handleAllCheck}
        text="모두 동의 (선택 정보 포함)"
      />
      <Divider type="horizontal" className="my-[20px]" />
      <div className="flex flex-col gap-[28px]">
        {termList.map((item, idx) => (
          <CheckList
            option={idx}
            key={item.text}
            isChecked={isCheckList[idx]}
            setCheck={() => {
              setIsCheckList(idx, !isCheckList[idx]);
            }}
            isShow
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
