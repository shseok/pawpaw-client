/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client';

import { useEffect, useState } from 'react';
import useViewportTracker from '@/hooks/common/useViewportTracker';
import Modal from '@/components/ui/Modal/Modal';
import { useBodyScrollLock } from '@/hooks/common/useBodyScrollLock';
import SideButtonContainer from './SideButtonContainer';
import BottomToggle from './BottomToggle';
import SidebarLogo from './SidebarLogo';
import ResponsiveNavbar from './Responsive/ResponsiveNavbar';
import useGetPathname from './hooks/useGetPathname';

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const desktopWidth = toggle === true ? `w-[256px]` : `w-[96px]`;
  const viewportWidth = useViewportTracker();
  const pathname = useGetPathname();
  const [activeButton, setActiveButton] = useState(pathname);
  const [searchModal, setSearchModal] = useState(false);
  const [noticeModal, setNoticeModal] = useState(false);
  const { lockScroll, openScroll } = useBodyScrollLock();

  useEffect(() => {
    searchModal ? lockScroll() : openScroll();
    if (searchModal === false && noticeModal === false) {
      setActiveButton(pathname);
    }
  }, [searchModal, noticeModal]);

  useEffect(() => {
    viewportWidth?.width! < 1240 ? setToggle(false) : setToggle(true);
  }, [viewportWidth]);

  useEffect(() => {
    setActiveButton(pathname);
  }, [pathname]);

  return (
    <>
      {searchModal ? (
        <Modal
          showModal={searchModal}
          setShowModal={setSearchModal}
          position="left"
          toggle={toggle}
        >
          <nav
            className={`fixed h-screen left-0 bg-[#F7F8F9] hidden tablet:block ${desktopWidth}`}
          >
            <SidebarLogo desktopWidth={toggle} />
            <SideButtonContainer
              desktopWidth={toggle}
              activeButton={activeButton}
              setActive={setActiveButton}
              setSearchModal={setSearchModal}
              setNoticeModal={setNoticeModal}
            />
            <BottomToggle
              desktopWidth={toggle}
              toggleButton={() => setToggle(!toggle)}
              viewport={viewportWidth?.width}
            />
          </nav>
          <div className="fixed w-[696px] h-screen bg-white overflow-auto">
            <div>dd</div>
          </div>
        </Modal>
      ) : (
        <nav
          className={`fixed h-screen left-0 bg-[#F7F8F9] hidden tablet:block ${desktopWidth}`}
        >
          <SidebarLogo desktopWidth={toggle} />
          <SideButtonContainer
            desktopWidth={toggle}
            activeButton={activeButton}
            setActive={setActiveButton}
            setSearchModal={setSearchModal}
            setNoticeModal={setNoticeModal}
          />
          <BottomToggle
            desktopWidth={toggle}
            toggleButton={() => setToggle(!toggle)}
            viewport={viewportWidth?.width}
          />
        </nav>
      )}
      <div>
        <div className={`sticky hidden tablet:block ${desktopWidth}`} />
      </div>
      {pathname === 'Chat' ? (
        <div className="hidden">
          <ResponsiveNavbar
            activeButton={activeButton}
            setActive={setActiveButton}
          />
        </div>
      ) : (
        <ResponsiveNavbar
          activeButton={activeButton}
          setActive={setActiveButton}
        />
      )}
    </>
  );
}
