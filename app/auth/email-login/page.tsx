import EmailLogin from '@/components/pages/auth/EmailLogin';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '이메일 로그인',
  robots: 'noindex',
};

export default function EmailLoginPage() {
  return <EmailLogin title="이메일로 로그인" />;
}
