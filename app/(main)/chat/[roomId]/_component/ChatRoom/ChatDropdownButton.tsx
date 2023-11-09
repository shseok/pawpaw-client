import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import DotsIcon from '@/public/svgs/tabler_dots.svg';
import FlexBox from '@/components/ui/FlexBox';
import Divider from '@/components/ui/Divider';
import ArrowRightIcon from '@/public/svgs/arrow-right.svg';
import Modal from '@/components/ui/Modal';
import LeaveChatRoomModal from '@/components/ui/Modal/LeaveChatRoomModal';
import copyToClipBoard from '@/utils/copyToClipBoard';
import dynamic from 'next/dynamic';

const ScheduleListMobile = dynamic(
  () => import('../Schedule/ScheduleListMobile'),
);
const ChatUserListMobile = dynamic(() => import('./ChatUserListMobile'));

type ModalType = '채팅방 나가기' | '인원' | '스케줄' | '';
type ModalActionType = Dispatch<SetStateAction<ModalType>>;

function ShareOption() {
  return (
    <Dropdown.Item event={() => copyToClipBoard(window.location.href)}>
      공유하기
    </Dropdown.Item>
  );
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

const OPTION_LIST = [ShareOption, LeaveChatRoomOption];
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
      case '채팅방 나가기':
        return (
          <Modal open={modalType === '채팅방 나가기'} onClose={closeModal}>
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
