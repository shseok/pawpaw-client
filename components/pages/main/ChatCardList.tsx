"use client";
import ChatCard from "@/components/ui/ChatCard";
import FlexBox from "@/components/ui/FlexBox";
export default function ChatCardList() {
  return (
    <FlexBox
      direction="column"
      align="start"
      className="gap-3 max-w-[517px] hidden md:block"
    >
      <FlexBox justify="between" className="w-full">
        <h1 className="text-2xl font-bold">지금 뜨고있는 채팅방 🔥</h1>
        <FlexBox className="gap-4">
          <button>{"<"}</button>
          <button>{">"}</button>
        </FlexBox>
      </FlexBox>
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </FlexBox>
  );
}
