import { ModalProps } from '@/types/types';
import Modal from '..';

interface ConfirmModalProps extends ModalProps {
  children: React.ReactNode;
}

export default function ConfirmModal({
  onClose,
  open,
  children,
}: ConfirmModalProps) {
  return (
    <Modal onClose={onClose} open={open}>
      <div className="h-36 bg-white w-80 rounded-[10px] flex flex-col justify-between p-4">
        {children}
      </div>
    </Modal>
  );
}
