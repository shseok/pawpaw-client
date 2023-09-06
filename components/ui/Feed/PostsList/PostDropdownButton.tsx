/* eslint-disable react/no-array-index-key */
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import DotsIcon from '@/public/tabler_dots.svg';
import copyURL from '@/utils/copyURL';

export default function PostDropdownButton() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <DotsIcon className="w-6 h-6 tablet:w-7 tablet:h-7" />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>북마크 추가</Dropdown.Item>
        <Dropdown.Item event={copyURL}>공유하기</Dropdown.Item>
        <Dropdown.Item>신고하기</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
