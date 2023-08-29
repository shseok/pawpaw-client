import { useState } from 'react';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import DotsIcon from '@/public/tabler_dots.svg';
import FlexBox from '@/components/ui/FlexBox';
import Portal from '@/utils/Portal';
import Divider from '@/components/ui/Divider';
import ArrowRightIcon from '@/public/arrow-right.svg';
import UserListModal from './UserListModal';
import ScheduleListModal from './ScheduleListModal';

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert('복사 성공');
  } catch {
    alert('복사 실패');
  }
};
const leaveChatRoom = () => {
  window.location.replace('/community');
};
const CHAT_ROOM_OPTIONS = [
  { name: '공지' },
  { name: '사진' },
  { name: '링크' },
  { name: '공유하기', event: copyToClipboard },
  { name: '채팅방 나가기', event: leaveChatRoom },
];

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
          {CHAT_ROOM_OPTIONS.map((option) => (
            <Dropdown.Item key={option.name} event={option.event}>
              {option.name}
            </Dropdown.Item>
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
