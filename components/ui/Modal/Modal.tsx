/* eslint-disable react/jsx-no-useless-fragment */
import { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import ModalWrapper from './ModalContentWrapper';

interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  opacity?: boolean;
}

export default function Modal({
  children,
  showModal,
  setShowModal,
  opacity = true,
}: ModalProps) {
  return (
    <>
      {showModal &&
        createPortal(
          <ModalWrapper
            showModal={showModal}
            setShowModal={setShowModal}
            opacitiyClass={opacity}
          >
            {children}
          </ModalWrapper>,
          document.body,
        )}
    </>
  );
}
