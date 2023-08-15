import Link from 'next/link';
import ArrowLeftIcon from '@/public/arrow-left.svg';
import FlexBox from '@/components/ui/FlexBox';
import HambugerMenuIcon from '@/public/hambuger-menu.svg';

export default function ChatRoomHeader({ title }: { title: string }) {
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
      <div className="block tablet:hidden">
        <HambugerMenuIcon className="w-8 h-8" />
      </div>
    </FlexBox>
  );
}
