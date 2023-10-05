'use client';

import { useRef, useState, useEffect } from 'react';
import Tag from '../Tag';

export default function TagList({ list }: { list: string[] }) {
  const tagListRef = useRef<HTMLUListElement>(null);
  const [isOverTagList, setIsOverTagList] = useState(false);

  // 각 태그들의 너비를 합하여 태그리스트의 너비를 넘어서면 ...을 표시한다.
  const calculateTagWidth = () => {
    const tagList = tagListRef.current;
    if (tagList) {
      const tagListWrapperWidth = tagList.offsetWidth;
      const tagsArray = Array.from(tagList.children) as HTMLLIElement[];

      let totalTagWidth = 0;
      tagsArray.forEach((tag) => {
        const tagWidth = tag.offsetWidth + 12;
        totalTagWidth += tagWidth;
        if (totalTagWidth > tagListWrapperWidth) {
          setIsOverTagList(true);
        } else {
          setIsOverTagList(false);
        }
      });
    }
  };

  // debounce
  let resizeTimer: NodeJS.Timeout;
  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      calculateTagWidth();
    }, 300);
  };
  useEffect(() => {
    calculateTagWidth();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-start w-full ">
      <ul
        className="flex flex-wrap w-full h-8 gap-3 overflow-hidden"
        ref={tagListRef}
      >
        {list && list.map((tag) => <Tag key={tag} tagName={tag} />)}
      </ul>
      {isOverTagList ? <p>...</p> : null}
    </div>
  );
}
