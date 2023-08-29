import { createPortal } from 'react-dom';
import { Dispatch, SetStateAction } from 'react';
import ModalContentWrapper from './ModalContentWrapper';

interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  opacity?: 'yes' | 'no';
}

const bgOpacitiy = {
  yes: true,
  no: false,
};

export default function Modal({
  children,
  showModal,
  setShowModal,
  opacity = 'yes',
}: ModalProps) {
  const opacitiyClass = bgOpacitiy[opacity];
  return (
    <div>
      {showModal &&
        createPortal(
          <ModalContentWrapper
            showModal={showModal}
            setShowModal={setShowModal}
            opacitiyClass={opacitiyClass}
          >
            {children}
          </ModalContentWrapper>,
          document.body,
        )}
    </div>
  );
}
