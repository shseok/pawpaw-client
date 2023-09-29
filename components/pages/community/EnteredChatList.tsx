import { cookies } from 'next/headers';
import { getEnteredChatList } from '@/service/community';
import EnteredChatCarousel from './EnteredChatCarousel';

export default async function EnteredChatList() {
  const list = await getEnteredChatList(
    cookies().get('ACCESS')?.value as string,
  );

  return <EnteredChatCarousel enteredChatlist={list} />;
}
