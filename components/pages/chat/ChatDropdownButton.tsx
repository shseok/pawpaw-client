import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import DotsIcon from '@/public/tabler_dots.svg';
import FlexBox from '@/components/ui/FlexBox';
import Portal from '@/utils/Portal';
import Divider from '@/components/ui/Divider';
import ArrowRightIcon from '@/public/arrow-right.svg';
import UserListModal from './UserListModal';
import ScheduleListModal from './ScheduleListModal';
type PopupType = '공지' | '사진' | '채팅방 나가기' | '인원' | '스케줄' | '';
type PopupActionType = Dispatch<SetStateAction<PopupType>>;
function NotiOption({ setModalType }: { setModalType: PopupActionType }) {
  return <Dropdown.Item event={() => setModalType('공지')}>공지</Dropdown.Item>;
}
function PhotoOption({ setModalType }: { setModalType: PopupActionType }) {
  return <Dropdown.Item event={() => setModalType('사진')}>사진</Dropdown.Item>;
}
function ShareOption() {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('복사 성공');
    } catch {
      alert('복사 실패');
    }
  };
  return <Dropdown.Item event={copyToClipboard}>공유하기</Dropdown.Item>;
}

function LeaveChatRoomOption({
  setModalType,
}: {
  setModalType: PopupActionType;
}) {
  return (
    <Dropdown.Item event={() => setModalType('채팅방 나가기')}>
      채팅방 나가기
    </Dropdown.Item>
  );
}

function UserOption({ setModalType }: { setModalType: PopupActionType }) {
  return (
    <Dropdown.Item event={() => setModalType('인원')}>
      <FlexBox justify="between">
        <p>인원</p>
        <ArrowRightIcon />
      </FlexBox>
    </Dropdown.Item>
  );
}
function ScheduleOption({ setModalType }: { setModalType: PopupActionType }) {
  return (
    <Dropdown.Item event={() => setModalType('스케줄')}>
      <FlexBox justify="between">
        <p>스케줄</p>
        <ArrowRightIcon />
      </FlexBox>
    </Dropdown.Item>
  );
}
const OPTION_LIST = [NotiOption, PhotoOption, ShareOption, LeaveChatRoomOption];
const MOBILE_OPTION_LIST = [UserOption, ScheduleOption];
export default function ChatDropdownButton() {
  const [modalType, setModalType] = useState<PopupType>('');

  const renderPopupHandler = (type: PopupType) => {
    const closePopup = () => {
      setModalType('');
    };
    switch (type) {
      case '인원':
        return <UserListModal closePopup={closePopup} />;
      case '스케줄':
        return <ScheduleListModal closePopup={closePopup} />;
      case '공지':
        return (
          <div className="fixed top-0 bottom-0 z-50 w-full h-screen bg-white">
            <button type="button" onClick={closePopup}>
              {type}
            </button>
          </div>
        );
      case '사진':
        return (
          <div className="fixed top-0 bottom-0 z-50 w-full h-screen bg-white">
            <button type="button" onClick={closePopup}>
              {type}
            </button>
          </div>
        );
      case '채팅방 나가기':
        return (
          <div className="fixed top-0 bottom-0 z-50 w-full h-screen bg-white">
            <button type="button" onClick={closePopup}>
              {type}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <DotsIcon className="w-6 h-6 tablet:w-7 tablet:h-7" />
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <div className="flex flex-col w-full gap-2 tablet:hidden">
            {MOBILE_OPTION_LIST.map((option, index) => (
              <Fragment key={index}>{option({ setModalType })}</Fragment>
            ))}
            <Divider type="horizontal" />
          </div>
          {OPTION_LIST.map((option, index) => (
            <Fragment key={index}>{option({ setModalType })}</Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {modalType !== '' && <Portal>{renderPopupHandler(modalType)}</Portal>}
    </>
  );
}
