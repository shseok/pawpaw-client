/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function SearchModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed top-0 bottom-0 right-0 w-1/2 bg-black opacity-70"
        onClick={() => router.back()}
      />
      <div className="fixed top-0 bottom-0 left-0 flex flex-col w-full h-full bg-white sm:w-2/3 p-7">
        <button
          type="button"
          className="flex self-end px-4 py-2 rounded-[10px] hover:bg-primary-200 mb-2 bg-primary-100 hover:text-white sm:hidden"
          onClick={() => router.back()}
        >
          닫기
        </button>
        {children}
      </div>
    </div>
  );
}
