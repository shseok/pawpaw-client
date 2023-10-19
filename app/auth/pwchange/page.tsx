import PwdChangeForm from '@/components/pages/auth/PwdChange';
import React from 'react';

export default function PwdChangePage() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="header1 text-center w-full gap-[40px] pb-8">
        비밀번호 변경
      </h1>
      <PwdChangeForm />
    </div>
  );
}
