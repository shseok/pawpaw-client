/* eslint-disable react/jsx-no-useless-fragment */
import { Dispatch, SetStateAction, useRef } from 'react';
import useEscKeyClose from '@/hooks/common/useEscKeyClose';
import useScrollLock from '@/hooks/common/useScrollLock';

interface ModalContentWrapperProps {
  showModal: boolean;
  children: React.ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  opacitiyClass: boolean;
  position?: 'center' | 'left';
  toggle?: boolean;
  order?: number;
}
export default function ModalContentWrapper({
  children,
  showModal,
  setShowModal,
  opacitiyClass,
  position,
  toggle,
  order,
}: ModalContentWrapperProps) {
  const modalKeyRef = useRef<HTMLElement | boolean>(showModal);
  const modalClickRef = useRef<HTMLDivElement>(null);
  useEscKeyClose(modalKeyRef, () => setShowModal(false));
  useScrollLock();

  return (
    <>
      {position === 'center' ? (
        <>
          <button
            className={`fixed inset-0 bg-black ${
              opacitiyClass ? 'bg-opacity-75' : 'bg-opacity-0'
            } ${order === 1 ? 'z-10' : 'z-30'} cursor-default`}
            type="button"
            onClick={() => setShowModal(false)}
          >
            {' '}
          </button>
          <div
            ref={modalClickRef}
            className={`fixed ${
              order === 1 ? 'z-20' : 'z-40'
            } transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 tablet:w-fit tablet:h-fit w-full h-full`}
          >
            {children}
          </div>
        </>
      ) : (
        <>
          <button
            className={`fixed inset-0 bg-black ${
              opacitiyClass ? 'bg-opacity-75' : 'bg-opacity-0'
            } z-10 cursor-default`}
            type="button"
            onClick={() => setShowModal(false)}
          >
            {' '}
          </button>
          <div
            ref={modalClickRef}
            className={`fixed top-0 z-20 ${
              toggle ? 'tablet:ml-[256px] ml-0' : 'tablet:ml-[96px] ml-0'
            }tablet:w-fit tablet:h-fit w-full h-full`}
          >
            {children}
          </div>
        </>
      )}
    </>
  );
}
