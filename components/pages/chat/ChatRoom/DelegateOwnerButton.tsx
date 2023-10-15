import { useState } from 'react';
import OwnerDelegationModal from '@/components/ui/Modal/OwnerDelegationModal';

export default function DelegateOwnerButton() {
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
        방장넘기기
      </button>
      <OwnerDelegationModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
