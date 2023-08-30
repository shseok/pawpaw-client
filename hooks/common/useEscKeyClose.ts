import { RefObject, useEffect } from 'react';

const useEscKeyClose = (
  ref: RefObject<HTMLElement | boolean>,
  close: () => void,
) => {
  const handleEscKeyClose = (event: KeyboardEvent) => {
    if (ref.current && event.key === 'Escape') {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleEscKeyClose);
    return () => {
      document.removeEventListener('keydown', handleEscKeyClose);
    };
  }, []);
};

export default useEscKeyClose;
