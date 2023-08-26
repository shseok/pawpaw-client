'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ArrowLeftIcon from '@/public/arrow-left.svg';
import FlexBox from '@/components/ui/FlexBox';
import DotsIcon from '@/public/tabler_dots.svg';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import Divider from '@/components/ui/Divider';

export default function ChatRoomHeader({ title }: { title: string }) {
  const router = useRouter();
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('복사 성공');
    } catch {
      alert('복사 실패');
    }
  };
  const leaveChatRoom = () => {
    router.replace('/community');
  };
  const CHAT_ROOM_OPTIONS = [
    {
      name: '공지',
    },
    {
      name: '사진',
    },
    { name: '링크' },
    { name: '공유하기', event: copyToClipboard },
    { name: '채팅방 나가기', event: leaveChatRoom },
  ];
  return (
    <FlexBox
      as="header"
      justify="between"
      align="center"
      className=" p-8 h-14 tablet:h-24 w-full gap-4 bg-white border-b-[1px]"
    >
      <FlexBox className="gap-1">
        <Link href="/community">
          <ArrowLeftIcon className="w-7 h-7" />
        </Link>
        <p className="text-xl font-bold">{title}</p>
      </FlexBox>

      <Dropdown>
        <Dropdown.Trigger>
          <DotsIcon className="w-6 h-6 tablet:w-7 tablet:h-7" />
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <div className="flex flex-col gap-2 tablet:hidden">
            <Dropdown.Item>인원</Dropdown.Item>
            <Dropdown.Item>스케줄</Dropdown.Item>
            <Divider type="horizontal" />
          </div>

          {CHAT_ROOM_OPTIONS.map((option) => (
            <Dropdown.Item key={option.name} event={option.event}>
              {option.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </FlexBox>
  );
}
