'use client';

import { useState } from 'react';
import Modal from '@/components/ui/Modal/Modal';
import UserAddPopup from '../Modal/UserAddModal';

export default function UserAddButton() {
  const [openPopup, setOpenPopup] = useState(false);
  const handleOpenPopup = () => {
    setOpenPopup(true);
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
      <Modal showModal={openPopup} setShowModal={setOpenPopup}>
        <UserAddPopup closePopup={() => setOpenPopup(false)} />
      </Modal>
    </>
  );
}
