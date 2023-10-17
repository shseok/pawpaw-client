import EmailLogin from '@/components/pages/auth/EmailLogin';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: '이메일 로그인',
  robots: 'noindex',
};

export default function EmailLoginPage() {
  return (
    <div className="w-full flex flex-col">
      <EmailLogin title="이메일로 로그인" />
      <div className="flex justify-between items-center mt-6">
        <Link href="/auth/policy">
          <span className="text-xs 2xs:body1 text-grey-400">회원가입</span>
        </Link>
        <div className="flex gap-3 items-center">
          <Link href="/auth/find-change">
            <span className="text-xs 2xs:body1 text-grey-400">아이디 찾기</span>
          </Link>
          <div className="w-[1px] h-[18px] sm:h-6 bg-grey-200" />
          <Link href="/auth/find-change">
            <span className="text-xs 2xs:body1 text-grey-400">
              비밀번호 변경
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
