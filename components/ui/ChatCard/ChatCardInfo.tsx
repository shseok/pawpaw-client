import Avatar from '../Avatar';
import Devider from '../Divider';
import FlexBox from '../FlexBox';

interface ChatCardInfoProps {
  masterUserImg: string;
  masterUserName: string;
  participants: number;
}

export default function ChatCardInfo({
  participants,
  masterUserImg,
  masterUserName,
}: ChatCardInfoProps) {
  return (
    <FlexBox className="text-[#74787D] gap-2 text-sm tablet:text-base">
      <Avatar user_img={masterUserImg} user_name={masterUserName} />
      <p className="font-medium">{masterUserName}</p>
      <Devider type="vertical" />
      <p>{participants}명</p>
    </FlexBox>
  );
}
