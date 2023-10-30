import { Suspense } from 'react';
import ChatRoomList from './_components/ChatRoomList';
import SearchModal from './_components/SearchModal';
import SearchQueryInput from './_components/SearchQueryInput';

export default function Search({
  searchParams,
}: {
  searchParams: { chatromms: string; query: string };
}) {
  const { query } = searchParams;
  return (
    <SearchModal>
      <SearchQueryInput />
      <Suspense fallback={<div>loading...</div>}>
        <ChatRoomList query={query} />
      </Suspense>
    </SearchModal>
  );
}
