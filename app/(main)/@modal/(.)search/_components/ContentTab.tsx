/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { cn } from '@/utils/common';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const links = [
  { name: '채팅방', href: 'chatrooms' },
  { name: '게시물', href: 'boards' },
];

export default function ContentTab() {
  const pathname = usePathname();
  const params = useSearchParams();
  const currentPath = params.toString().split('=')[0];
  const { replace } = useRouter();
  return (
    <nav>
      <ul className="flex">
        {links.map((link) => (
          <li
            onClick={() =>
              replace(`${pathname}?${link.href}`, { scroll: false })
            }
            key={link.name}
            className={cn(
              'text-grey-300 header4 p-3 border-b-2 cursor-pointer',
              link.href === currentPath &&
                'text-primary-200 border-primary-200',
            )}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
