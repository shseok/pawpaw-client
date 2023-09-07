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
    // eslint-disable-next-line react/jsx-no-useless-fragment
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
