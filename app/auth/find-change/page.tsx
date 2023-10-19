import FindChange from '@/components/pages/auth/FindChange';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '아이디 찾기/비밀번호 변경',
  robots: 'noindex',
};

export default function FindChangePage() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="header1 text-center w-full gap-[40px] pb-8">
        아이디 찾기/비밀번호 변경
      </h1>
      <FindChange />
    </div>
  );
}
