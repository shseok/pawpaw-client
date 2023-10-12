import DotsIcon from 'public/DotsIcon.svg';
import copyToClipBoard from '@/utils/copyToClipBoard';
import { Dropdown } from '../../ui';

export default function PostCardDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <DotsIcon className="w-6 h-6 tablet:w-7 tablet:h-7" />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>북마크 추가</Dropdown.Item>
        <Dropdown.Item event={() => copyToClipBoard(window.location.href)}>
          공유하기
        </Dropdown.Item>
        <Dropdown.Item>신고하기</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
