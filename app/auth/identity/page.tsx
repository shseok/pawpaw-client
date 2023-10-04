import ConfirmIdentity from '@/components/pages/auth/ConfirmIdentity';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '본인 인증',
  robots: 'noindex',
};

export default function ConfirmIdentityPage() {
  return <ConfirmIdentity title="본인 인증을 해주세요" />;
}
