import Avatar from "../Avatar";
import Devider from "../Divider";
import FlexBox from "../FlexBox";

interface ChatCardInfo {
  masterUserImg: string;
  masterUserName: string;
  participants: number;
}

export default function ChatCardInfo({
  participants,
  masterUserImg,
  masterUserName,
}: ChatCardInfo) {
  return (
    <FlexBox className="text-[#74787D] gap-3 text-sm tablet:text-base">
      <Avatar user_img={masterUserImg} user_name={masterUserName} />
      <p className="font-medium">{masterUserName}</p>
      <Devider type="vertical" />
      <p>{participants}명</p>
    </FlexBox>
  );
}
