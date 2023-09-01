import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/X.svg';
import SearchInput from '@/components/ui/SearchInput';
import { useInput } from '@/hooks/common/useInput';

export default function UserAddModal({
  closePopup,
}: {
  closePopup: () => void;
}) {
  const { value, resetValue, onChangeValue } = useInput('');

  return (
    <FlexBox direction="column" className="w-[672px] gap-4">
      <div className="self-end">
        <button type="button" onClick={closePopup}>
          <XIcon className="w-8 h-8" />
        </button>
      </div>
      <FlexBox
        direction="column"
        className="w-full bg-white rounded-[10px] p-9 gap-7 "
      >
        <header className="w-full header2">인원 추가</header>
        <SearchInput
          value={value}
          onChangeValue={onChangeValue}
          resetValue={resetValue}
        />
        <Button className="w-full mt-10 header3" size="lg">
          추가하기
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
