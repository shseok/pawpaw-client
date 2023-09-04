import React from 'react';
import Avatar from '../Avatar';
import Divider from '../Divider';
import FlexBox from '../FlexBox';

type JustifyOption = 'between' | 'center' | 'around' | 'end' | 'start';

interface ChildrenProp {
  children: React.ReactNode;
}
interface ChatCardHeaderProp extends ChildrenProp {
  justify?: JustifyOption;
}
interface ChatCardInfoProp {
  image: string;
  name: string;
  participants: number;
}

export default function ChatCard({ children }: ChildrenProp) {
  return (
    <FlexBox
      direction="column"
      className="w-full shadow-chatCard max-w-[517px] rounded-[10px] gap-3 p-4 sm:p-6"
    >
      {children}
    </FlexBox>
  );
}

ChatCard.Header = function ChatCardHeader({
  children,
  justify,
}: ChatCardHeaderProp) {
  return (
    <FlexBox justify={justify} align="center" className="w-full">
      {children}
    </FlexBox>
  );
};

ChatCard.Title = function ChatCardTitle({ title }: { title: string }) {
  return <p className="flex-1 truncate header3">{title}</p>;
};

ChatCard.Body = function ChatCardBody({ children }: ChildrenProp) {
  return (
    <FlexBox direction="column" className="w-full gap-3">
      {children}
    </FlexBox>
  );
};

ChatCard.Description = function ChatCardDescription({
  description,
}: {
  description: string;
}) {
  return <p className="w-full text-gray-800 body3">{description}</p>;
};

ChatCard.Info = function ChatCardInfo({
  image,
  name,
  participants,
}: ChatCardInfoProp) {
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
};
