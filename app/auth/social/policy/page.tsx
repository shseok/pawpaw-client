'use client';

import AuthForm from '@/components/pages/auth/AuthForm';
import CheckListOfTerm, {
  termList,
} from '@/components/pages/auth/CheckListOfTerm';
import ProgressBar from '@/components/pages/auth/ProgressBar';
import Button from '@/components/ui/Button';
import React, { useState } from 'react';

const page = () => {
  const [step, setStep] = useState(1);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isCheckList, setIsCheckList] = useState<boolean[]>(
    Array(termList.length).fill(false),
  );

  const body = (
    <div className="flex flex-col items-center max-w-[400px] w-full">
      <h1 className="text-[32px] leading-[40px] font-bold">약관 동의</h1>
      <ProgressBar step={step} />
      <CheckListOfTerm
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        isCheckList={isCheckList}
        setIsCheckList={setIsCheckList}
      />
    </div>
  );
  const footer = (
    <div className="flex flex-col items-center gap-10 w-full">
      <Button
        className="text-lg flex-1 px-[20px] py-[16px]"
        fullWidth
        disabled
        variant="primary"
        disabledTextColor="text-grey-400"
      >
        다음
      </Button>
    </div>
  );
  return (
    <AuthForm>
      {body}
      {footer}
    </AuthForm>
  );
};

export default page;
