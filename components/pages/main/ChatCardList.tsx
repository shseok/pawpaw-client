"use client";
import ChatCard from "@/components/ui/ChatCard";
import FlexBox from "@/components/ui/FlexBox";
import RightButton from "../../../public/ChatCardList/arrow-right.svg";
import LeftButton from "../../../public/ChatCardList/arrow-left.svg";

export default function ChatCardList() {
  return (
    <FlexBox
      direction="column"
      align="start"
      as="aside"
      className="gap-3 max-w-[517px] invisible md:visible"
    >
      <FlexBox justify="between" className="w-full">
        <h1 className="text-2xl font-bold">지금 뜨고있는 채팅방 🔥</h1>
        <FlexBox className="gap-4">
          <button>
            <RightButton />
          </button>
          <button>
            <LeftButton />
          </button>
        </FlexBox>
      </FlexBox>
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </FlexBox>
  );
}
