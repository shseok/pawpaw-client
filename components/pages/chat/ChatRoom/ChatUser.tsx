import Link from 'next/link';
import Avatar from '@/components/ui/Avatar';
import FlexBox from '@/components/ui/FlexBox';
import ArrowRightIcon from '@/public/arrow-right.svg';

interface ChatUserPropsType {
  shadow?: boolean;
  image: string;
  name: string;
  petName: string;
  icon?: boolean;
}

export default function ChatUser({
  shadow = false,
  image,
  name,
  petName,
  icon = false,
}: ChatUserPropsType) {
  const shadowClass = shadow ? 'shadow-chatCard' : '';
  return (
    <FlexBox
      justify="start"
      className={`gap-3 px-5 py-3 h-fit rounded-[10px] ${shadowClass}`}
    >
      <Avatar image={image} name={name} size="xl" />
      <FlexBox direction="column" align="start" className="gap-1 ">
        <FlexBox className="gap-1">
          <p className="font-bold">{name}</p>
          {icon && (
            <Link href={`/${name}`}>
              <ArrowRightIcon />
            </Link>
          )}
        </FlexBox>
        <p className="text-grey-500 ">{petName}</p>
      </FlexBox>
    </FlexBox>
  );
}
