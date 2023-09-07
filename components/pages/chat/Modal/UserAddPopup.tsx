import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/X.svg';
import SearchInput from '@/components/ui/SearchInput';

export default function UserAddPopup({
  closePopup,
}: {
  closePopup: () => void;
}) {
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
        <SearchInput />
        <Button className="w-full mt-10 header3" size="lg">
          추가하기
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
