import { useInput } from '@/hooks/common/useInput';
import { useCheckbox } from '@/hooks/common/useCheckbox';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/X.svg';
import SearchInput from '@/components/ui/SearchInput';
import SearchedUserList from './SearchedUserList';

const userList = [
  { image: '/default.png', name: '닉네임1', petName: '3살 감자' },
  { image: '/default.png', name: '닉네임2', petName: '4살 감자' },
  { image: '/default.png', name: '닉네임3', petName: '5살 감자' },
  { image: '/default.png', name: '닉네임12', petName: '3살 감자' },
  { image: '/default.png', name: '닉네임23', petName: '4살 감자' },
  { image: '/default.png', name: '닉네임34', petName: '5살 감자' },
  { image: '/default.png', name: '닉네임15', petName: '3살 감자' },
  { image: '/default.png', name: '닉네임26', petName: '4살 감자' },
  { image: '/default.png', name: '닉네임33', petName: '5살 감자' },
];

export default function UserAddModal({
  closePopup,
}: {
  closePopup: () => void;
}) {
  const { value, resetValue, onChangeValue } = useInput('');
  const { checkedList, handleCheckboxChange } = useCheckbox();

  return (
    <FlexBox direction="column" className="w-full md:w-[672px] gap-4 ">
      <div className="self-end">
        <button type="button" onClick={closePopup}>
          <XIcon className="w-8 h-8" />
        </button>
      </div>
      <FlexBox
        direction="column"
        className="bg-white rounded-[10px] p-9 gap-7 w-full"
      >
        <header className="w-full header2">인원 추가</header>
        <SearchInput
          value={value}
          onChangeValue={onChangeValue}
          resetValue={resetValue}
        />
        <SearchedUserList
          userList={userList}
          checkedList={checkedList}
          handleCheckboxChange={handleCheckboxChange}
        />
        <Button
          className="w-full header3"
          size="lg"
          disabled={checkedList.length === 0}
        >
          추가하기
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
