'use client';

import { useState } from 'react';
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
      <UserAddModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
