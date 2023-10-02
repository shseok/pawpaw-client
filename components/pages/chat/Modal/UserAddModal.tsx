import useCheckbox from '@/hooks/common/useCheckbox';
import useInput from '@/hooks/common/useInput';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/X.svg';
import SearchInput from '@/components/ui/Input/SearchInput';
import ArrowLeftIcon from '@/public/arrow-left.svg';
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

export default function UserAddModal({ onClose }: { onClose: () => void }) {
  const [value, onChangeValue, resetValue] = useInput('');
  const { checkedList, handleCheckboxChange } = useCheckbox();

  return (
    <FlexBox
      direction="column"
      className="w-screen tablet:w-[672px] gap-4 h-screen"
    >
      <div className="self-end hidden tablet:block">
        <button type="button" onClick={onClose}>
          <XIcon className="w-8 h-8" />
        </button>
      </div>
      <FlexBox
        direction="column"
        className="bg-white rounded-[10px] p-4 tablet:p-9 gap-7 w-full h-screen tablet:h-auto"
      >
        <header className="flex items-center w-full header2">
          <button
            type="button"
            className="block tablet:hidden"
            onClick={onClose}
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <span className="self-center">인원 추가</span>
        </header>
        <SearchInput
          placeholder="추가할 인원의 아이디나 닉네임을 검색해보세요"
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
