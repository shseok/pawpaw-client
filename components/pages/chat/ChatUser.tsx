import Link from 'next/link';
import Avatar from '@/components/ui/Avatar';
import FlexBox from '@/components/ui/FlexBox';
import ArrowRightIcon from '@/public/arrow-right.svg';

export default function ChatUser() {
  return (
    <FlexBox as="li" justify="start" className="w-full gap-3 px-5 py-3">
      <Avatar user_img="/default.png" user_name="" size="xl" />
      <FlexBox direction="column" align="start" className="gap-1 ">
        <FlexBox className="gap-1">
          <p className="font-bold">닉네awdwadawdwadaw임</p>
          <Link href="/">
            <ArrowRightIcon />
          </Link>
        </FlexBox>
        <p className="text-grey-500 ">3살 감자</p>
      </FlexBox>
    </FlexBox>
  );
}
