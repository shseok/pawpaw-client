import { cn } from '@/utils/common';
import ArrowRight from '@/public/svgs/arrow-right.svg';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModalButton({ isOpen, setIsOpen }: Props) {
  return (
    <button
      className={cn(
        'bg-white z-[1] absolute flex justify-center items-center w-[30px] h-[60px] left-0 top-1/2 transform -translate-y-1/2 rounded-r-lg border border-grey-200 transition-transform duration-400',
        isOpen ? 'left-[calc(430px+30px)]' : null,
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <ArrowRight className={cn(isOpen ? 'rotate-180' : null)} />
    </button>
  );
}
