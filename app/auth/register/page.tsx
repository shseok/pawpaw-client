import Register from '@/components/pages/auth/Register';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '간편 회원가입',
  robots: 'noindex',
};

export default function RegisterPage() {
  return <Register title="계정을 생성하세요" />;
}
