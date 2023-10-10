'use client';

import { useRouter } from 'next/navigation';
import FooterButton, { ButtonType } from './FooterButton';
import useGetPathname from '@/hooks/common/useGetPathname';
import { useState } from 'react';
import { cn } from '@/utils/common';
import { buttonArrays } from '../Sidebar/SideButtonContainer';

export default function Footer() {
  const pathname = useGetPathname();
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(pathname);

  const clickHandler = (link: string) => {
    const activeLink =
      link === 'Feed'
        ? '/'
        : `/${link.charAt(0).toLowerCase()}${link.slice(1)}`;
    setActiveButton(link);
    router.push(activeLink);
  };

  return (
    <footer
      className={cn('block tablet:hidden', pathname === 'Chat' ? 'hidden' : '')}
    >
      <div className="fixed bottom-0 flex flex-row items-center justify-between border-t-[1px] border-grey-200 h-[54px] w-full bg-white z-10">
        {buttonArrays.map((buttonType) => (
          <FooterButton
            buttonType={buttonType as ButtonType}
            activeButton={activeButton}
            clickHandler={() => clickHandler(buttonType)}
          />
        ))}
      </div>
    </footer>
  );
}
