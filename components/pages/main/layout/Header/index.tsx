'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/common';
import useGetPathname from '@/hooks/common/useGetPathname';
import Search from '@/public/sidebar/magnifying-glass.svg';
import Alert from '@/public/sidebar/bell.svg';
import Logo from '@/public/logo.svg';

export default function Header() {
  const pathname = useGetPathname();
  const headerClass = cn(
    'sticky top-0 w-full tablet:hidden flex flex-row items-center justify-between border-b-[1px] border-grey-200 flex-nowrap h-[60px]  w-full bg-white z-10',
    pathname === 'Chat' ? 'hidden' : '',
  );
  return (
    <header className={headerClass}>
      <div className="ml-5 sm:ml-10">
        <Logo className="w-20 h-[23.72px]" />
      </div>
      <div className="flex flex-row mr-5 flex-nowra sm:mr-10">
        <Link href={pathname} className="mr-[18px]">
          <Search className="fill-grey-500 w-6 h-6" />
        </Link>
        <Link href={pathname}>
          <Alert className="fill-grey-500 w-6 h-6" />
        </Link>
      </div>
    </header>
  );
}
