import { useEffect } from 'react';

interface ChatScrollType {
  chatRef: React.RefObject<HTMLDivElement>;
  bottomRef: React.RefObject<HTMLDivElement>;
  shouldLoadMore: boolean;
  beforeChatLoadMore: () => void;
  count: number;
}

export default function useChatScroll({
  chatRef,
  bottomRef,
  count,
  beforeChatLoadMore,
  shouldLoadMore,
}: ChatScrollType) {
  // 채팅룸 스크롤을 최상단으로 올렸을때, 이전채팅조회 요청 트리거 발생
  useEffect(() => {
    const topDiv = chatRef.current;
    const handleScroll = () => {
      const scrollTop = topDiv?.scrollTop;
      if (scrollTop === 0 && shouldLoadMore) {
        beforeChatLoadMore();
        topDiv?.scrollTo(0, 300);
      }
    };
    topDiv?.addEventListener('scroll', handleScroll);
    return () => {
      topDiv?.removeEventListener('scroll', handleScroll);
    };
  }, [beforeChatLoadMore, chatRef, shouldLoadMore]);

  // 유저가 채팅입력시 스크롤을 하단으로 자동으로 하단에 위치시킴
  useEffect(() => {
    const bottomDiv = bottomRef.current;
    if (bottomDiv) {
      setTimeout(() => {
        bottomDiv.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [count]);
}
