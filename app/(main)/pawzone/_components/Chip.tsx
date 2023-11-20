import Bookmark from '@/public/svgs/Pawzone/bookmark.svg';
import Leaf from '@/public/svgs/Pawzone/leaf.svg';
import { cn } from '@/utils/common';

interface Props {
  type: 'hot' | 'clean';
}

const chipMap = {
  hot: {
    text: '저장 많은',
    background: 'bg-yellow-30',
    iconColor: 'fill-yellow-100',
    icon: Bookmark,
  },
  clean: {
    text: '쾌적한',
    background: 'bg-primary-30',
    iconColor: 'fill-primary-200',
    icon: Leaf,
  },
};

export default function Chip({ type }: Props) {
  const ButtonIcon = chipMap[type].icon;
  return (
    <div
      className={cn(
        'rounded-[10px] flex gap-[1px] py-1 px-2',
        chipMap[type].background,
      )}
    >
      <ButtonIcon
        className={cn('w-[22px] h-[22px]', chipMap[type].iconColor)}
      />
      <p className="body3 text-grey-800">{chipMap[type].text}</p>
    </div>
  );
}
