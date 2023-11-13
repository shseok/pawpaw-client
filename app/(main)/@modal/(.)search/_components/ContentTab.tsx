'use client';

import { cn } from '@/utils/common';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const links = [
  { name: '전체', href: '/search' },
  { name: '채팅방', href: '/search/chatrooms' },
  { name: '게시물', href: '/search/boards' },
];

export default function ContentTab() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  return (
    <nav className="mt-2">
      <ul className="flex">
        {links.map((link) => (
          <li key={link.name} className="flex w-full">
            <Link
              href={{
                pathname: link.href,
                query: {
                  ...(query && { query }), // query가 존재하면 { query }를 사용하고, 그렇지 않으면 빈 객체
                },
              }}
              className={cn(
                'text-grey-300 p-2 flex-1 text-center header4  border-b-2 cursor-pointer',
                link.href === pathname && 'text-primary-200 border-primary-200',
                link.href !== pathname &&
                  'hover:text-primary-100 hover:border-primary-100',
              )}
              replace
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
