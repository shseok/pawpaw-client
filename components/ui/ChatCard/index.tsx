import React from 'react';
import { FlexBox, Divider, Avatar } from '@/components/ui/ui';
import { cn } from '@/utils/common';

type JustifyOption = 'between' | 'center' | 'around' | 'end' | 'start';

interface ChatCardHeaderProp {
  children: React.ReactNode;
  justify?: JustifyOption;
}
interface ChatCardInfoProp {
  image: string;
  name: string;
  participants: number;
}

export default function ChatCardWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FlexBox
      direction="column"
      className={cn(
        'w-full shadow-chatCard max-w-[517px] max-h-[538px] h-full rounded-[10px] gap-3 p-4 sm:p-6',
        className && className,
      )}
    >
      {children}
    </FlexBox>
  );
}

function Header({ children, justify }: ChatCardHeaderProp) {
  return (
    <FlexBox justify={justify} align="center" className="w-full">
      {children}
    </FlexBox>
  );
}

function Title({ title }: { title: string }) {
  return <p className="header3">{title}</p>;
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <FlexBox direction="column" className="w-full gap-3">
      {children}
    </FlexBox>
  );
}

function Description({ description }: { description: string }) {
  return <p className="w-full text-gray-800 body3">{description}</p>;
}

function Info({ image, name, participants }: ChatCardInfoProp) {
  return (
    <FlexBox className="gap-3">
      <Avatar image={image} name={name} />
      <FlexBox className="flex-1 gap-2 body3 text-grey-500">
        <p className="truncate">{name}</p>
        <Divider type="vertical" />
        <p>{participants}명</p>
      </FlexBox>
    </FlexBox>
  );
}
export const ChatCard = Object.assign(ChatCardWrapper, {
  Header,
  Title,
  Body,
  Description,
  Info,
});
