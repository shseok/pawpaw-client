import Button from "../Button";
import FlexBox from "../FlexBox";
import Tag from "../Tag";
export default function ChatCard() {
  return (
    <FlexBox
      direction="column"
      align="start"
      className="w-full max-h-[266px] p-8 rounded-[10px] gap-3 shadow-chatCard"
    >
      <FlexBox justify="between" className="w-full ">
        <FlexBox className="gap-1">
          <h3 className="text-xl font-bold">천하제일 내 반려동물 자랑방</h3>
          <FlexBox
            justify="center"
            align="center"
            className="w-5 h-5 text-xs font-bold text-white rounded-full bg-primary "
          >
            N
          </FlexBox>
        </FlexBox>
        <div>공유 버튼</div>
      </FlexBox>
      <p>반려동물을 키우는 사람이라면 누구나 들어와서 자랑해주세요~</p>
      <FlexBox className="gap-3">
        {["20대이상", "자랑", "강아지", "고양이", "앵무새"].map((item) => {
          return <Tag key={item} tagName={item} />;
        })}
        ...
      </FlexBox>
      <FlexBox justify="between" className="w-full">
        <FlexBox className="gap-3 text-[#74787D]">
          <div className="w-10 h-10 bg-black rounded-full"></div>
          <p className="font-bold ">닉네임</p>
          <p>42명</p>
        </FlexBox>
        <Button>입장하기</Button>
      </FlexBox>
    </FlexBox>
  );
}
// 해당 컴포넌트는 클라이언트?서버? 서버컴포넌트면 입장하기를 Link 컴포넌트를 사용해야함
