'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import BottomButton from '../BottomButton';
import AuthForm from './AuthForm';

interface Props {
  title: string;
}

export default function Register({ title }: Props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const step = useSearchParams().get('step');

  return (
    <>
      <div className="flex flex-col items-center w-full gap-[28px] mb-[130px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="header1">{title}</h1>
          <ProgressBar step={parseInt(step ?? '2', 10)} limit={5} />
        </div>
        <AuthForm setIsActive={setIsActive} />
      </div>
      <BottomButton
        text="다음"
        isFullWidth
        variant="primary"
        isDisabled={!isActive}
        handleClick={() => {
          router.push(`/auth/identity?step=3`);
        }}
      />
    </>
  );
}
