import { MessageType } from '@/types/types';
import { format, parseISO } from 'date-fns';

interface DateSection {
  [key: string]: MessageType[];
}

export default function makeDateSection(chatList: MessageType[]) {
  const section: DateSection = {};
  chatList.forEach((chat) => {
    // 채팅에 표시하고자 하는 날짜 형식 변수
    const date = format(parseISO(chat.createdDate), 'yyyy년 MM월 dd일');

    // 섹션의 날짜가 "이미" 존재하는지 확인.
    if (section[date]) {
      // 섹션에 날짜가 "이미" 존재하고 있다면 해당 섹션에 채팅추가
      section[date].push(chat);
    } else {
      // 섹션에 존재하지 않는 날짜라면 해당 날짜 섹션 생성하고 해당 섹션에 채팅 추가
      section[date] = [chat];
    }
  });
  return section;
}
