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
  const footerClass = cn(
    'sticky bottom-0 tablet:hidden flex flex-row items-center justify-between border-t-[1px] border-grey-200 h-[54px] w-full bg-white z-10',
    pathname === 'Chat' ? 'hidden' : '',
  );
  const clickHandler = (link: string) => {
    const activeLink =
      link === 'Feed'
        ? '/'
        : `/${link.charAt(0).toLowerCase()}${link.slice(1)}`;
    setActiveButton(link);
    router.push(activeLink);
  };

  return (
    <footer className={footerClass}>
      {buttonArrays.map((buttonType) => (
        <FooterButton
          buttonType={buttonType as ButtonType}
          activeButton={activeButton}
          clickHandler={() => clickHandler(buttonType)}
          key={buttonType}
        />
      ))}
    </footer>
  );
}
