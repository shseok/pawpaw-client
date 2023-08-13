'use client';

import Button from '../Button';
import FlexBox from '../FlexBox';
import ChatCardHeader from './ChatCardHeader';
import ChatCardInfo from './ChatCardInfo';
import TagList from '../TagList';
import Devider from '../Divider';

const tagList = ['자랑', '강아지', '고양이', '앵무새', '토끼토', 'rhtm'];
export default function ChatCard() {
  return (
    <FlexBox
      direction="column"
      align="start"
      className="max-h-[266px] w-full h-full max-w-[517px]  p-8 rounded-[10px] gap-3 shadow-chatCard"
    >
      <ChatCardHeader title="천하제일 내 반려동천하제일 내 반려동물 자랑방" />
      <p className="w-full truncate">
        반려동물을 키우는 사람이라면 누구나
        들어와서자랑해자랑해주세요자랑해주세요주세요 자랑해주세요~
      </p>
      <TagList list={tagList} />
      <Devider type="horizontal" />
      <FlexBox justify="between" className="w-full">
        <ChatCardInfo
          participants={42}
          masterUserImg="/default.png"
          masterUserName="닉네임"
        />
        <Button>입장하기</Button>
      </FlexBox>
    </FlexBox>
  );
}
