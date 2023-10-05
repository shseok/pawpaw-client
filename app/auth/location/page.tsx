import Location from '@/components/pages/auth/Location';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '위치 설정',
  robots: 'noindex',
};

export default function LocationPage() {
  return <Location title="위치를 설정해주세요" />;
}
