'use client';

import { useRouter } from 'next/navigation';
import FooterButton from './FooterButton';
import useGetPathname from '@/hooks/common/useGetPathname';
import { useState } from 'react';
import { cn } from '@/utils/common';

export default function Footer() {
  const pathname = useGetPathname();
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(pathname);

  return (
    <footer
      className={cn('block tablet:hidden', pathname === 'Chat' ? 'hidden' : '')}
    >
      <div className="fixed bottom-0 flex flex-row items-center justify-between border-t-[1px] border-grey-200 h-[54px] w-full bg-white z-10">
        <FooterButton
          buttonType="Feed"
          activeButton={activeButton}
          setActive={setActiveButton}
          router={() => router.push('/')}
        />
        <FooterButton
          buttonType="Community"
          activeButton={activeButton}
          setActive={setActiveButton}
          router={() => router.push('/community')}
        />
        <FooterButton
          buttonType="Pawzone"
          activeButton={activeButton}
          setActive={setActiveButton}
          router={() => router.push('/pawzone')}
        />
        <FooterButton
          buttonType="Mypage"
          activeButton={activeButton}
          setActive={setActiveButton}
          router={() => router.push('/mypage')}
        />
      </div>
    </footer>
  );
}
