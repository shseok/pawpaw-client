'use client';

import { useState } from 'react';
import PlusIcon from '@/public/plus.svg';
import ModalTest from '@/components/ui/ModalRefactor';

export default function AddChatRoomButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [두번째모달, 두번째모달상태변경] = useState(false);

  return (
    <>
      <ModalTest open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-full bg-white">
          <button type="button" onClick={() => 두번째모달상태변경(!두번째모달)}>
            두번째 모달 오픈
          </button>
          <div>test</div>
        </div>
      </ModalTest>
      <ModalTest open={두번째모달} onClose={() => 두번째모달상태변경(false)}>
        <div className="bg-red">
          <button type="button" onClick={() => 두번째모달상태변경(false)}>
            두번째 모달 닫기 입니다.
          </button>
          <button type="button" onClick={() => 두번째모달상태변경(false)}>
            두번째 모달 닫기 입니다.
          </button>
        </div>
      </ModalTest>

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
