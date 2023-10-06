import Avatar from '@/components/ui/Avatar';
import FlexBox from '@/components/ui/FlexBox';
import CrownIcon from '@/public/CrownSimple.svg';

interface ChatUserPropsType {
  shadow?: boolean;
  image: string;
  name: string;
  petName: string;

  role: string;
}

export default function ChatUser({
  shadow = false,
  image,
  name,
  petName,
  role,
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
          {role === 'MANAGER' ? <CrownIcon /> : ''}
        </FlexBox>
        <p className="text-grey-500 ">{petName}</p>
      </FlexBox>
    </FlexBox>
  );
}
