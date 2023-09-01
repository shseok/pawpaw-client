import { useEffect, useState } from 'react';

export default function useViewportTracker() {
  let initialData;
  if (typeof window !== 'undefined') {
    initialData = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  const [windowSize, setWindowSize] = useState(initialData);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
