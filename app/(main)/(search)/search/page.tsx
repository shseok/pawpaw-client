import { fetchFilteredChatRooms } from '@/service/server/chatroom';

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = searchParams;
  const data = await fetchFilteredChatRooms(query);
  console.log('data', data);
  return <div>d</div>;
}
