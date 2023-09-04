import { Fragment } from 'react';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import DotsIcon from '@/public/tabler_dots.svg';

function BookmarkOption() {
  return <Dropdown.Item>북마크 추가</Dropdown.Item>;
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
function ReportOption() {
  return <Dropdown.Item>신고하기</Dropdown.Item>;
}
const OPTION_LIST = [BookmarkOption, ShareOption, ReportOption];

export default function PostDropdownButton() {
  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <DotsIcon className="w-6 h-6 tablet:w-7 tablet:h-7" />
        </Dropdown.Trigger>
        <Dropdown.Menu>
          {OPTION_LIST.map((option, index) => (
            <Fragment key={index}>{option()}</Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
