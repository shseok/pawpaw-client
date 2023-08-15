import FlexBox from '@/components/ui/FlexBox';
import ChatUser from './ChatUser';

export default function ChatUserList() {
  return (
    <FlexBox direction="column" className="gap-2 px-6 py-4 border-b-[1px]">
      <FlexBox justify="between" className="w-full">
        <FlexBox as="header" className="gap-2 p-2">
          <h1 className="text-2xl font-bold">인원</h1>
          <FlexBox className="gap-1">
            <p>21</p>
            <p className="text-[#A0A4A8]">/ 60</p>
          </FlexBox>
        </FlexBox>
        <button type="button" className="font-bold text-primary">
          추가
        </button>
      </FlexBox>
      <ul className="w-full overflow-auto max-h-96 scrollbar-hide">
        {Array.from({ length: 10 }).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ChatUser key={i} />
        ))}
      </ul>
    </FlexBox>
  );
}
