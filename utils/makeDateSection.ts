import { MessageType } from '@/types/types';
import { format, parseISO } from 'date-fns';

interface DateSection {
  [key: string]: MessageType[];
}

export default function makeDateSection(chatList: MessageType[]) {
  const section: DateSection = {};
  chatList.forEach((chat) => {
    const date = format(parseISO(chat.createdDate), 'yyyy년 MM월 dd일');
    if (section[date]) {
      section[date].push(chat);
    } else {
      section[date] = [chat];
    }
  });
  return section;
}
