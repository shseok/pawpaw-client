import { Dispatch, SetStateAction, useRef } from 'react';
import useEscKeyClose from '@/hooks/common/useEscKeyClose';
import useOutSideClick from '@/hooks/common/useOutSideClick';

interface ModalContentWrapperProps {
  showModal: boolean;
  children: React.ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  opacitiyClass: boolean;
}
export default function ModalContentWrapper({
  children,
  showModal,
  setShowModal,
  opacitiyClass,
}: ModalContentWrapperProps) {
  const modalKeyRef = useRef<HTMLElement | boolean>(showModal);
  const modalClickRef = useRef<HTMLDivElement>(null);
  useOutSideClick(modalClickRef, () => setShowModal(false));
  useEscKeyClose(modalKeyRef, () => setShowModal(false));

  return (
    <div
      className={`fixed inset-0 bg-black ${
        opacitiyClass ? 'bg-opacity-50' : 'bg-opacity-0'
      }`}
    >
      <div
        ref={modalClickRef}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
      >
        {children}
      </div>
    </div>
  );
}
