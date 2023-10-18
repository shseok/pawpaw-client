'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginWithEmailAndPassword } from '@/service/auth';
import BottomButton from '../BottomButton';

interface Props {
  title: string;
}

export default function EmailLogin({ title }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await loginWithEmailAndPassword({ email, password });
      router.push('/');
    } catch (e) {
      setError('"아이디 또는 비밀번호가 일치하지 않습니다. 다시 입력해주세요"');
      console.error('Error logging in:', e);
    }
  };

  return (
    <form className="w-full flex flex-col xs:gap-5" onSubmit={handleLogin}>
      <div className="flex flex-col item-center mb-[140px] xs:mb-[178px]">
        <div className="mb-10">
          <h1 className="header1 text-center w-full gap-[40px]">{title}</h1>
          {error && (
            <p className="body3 mt-[30px] text-red break-keep text-center">
              {error}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-5">
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="body1 text-grey-800">
              이메일
            </label>
            <input
              id="name"
              className="h-[58px] rounded-[10px] text-xs 2xs:body1 placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
              type="text"
              placeholder="pawpaw1234@google.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="body1 text-grey-800">
              비밀번호
            </label>
            <input
              id="password"
              className="h-[58px] rounded-[10px] text-xs 2xs:body1 placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
              type="password"
              placeholder="비밀번호(8~16자의 영문, 숫자)"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="on"
            />
          </div>
        </div>
      </div>
      <BottomButton
        type="submit"
        text="로그인 하기"
        isFullWidth
        variant="primary"
      />
    </form>
  );
}
