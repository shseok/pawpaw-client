import ArrowLeftIcon from '@/public/svgs/arrow-left.svg';

export default function MobileHeader({ onClose }: { onClose: () => void }) {
  return (
    <header className="flex items-center py-2 border-b-[1px] tablet:hidden">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close Mobile Chat Modal"
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
      <span className="flex-1 text-center body1">공개 채팅방 만들기</span>
    </header>
  );
}
