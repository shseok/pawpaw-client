'use client';

import { cn } from '@/utils/common';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { generatePagination } from '@/utils/utils';
import CaretLeftIcon from '@/public/svgs/CaretLeft.svg';
import CaretRightIcon from '@/public/svgs/CaretRight.svg';

type PaginationPosition = 'first' | 'last' | 'middle' | 'single';

function PaginationArrow({
  direction,
  href,
  isDisabled,
}: {
  direction: 'left' | 'right';
  href: string;
  isDisabled?: boolean;
}) {
  const className = cn(
    'flex h-10 w-10 items-center justify-center rounded-md border',
    {
      'pointer-events-none text-gray-300': isDisabled,
      'hover:bg-gray-100': !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    },
  );
  const icon =
    direction === 'left' ? (
      <CaretLeftIcon className="w-4 " />
    ) : (
      <CaretRightIcon className="w-4" />
    );
  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href} replace>
      {icon}
    </Link>
  );
}
function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  const className = cn(
    'flex h-10 w-10 items-center justify-center text-sm border',
    {
      'rounded-l-md': position === 'first' || position === 'single',
      'rounded-r-md': position === 'last' || position === 'single',
      'z-10 bg-primary-200 border-primary-200 text-white': isActive,
      'hover:bg-primary-100': !isActive && position !== 'middle',
      'text-gray-300': position === 'middle',
    },
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className} replace>
      {page}
    </Link>
  );
}

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  if (!totalPages) return null;
  return (
    <div className="inline-flex pt-2 mx-auto">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position: PaginationPosition | undefined;
          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';
          return (
            <PaginationNumber
              key={page}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}
