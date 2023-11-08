import { useState } from 'react';
import dynamic from 'next/dynamic';
import Modal from '@/components/ui/Modal';

const OwnerDelegationModal = dynamic(
  () => import('@/components/ui/Modal/OwnerDelegationModal'),
);

export default function DelegateOwnerButton() {
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
        방장넘기기
      </button>
      <Modal onClose={() => setOpen(false)} open={open}>
        <OwnerDelegationModal onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
}
