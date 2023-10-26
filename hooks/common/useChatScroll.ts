import { useEffect, useRef } from 'react';

interface ChatScrollType {
  chatContainerRef: React.RefObject<HTMLDivElement>;
  bottomRef: React.RefObject<HTMLDivElement>;
  beforeChatLoadMore: () => void;
  chatListRef: React.RefObject<HTMLDivElement>;
  shouldLoadMore: boolean;
}

export default function useChatScroll({
  chatContainerRef,
  bottomRef,
  beforeChatLoadMore,
  chatListRef,
  shouldLoadMore,
}: ChatScrollType) {
  const scrollRecod = useRef(0);
  const chatNodes = useRef(0);
  const loadMore = useRef(false);

  /** 채팅이 없을시에 즉 스크롤이 없을경우 API요청이 두번되는 버그가 발생하여 기존코드를 제거하였으며 리팩토링진행하였습니다. */
  // useEffect(() => {
  //   const loadMoreObserber = new IntersectionObserver(
  //     ([{ isIntersecting }]) => {
  //       if (isIntersecting) {
  //         beforeChatLoadMore();
  //         loadMore.current = true;
  //       }
  //     },
  //   );
  //   const trigger = loadMoreRef.current!;
  //   loadMoreObserber.observe(trigger);
  //   return () => {
  //     loadMoreObserber.unobserve(trigger);
  //   };
  // }, [beforeChatLoadMore, loadMoreRef]);

  useEffect(() => {
    const topDiv = chatContainerRef?.current;

    const handleScroll = () => {
      const scrollTop = topDiv?.scrollTop;
      if (scrollTop === 0 && shouldLoadMore) {
        beforeChatLoadMore();
        loadMore.current = true;
      }
    };

    topDiv?.addEventListener('scroll', handleScroll);

    return () => {
      topDiv?.removeEventListener('scroll', handleScroll);
    };
  }, [shouldLoadMore, beforeChatLoadMore, chatContainerRef]);

  useEffect(() => {
    const bottom = bottomRef.current!;
    const chatCount = chatNodes.current;

    // 채팅방 최초 입장시 스크롤 최하단으로 위치.
    bottom.scrollIntoView();

    const callback: ResizeObserverCallback = (entries) => {
      entries.forEach((entry) => {
        // 채팅이 추가 됐다면
        if (chatCount !== entry.target.childNodes.length) {
          // 데이터를 불러오는게 아니라면 채팅이 새롭게 추가된것이니 스크롤 하단으로 이동
          if (!loadMore.current) {
            // 채팅추가가 부드럽게 보이는 효과를 추가하기위해 setTimeout 설정
            setTimeout(() => {
              bottom.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          } else {
            // 데이터를 불러오는거라면 스크롤을 유지
            chatContainerRef.current?.scrollTo({
              top: entry.contentRect.height - scrollRecod.current,
            });
            loadMore.current = false;
          }
        }

        chatNodes.current = entry.target.childNodes.length;
        scrollRecod.current = entry.contentRect.height;
      });
    };
    const Observer = new ResizeObserver(callback);
    Observer.observe(chatListRef.current!, { box: 'border-box' });
    return () => {
      Observer.disconnect();
    };
  }, []);
}
