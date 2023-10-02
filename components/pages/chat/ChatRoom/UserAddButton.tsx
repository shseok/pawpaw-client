'use client';

import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import UserAddModal from '../../../ui/Modal/UserAddModal/UserAddModal';

export default function UserAddButton() {
  const [open, setOpen] = useState(false);
  const handleOpenPopup = () => {
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        className="font-bold text-primary-200"
        onClick={handleOpenPopup}
      >
        추가
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <UserAddModal onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
}
