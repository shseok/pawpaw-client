'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PlusIcon from '@/public/plus.svg';

export default function AddChatRoomButton() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
          <div
            className="fixed inset-0 z-40 bg-black opacity-75"
            onClick={() => setIsOpen(false)}
          />,
          document.body,
        )}
      <div className="fixed bottom-0 right-0 z-50 flex flex-col w-full gap-2 p-8 pb-20 tablet:p-8 tablet:w-80">
        {isOpen && (
          <ul className="flex flex-col w-full gap-2 body1">
            <li className="flex flex-col rounded-[10px] text-center p-4 bg-white">
              <button type="button" className="p-3">
                채팅방 만들기
              </button>
              <button type="button" className="p-3">
                채팅방 편집
              </button>
            </li>
            <li className="bg-white text-center rounded-[10px]">
              <button
                type="button"
                className="w-full p-3"
                onClick={() => setIsOpen(false)}
              >
                취소
              </button>
            </li>
          </ul>
        )}
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 flex items-center self-end justify-center p-2 bg-white border rounded-full w-14 h-14 tablet:w-20 tablet:h-20 border-primary-200 shadow-chatCard"
          >
            <PlusIcon />
          </button>
        )}
      </div>
    </>
  );
}
