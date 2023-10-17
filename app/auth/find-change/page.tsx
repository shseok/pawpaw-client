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
      <FindChange title="아이디 찾기/비밀번호 변경" />
    </div>
  );
}
