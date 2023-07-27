"use client";
import Button from "../Button";
import FlexBox from "../FlexBox";
import Tag from "../Tag";
import ChatCardTitle from "./ChatCardTitle";
import ChatCardInfo from "./ChatCardInfo";
import ShareIcon from "@/public/share.svg";
export default function ChatCard() {
  return (
    <FlexBox
      direction="column"
      align="start"
      className="w-full max-h-[266px] p-8 rounded-[10px] gap-3 shadow-chatCard truncate"
    >
      <FlexBox justify="between" className="w-full ">
        <ChatCardTitle title={"천하제일 내 반려동물 자랑방"} />
        <button>
          <ShareIcon />
        </button>
      </FlexBox>
      <p>반려동물을 키우는 사람이라면 누구나 들어와서 자랑해주세요~</p>
      <FlexBox className="gap-3">
        {["20대이상", "자랑", "강아지", "고양이", "앵무새"].map((item) => {
          return <Tag key={item} tagName={item} />;
        })}
        ...
      </FlexBox>
      <FlexBox justify="between" className="w-full">
        <ChatCardInfo
          participants={42}
          master_user_img={"/default.png"}
          master_user_name={"닉네임"}
        />
        <Button>입장하기</Button>
      </FlexBox>
    </FlexBox>
  );
}
// 해당 컴포넌트는 클라이언트?서버? 서버컴포넌트면 입장하기를 Link 컴포넌트를 사용해야함
