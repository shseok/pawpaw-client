'use client';

import { useState, useEffect } from 'react';
import PlusIcon from '@/public/plus.svg';
import AddChatRoomModal from '@/components/ui/ModalRefactor/AddChatRoomModal';

export default function AddChatRoomButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  });
  if (!isClient) return null;

  return (
    <>
      <AddChatRoomModal open={isOpen} onClose={() => setIsOpen(false)} />
      {!isOpen && (
        <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 mb-20 mr-8 tablet:w-80">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 flex items-center self-end justify-center bg-white border rounded-full w-14 h-14 tablet:w-20 tablet:h-20 border-primary-200 shadow-chatCard"
          >
            <PlusIcon />
          </button>
        </div>
      )}
    </>
  );
}
