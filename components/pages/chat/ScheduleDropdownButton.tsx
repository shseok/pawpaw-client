import { Fragment } from 'react';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import DotsIcon from '@/public/tabler_dots.svg';

function ScheduleAddOption() {
  return <Dropdown.Item>스케줄 추가</Dropdown.Item>;
}
function ScheduleEditOption() {
  return <Dropdown.Item>스케줄 편집</Dropdown.Item>;
}

const OPTION_LIST = [ScheduleAddOption, ScheduleEditOption];

export default function ScheduleDropdownButton() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <DotsIcon className="w-7 h-7" />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        {OPTION_LIST.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={index}>{option()}</Fragment>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
