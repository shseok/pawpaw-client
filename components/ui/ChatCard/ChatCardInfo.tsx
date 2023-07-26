import Avatar from "../Avatar";
import FlexBox from "../FlexBox";

interface ChatCardInfo {
  master_user_img: string;
  master_user_name: string;
  headcount: number;
}

export default function ChatCardInfo({
  headcount,
  master_user_img,
  master_user_name,
}: ChatCardInfo) {
  return (
    <FlexBox className="text-[#74787D] gap-3">
      <Avatar user_img={master_user_img} user_name={master_user_name} />
      <p className="font-bold ">{master_user_name}</p>
      <p>{headcount}명</p>
    </FlexBox>
  );
}
