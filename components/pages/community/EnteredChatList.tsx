import { getEnteredChatList } from '@/service/community';
import EnteredChatCarousel from './EnteredChatCarousel';

export default async function EnteredChatList() {
  const list = await getEnteredChatList();
  return <EnteredChatCarousel enteredChatlist={list} />;
}
