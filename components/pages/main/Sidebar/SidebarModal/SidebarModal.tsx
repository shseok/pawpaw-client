import { Dispatch, SetStateAction } from 'react';
import Modal from '@/components/ui/Modal/Modal';
import DesktopSidebar from '../DesktopSidebar/DesktopSidebar';

interface SidebarModalProps {
  children: React.ReactNode;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  desktopWidth: string;
  activeButton: string;
  setActiveButton: (button: string) => void;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setSearchModal: Dispatch<SetStateAction<boolean>>;
  setNoticeModal: Dispatch<SetStateAction<boolean>>;
}

export default function SidebarModal({
  children,
  toggle,
  setToggle,
  desktopWidth,
  activeButton,
  setActiveButton,
  showModal,
  setShowModal,
  setSearchModal,
  setNoticeModal,
}: SidebarModalProps) {
  return (
    <Modal
      showModal={showModal}
      setShowModal={setShowModal}
      position="left"
      toggle={toggle}
    >
      <DesktopSidebar
        toggle={toggle}
        setToggle={setToggle}
        desktopWidth={desktopWidth}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setSearchModal={setSearchModal}
        setNoticeModal={setNoticeModal}
      />
      {children}
    </Modal>
  );
}
