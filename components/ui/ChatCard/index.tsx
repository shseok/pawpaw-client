import Button from "../Button";
import FlexBox from "../FlexBox";
export default function ChatCard() {
  return (
    <FlexBox direction="column" className="max-w-[517px] border-2">
      <FlexBox>
        <div>제목</div>
        <div>공유 버튼</div>
      </FlexBox>
      <p>반려동물을 키우는 사람이라면 누구나 들어와서 자랑해주세요~</p>
      <FlexBox>
        {["20대이상", "자랑", "#강아지", "#고양이", "#앵무새"].map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </FlexBox>
      <hr />
      <FlexBox>
        <div>프로필사진</div>
        <div>닉네임</div>
        <div>인원수</div>
        <Button>입장하기</Button>
      </FlexBox>
    </FlexBox>
  );
}
