'use client';

import Image from 'next/image';
import Link from 'next/link';
import FlexBox from '../FlexBox';
import ChatCardInfo from '../ChatCard/ChatCardInfo';
import Notice from '../../../public/ChatCard/notice.svg';
import Schedule from '../../../public/ChatCard/schedule.svg';
import TagList from '../TagList';

export default function EnteredChatCard() {
  const tagList = ['자랑', '강아지', '고양이', '앵무새', '토끼토', 'rhtm'];
  return (
    <Link
      href="/"
      className="flex flex-col w-full max-w-[517px] shadow-chatCard rounded-[10px]"
    >
      <Image
        src="/default.png"
        alt="채팅방 이미지"
        width={300}
        height={200}
        priority
        className="w-full"
      />
      <FlexBox direction="column" className="w-full gap-4 p-5 ">
        <FlexBox direction="column" className="w-full gap-3">
          <FlexBox justify="between" className="w-full gap-2">
            <h1 className="flex-1 text-xl font-bold truncate tablet:text-2xl">
              노원구 견주모임 노원구 견주
            </h1>
            <p className="text-[#A0A4A8] font-bold ">최근 대화 30분 전</p>
          </FlexBox>
          <TagList list={tagList} />
        </FlexBox>
        <FlexBox justify="between" align="center" className="w-full">
          <ChatCardInfo
            masterUserImg="/default.png"
            masterUserName="지상최강감자"
            participants={24}
          />
          <FlexBox align="center" className="gap-3">
            <Notice className="w-8 h-8 tablet:w-10 tablet:h-10" />
            <Schedule className="w-8 h-8 tablet:w-10 tablet:h-10" />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Link>
  );
}
