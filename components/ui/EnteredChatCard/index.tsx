import FlexBox from "../FlexBox";
import Image from "next/image";
export default function EnteredChatCard() {
  return (
    <FlexBox
      direction="column"
      className="lg:w-[517px] lg:h-[538px] shadow-xl rounded-[10px] tablet:w-[350px] tablet:h-[411px] w-[321px] h-[334px]"
    >
      <div className="relative w-full h-full ">
        <Image
          src={"/default.png"}
          alt=""
          fill
          priority
          className="absolute object-cover rounded-t-[10px]"
        />
      </div>
      <FlexBox direction="column" className="flex-1 gap-4 p-5">
        <FlexBox direction="column" className="gap-3">
          <div>d</div>
          <div>d</div>
        </FlexBox>
        <div>d</div>
      </FlexBox>
    </FlexBox>
  );
}
