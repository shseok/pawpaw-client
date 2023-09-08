/* eslint-disable react/jsx-no-useless-fragment */
import { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import ModalWrapper from './ModalContentWrapper';

interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  opacity?: boolean;
  position?: 'center' | 'left';
  toggle?: boolean;
  order?: number;
}

export default function Modal({
  children,
  showModal,
  setShowModal,
  opacity = true,
  position = 'center',
  toggle,
  order = 1,
}: ModalProps) {
  return (
    <>
      {showModal &&
        createPortal(
          <ModalWrapper
            showModal={showModal}
            setShowModal={setShowModal}
            opacitiyClass={opacity}
            position={position}
            toggle={toggle}
            order={order}
          >
            {children}
          </ModalWrapper>,
          document.body,
        )}
    </>
  );
}
