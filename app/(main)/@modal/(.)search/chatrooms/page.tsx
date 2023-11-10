import { Suspense } from 'react';
import ChatRoomList from '../_components/ChatRoomList';

export default function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = searchParams;
  return (
    <Suspense fallback={<div>loading...</div>}>
      <ChatRoomList query={query} />
    </Suspense>
  );
}
