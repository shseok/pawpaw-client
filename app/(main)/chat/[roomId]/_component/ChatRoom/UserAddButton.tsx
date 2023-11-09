'use client';

import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import dynamic from 'next/dynamic';

const UserAddModal = dynamic(
  () => import('@/components/ui/Modal/UserAddModal/UserAddModal'),
  { ssr: false },
);

export default function UserAddButton() {
  const [open, setOpen] = useState(false);
  const handleOpenPopup = () => {
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        className="body2 text-primary-200"
        onClick={handleOpenPopup}
      >
        초대
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <UserAddModal onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
}
