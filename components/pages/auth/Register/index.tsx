'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import BottomButton from '../BottomButton';
import AuthForm from './AuthForm';

interface Props {
  step: number;
  title: string;
}

export default function Register({ step, title }: Props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center w-full gap-[28px] mb-[130px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="header1">{title}</h1>
          <ProgressBar step={step} />
        </div>
        <AuthForm setIsActive={setIsActive} />
      </div>
      <BottomButton
        text="다음"
        isFullWidth
        variant="primary"
        isDisabled={!isActive}
        handleClick={() => {
          router.push(`/auth/identity`);
        }}
      />
    </>
  );
}
