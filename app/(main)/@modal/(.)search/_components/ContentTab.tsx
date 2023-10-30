'use client';

import Link from 'next/link';
// import { usePathname, useSearchParams } from 'next/navigation';

const links = [
  { name: '채팅방', href: 'chatrooms' },
  { name: '게시물', href: 'boards' },
];

export default function ContentTab() {
  //   const pathname = usePathname();
  //   const params = useSearchParams();

  return (
    <>
      {links.map((link) => (
        <Link href={link.href} key={link.name} className="">
          {link.name}
        </Link>
      ))}
    </>
  );
}
