'use client';

import { useState } from 'react';
import PlusIcon from '@/public/plus.svg';
import AddChatRoomModal from '@/components/ui/ModalRefactor/AddChatRoomModal';

export default function AddChatRoomButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AddChatRoomModal open={isOpen} onClose={() => setIsOpen(false)} />
      <div className="fixed bottom-0 right-0 z-50 flex flex-col w-full gap-2 p-8 pb-20 tablet:p-8 tablet:w-80">
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
