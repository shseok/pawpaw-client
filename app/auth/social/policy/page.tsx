'use client';

import AuthForm from '@/components/pages/auth/AuthForm';
import CheckListOfTerm from '@/components/pages/auth/CheckListOfTerm';
import ProgressBar from '@/components/pages/auth/ProgressBar';
import Button from '@/components/ui/Button';
import { useRegisterStore } from '@/hooks/stores/useRegisterStore';
import { useEffect } from 'react';

export default function page() {
  const step = useRegisterStore((state) => state.step);
  const setStep = useRegisterStore((state) => state.setStep);
  const checkList = useRegisterStore((state) => state.checkList);

  useEffect(() => {
    setStep(1);
  }, []);
  const body = (
    <div className="flex flex-col items-center max-w-[400px] w-full">
      <h1 className="header1">약관동의</h1>
      <ProgressBar step={step} />
      <CheckListOfTerm />
    </div>
  );
  const footer = (
    <div className="flex flex-col items-center gap-10 w-full">
      <Button
        className="text-lg flex-1 px-[20px] py-[16px]"
        fullWidth
        disabled={checkList.some((v) => !v)}
        variant="primary"
        disabledTextColor="text-grey-400"
        to="/auth/social/location"
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
}
