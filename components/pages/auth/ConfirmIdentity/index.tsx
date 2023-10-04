'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import BottomButton from '../BottomButton';
import ConfirmForm from './ConfirmForm';

interface Props {
  title: string;
}

export default function ConfirmIdentity({ title }: Props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center w-full gap-[28px] mb-[48px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="header1">{title}</h1>
          <ProgressBar step={3} />
        </div>
        <ConfirmForm setIsActive={setIsActive} />
      </div>
      <BottomButton
        text="인증 완료"
        isFullWidth
        variant="primary"
        isDisabled={!isActive}
        handleClick={() => {
          router.push(`/auth/location`);
        }}
      />
    </>
  );
}
