import Image from 'next/image';
import FlexBox from '../../FlexBox';
import Divider from '../../Divider';

export default function Location() {
  return (
    <FlexBox className="gap-3">
      <Image
        src="/Feed/desktop/currentPlaceBtn.svg"
        alt="현재위치로"
        width={24}
        height={24}
      />
      <div className="body1">
        서울특별시 마포구 <span className="header4">연남동</span>
      </div>
      <FlexBox direction="column">
        <FlexBox className="gap-1 p-2 text-grey-400">
          동네 설정하기
          <Image
            src="/Feed/desktop/arrowRight.svg"
            alt="오른쪽 화살표"
            width={16}
            height={16}
          />
        </FlexBox>
        <Divider type="horizontal" />
      </FlexBox>
    </FlexBox>
  );
}
