'use client';

import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import DotsIcon from '@/public/tabler_dots.svg';
import Modal from '@/components/ui/Modal';
import ScheduleAddModal from '../Modal/ScheduleAddModal';

function ScheduleAddOption({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dropdown.Item event={() => setIsOpen(true)}>스케줄 추가</Dropdown.Item>
  );
}
function ScheduleEditOption() {
  return <Dropdown.Item>스케줄 편집</Dropdown.Item>;
}

const OPTION_LIST = [ScheduleAddOption, ScheduleEditOption];
export default function ScheduleDropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <DotsIcon className="w-7 h-7" />
        </Dropdown.Trigger>
        <Dropdown.Menu>
          {OPTION_LIST.map((option, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>{option({ setIsOpen })}</Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {isOpen && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <ScheduleAddModal closeModal={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}
