/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client';

import { useEffect, useState } from 'react';
import useViewportTracker from '@/hooks/common/useViewportTracker';
import { useBodyScrollLock } from '@/hooks/common/useBodyScrollLock';
import ResponsiveNavbar from './Responsive/ResponsiveNavbar';
import useGetPathname from './hooks/useGetPathname';
import DesktopSidebar from './DesktopSidebar/DesktopSidebar';
import SidebarModal from './SidebarModal/SidebarModal';

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
        <SidebarModal
          showModal={searchModal}
          setShowModal={setSearchModal}
          toggle={toggle}
          setToggle={setToggle}
          desktopWidth={desktopWidth}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          setSearchModal={setSearchModal}
          setNoticeModal={setNoticeModal}
          viewportWidth={viewportWidth}
        >
          {/* 검색모달컴포넌트 시작점 */}
          <div className="fixed w-[696px] h-screen bg-white overflow-auto">
            <div>searchModal</div>
          </div>
          {/* 검색모달컴포넌트 끝점 */}
        </SidebarModal>
      ) : noticeModal ? (
        <SidebarModal
          showModal={noticeModal}
          setShowModal={setNoticeModal}
          toggle={toggle}
          setToggle={setToggle}
          desktopWidth={desktopWidth}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          setSearchModal={setSearchModal}
          setNoticeModal={setNoticeModal}
          viewportWidth={viewportWidth}
        >
          {/* 알림모달컴포넌트 시작점 */}
          <div className="fixed w-[696px] h-screen bg-white overflow-auto">
            <div>noticeModal</div>
          </div>
          {/* 알림모달컴포넌트 끝점 */}
        </SidebarModal>
      ) : (
        <DesktopSidebar
          toggle={toggle}
          setToggle={setToggle}
          desktopWidth={desktopWidth}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          setSearchModal={setSearchModal}
          setNoticeModal={setNoticeModal}
          viewportWidth={viewportWidth}
        />
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
