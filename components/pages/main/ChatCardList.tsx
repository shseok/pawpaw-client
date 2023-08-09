"use client";
import ChatCard from "@/components/ui/ChatCard";
import FlexBox from "@/components/ui/FlexBox";
import RightButton from "@/public/ChatCard/arrow-right.svg";
import LeftButton from "@/public/ChatCard/arrow-left.svg";

export default function ChatCardList() {
  return (
    <FlexBox
      direction="column"
      justify="start"
      as="aside"
      className="sticky top-0 right-0 hidden h-screen gap-5 p-8 bg-white turncate tablet:flex"
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
