import Complete from '@/components/pages/auth/Complete';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '가입 완료',
  robots: 'noindex',
};

export default function CompletePage() {
  return <Complete />;
}
