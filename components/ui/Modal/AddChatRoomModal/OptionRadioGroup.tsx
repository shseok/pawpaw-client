import FlexBox from '../../FlexBox';
import { RadioGroup } from '../../RadioGroup';

interface OptionRadioGroupProps {
  option: string;
  onChangeOption: (value: string) => void;
}

export default function OptionRadioGroup({
  option,
  onChangeOption,
}: OptionRadioGroupProps) {
  return (
    <FlexBox direction="column" align="start" className="order-3 gap-6">
      <RadioGroup value={option} onChange={onChangeOption}>
        <div className="flex flex-col gap-2">
          <RadioGroup.Item option="1">지역 입장 조건 설정</RadioGroup.Item>
          <span className="body3">
            지역을 입장조건으로 설정하면, 설정된 정보가 있는 멤버만 채팅장에
            입장할 수 있습니다.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <RadioGroup.Item option="2">검색허용</RadioGroup.Item>
          <span className="body3">
            채팅방 이름 혹은 태그로 검색 할 수 있게 합니다.
          </span>
        </div>
      </RadioGroup>
    </FlexBox>
  );
}
