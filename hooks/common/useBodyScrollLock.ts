/* eslint-disable import/prefer-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';

export function useBodyScrollLock() {
  let scrollPosition = 0;
  const lockScroll = useCallback(() => {
    // for 아이폰 사파리브라우저
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
  }, []);

  const openScroll = useCallback(() => {
    // for 아이폰 사파리브라우저
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  }, []);

  return { lockScroll, openScroll };
}
