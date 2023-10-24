import Profile from '@/components/pages/auth/Profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '프로필 설정',
  robots: 'noindex',
};

export default function ProfilePage() {
  return <Profile title="프로필을 설정해주세요" />;
}
