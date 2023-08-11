import ShareIcon from '@/public/share.svg';
import Badge from '../Badge';
import FlexBox from '../FlexBox';

export default function ChatCardTitle({ title }: { title: string }) {
  return (
    <FlexBox justify="between" className="w-full">
      <FlexBox className="w-full gap-1 truncate">
        <h3 className="w-full text-xl font-bold truncate">{title}</h3>
        <Badge />
      </FlexBox>
      <button type="button">
        <ShareIcon />
      </button>
    </FlexBox>
  );
}
