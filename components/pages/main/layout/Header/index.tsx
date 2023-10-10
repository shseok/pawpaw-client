'use client';

import React from 'react';
import { cn } from '@/utils/common';
import useGetPathname from '@/hooks/common/useGetPathname';
import HeaderLogo from './HeaderLogo';
import Search from '@/public/sidebar/magnifying-glass.svg';
import Alert from '@/public/sidebar/bell.svg';
import Link from 'next/link';

export default function Header() {
  const pathname = useGetPathname();

  return (
    <header
      className={cn('block tablet:hidden', pathname === 'Chat' ? 'hidden' : '')}
    >
      <div className="fixed flex flex-row items-center justify-between border-b-[1px] border-grey-200 flex-nowrap h-[60px]  w-full bg-white z-10">
        <div className="ml-5 sm:ml-10">
          <HeaderLogo />
        </div>
        <div className="flex flex-row mr-5 flex-nowra sm:mr-10">
          <Link href={pathname} className="mr-[18px]">
            <Search className="fill-grey-500 w-6 h-6" />
          </Link>
          <Link href={pathname}>
            <Alert className="fill-grey-500 w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
