import { useEffect, RefObject } from 'react';

const useOutSideClick = (ref: RefObject<HTMLElement>, close: () => void) => {
  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    };
    window.addEventListener('mousedown', handleClickOutSide);
    return () => {
      window.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [ref, close]);
};

export default useOutSideClick;
