'use client';

import React from 'react';
import Congratulation from '@/public/Auth/congratulation.svg';
import { useRegisterStore } from '@/hooks/stores/useRegisterStore';
import { useRouter } from 'next/navigation';
import BottomButton from '@/components/pages/auth/BottomButton';

export default function Complete() {
  const nickName = useRegisterStore((state) => state.nickname);
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[24px]">
        <Congratulation />
        <div className="flex flex-col justify-center items-center gap-[11px]">
          <h2 className="header2 text-primary-200 text-center">가입 완료!</h2>
          <h1 className="header1 text-grey-800">
            <span className="header1 text-grey-800">{nickName}</span>님,
            환영해요
          </h1>
        </div>
      </div>
      <BottomButton
        text="PAWPAW 시작하기"
        variant="primary"
        isFullWidth
        handleClick={() => {
          router.push('/');
        }}
      />
    </>
  );
}
