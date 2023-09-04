'use client';

import FlexBox from '@/components/ui/FlexBox';
import RightButton from '@/public/ChatCard/arrow-right.svg';
import LeftButton from '@/public/ChatCard/arrow-left.svg';
import SimpleChatCard from '@/components/ui/Card/SimpleChatCard';

export default function SimpleChatCardList() {
  return (
    <FlexBox
      direction="column"
      justify="start"
      className="w-full gap-3 min-w-max"
    >
      <FlexBox justify="between" className="w-full">
        <h3 className="header3">지금 뜨고있는 채팅방 🔥</h3>
        <FlexBox className="gap-4">
          <button type="button">
            <RightButton />
          </button>
          <button type="button">
            <LeftButton />
          </button>
        </FlexBox>
      </FlexBox>
      <SimpleChatCard />
      <SimpleChatCard />
      <SimpleChatCard />
    </FlexBox>
  );
}
