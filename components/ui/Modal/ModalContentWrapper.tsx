/* eslint-disable react/jsx-no-useless-fragment */
import { Dispatch, SetStateAction, useRef } from 'react';
import useEscKeyClose from '@/hooks/common/useEscKeyClose';
import useOutSideClick from '@/hooks/common/useOutSideClick';

interface ModalContentWrapperProps {
  showModal: boolean;
  children: React.ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  opacitiyClass: boolean;
  position?: 'center' | 'left';
  toggle?: boolean;
}
export default function ModalContentWrapper({
  children,
  showModal,
  setShowModal,
  opacitiyClass,
  position,
  toggle,
}: ModalContentWrapperProps) {
  const modalKeyRef = useRef<HTMLElement | boolean>(showModal);
  const modalClickRef = useRef<HTMLDivElement>(null);
  useOutSideClick(modalClickRef, () => setShowModal(false));
  useEscKeyClose(modalKeyRef, () => setShowModal(false));

  return (
    <>
      {position === 'center' ? (
        <div
          className={`fixed inset-0 bg-black ${
            opacitiyClass ? 'bg-opacity-75' : 'bg-opacity-0'
          } z-50`}
        >
          <div
            ref={modalClickRef}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          >
            {children}
          </div>
        </div>
      ) : (
        <div
          className={`fixed h-full inset-0 bg-black ${
            opacitiyClass ? 'bg-opacity-75' : 'bg-opacity-0'
          } z-50 ${toggle ? 'ml-[256px]' : 'left-0 ml-[96px]'}`}
        >
          <div ref={modalClickRef} className="flex flex-row justify-start">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
