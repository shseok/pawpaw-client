export default function ChatRoom({ params }: { params: { roomId: string } }) {
  const { roomId } = params;
  return (
    <main className="flex w-full">
      <div className="w-full tablet:w-4/6">
        <div className="sticky top-0 h-24 bg-red-200">header</div>
        <div className="flex flex-col gap-5 bg-[#F5FFF63] p-10">
          <div>채팅방{roomId}</div>
          <div>
            채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방
            {roomId}
          </div>
        </div>
      </div>
      <aside className="sticky top-0 hidden w-2/6 h-screen bg-blue-200 tablet:block">
        <div>인원</div>
        <div>스케줄</div>
      </aside>
    </main>
  );
}
