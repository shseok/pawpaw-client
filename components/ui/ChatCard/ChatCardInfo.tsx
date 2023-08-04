import Avatar from "../Avatar";
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
    <FlexBox className="text-[#74787D] gap-3">
      <Avatar user_img={masterUserImg} user_name={masterUserName} />
      <p className="font-medium">{masterUserName}</p>
      <p>{participants}명</p>
    </FlexBox>
  );
}
