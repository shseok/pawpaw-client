import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import DotsIcon from '@/public/tabler_dots.svg';
import FlexBox from '@/components/ui/FlexBox';
import Divider from '@/components/ui/Divider';
import ArrowRightIcon from '@/public/arrow-right.svg';
import Modal from '@/components/ui/Modal/Modal';
import ChatUserListMobile from './ChatUserListMobile';
import ScheduleListMobile from '../Schedule/ScheduleListMobile';
import LeaveChatRoomModal from '../Modal/LeaveChatRoomModal';

type ModalType = '공지' | '사진' | '채팅방 나가기' | '인원' | '스케줄' | '';
type ModalActionType = Dispatch<SetStateAction<ModalType>>;

function NotiOption({ setModalType }: { setModalType: ModalActionType }) {
  return <Dropdown.Item event={() => setModalType('공지')}>공지</Dropdown.Item>;
}
function PhotoOption({ setModalType }: { setModalType: ModalActionType }) {
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
  setModalType: ModalActionType;
}) {
  return (
    <Dropdown.Item event={() => setModalType('채팅방 나가기')}>
      채팅방 나가기
    </Dropdown.Item>
  );
}

function UserOption({ setModalType }: { setModalType: ModalActionType }) {
  return (
    <Dropdown.Item event={() => setModalType('인원')}>
      <FlexBox justify="between">
        <p>인원</p>
        <ArrowRightIcon />
      </FlexBox>
    </Dropdown.Item>
  );
}
function ScheduleOption({ setModalType }: { setModalType: ModalActionType }) {
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
  const [modalType, setModalType] = useState<ModalType>('');

  const renderModalByType = (type: ModalType) => {
    const closeModal = () => {
      setModalType('');
    };
    switch (type) {
      case '인원':
        return <ChatUserListMobile closeModal={closeModal} />;
      case '스케줄':
        return <ScheduleListMobile closeModal={closeModal} />;
      case '공지':
        return (
          <div className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen bg-white">
            <button type="button" onClick={closeModal}>
              {type}
            </button>
          </div>
        );
      case '사진':
        return (
          <div className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen bg-white">
            <button type="button" onClick={closeModal}>
              {type}
            </button>
          </div>
        );
      case '채팅방 나가기':
        return (
          <Modal
            showModal={modalType === '채팅방 나가기'}
            setShowModal={closeModal}
          >
            <LeaveChatRoomModal closeModal={closeModal} />
          </Modal>
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
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>{option({ setModalType })}</Fragment>
            ))}
            <Divider type="horizontal" />
          </div>
          {OPTION_LIST.map((option, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>{option({ setModalType })}</Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {modalType && renderModalByType(modalType)}
    </>
  );
}
