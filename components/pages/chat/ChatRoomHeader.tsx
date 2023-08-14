import Link from 'next/link';
import ArrowLeftIcon from '@/public/arrow-left.svg';

export default function ChatRoomHeader({ title }: { title: string }) {
  return (
    <header className="sticky top-0 flex items-center h-24 gap-4 px-10 py-8 bg-white border-b-[1px]">
      <Link href="/community">
        <ArrowLeftIcon className="w-7 h-7" />
      </Link>
      <p className="text-xl font-bold">{title}</p>
    </header>
  );
}
