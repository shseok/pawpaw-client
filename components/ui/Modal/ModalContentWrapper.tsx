/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

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
  const modalKeyRef = useRef(showModal);
  const modalClickRef = useRef<HTMLDivElement>(null);

  const handleEscKeyClose = (event: KeyboardEvent) => {
    if (modalKeyRef.current && event.key === 'Escape') {
      setShowModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleEscKeyClose);
    return () => {
      document.removeEventListener('keydown', handleEscKeyClose);
    };
  }, []);

  const handleOutsideClickClose = (event: MouseEvent) => {
    if (
      modalClickRef.current &&
      !modalClickRef.current.contains(event.target as Node)
    ) {
      setShowModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClickClose);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClickClose);
    };
  }, []);

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
