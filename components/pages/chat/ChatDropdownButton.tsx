import { Fragment, useState } from 'react';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import DotsIcon from '@/public/tabler_dots.svg';
import FlexBox from '@/components/ui/FlexBox';
import Portal from '@/utils/Portal';
import Divider from '@/components/ui/Divider';
import ArrowRightIcon from '@/public/arrow-right.svg';
import UserListModal from './UserListModal';
import ScheduleListModal from './ScheduleListModal';

function NotiOption() {
  return <Dropdown.Item>공지</Dropdown.Item>;
}
function PhotoOption() {
  return <Dropdown.Item>사진</Dropdown.Item>;
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
function LeaveChatRoomOption() {
  return <Dropdown.Item>채팅방 나가기</Dropdown.Item>;
}
const OPTION_LIST = [NotiOption, PhotoOption, ShareOption, LeaveChatRoomOption];

export default function ChatDropdownButton() {
  const [modalType, setModalType] = useState('');
  const handleShowModal = (type: string) => {
    setModalType(type);
  };
  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <DotsIcon className="w-6 h-6 tablet:w-7 tablet:h-7" />
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <div className="flex flex-col w-full gap-2 tablet:hidden">
            <Dropdown.Item event={() => handleShowModal('user')}>
              <FlexBox justify="between">
                <p>인원</p>
                <ArrowRightIcon />
              </FlexBox>
            </Dropdown.Item>
            <Dropdown.Item event={() => handleShowModal('schedule')}>
              <FlexBox justify="between">
                <p>스케줄</p>
                <ArrowRightIcon />
              </FlexBox>
            </Dropdown.Item>
            <Divider type="horizontal" />
          </div>
          {OPTION_LIST.map((option, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>{option()}</Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {modalType !== '' && (
        <Portal>
          {modalType === 'user' ? (
            <UserListModal setModalType={setModalType} />
          ) : (
            <ScheduleListModal setModalType={setModalType} />
          )}
        </Portal>
      )}
    </>
  );
}
