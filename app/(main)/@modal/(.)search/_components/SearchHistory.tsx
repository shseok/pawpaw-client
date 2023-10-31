/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { usePathname, useRouter } from 'next/navigation';

export default function SearchHistory({
  history,
  removeSearchTerm,
  clearSearchHistory,
}: {
  history: string[];
  removeSearchTerm: (searchTerm: string) => void;
  clearSearchHistory: () => void;
}) {
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <span className="header4">최근 검색</span>
        <button
          type="button"
          className="header4 text-grey-400"
          onClick={clearSearchHistory}
        >
          전체삭제
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {history.map((search) => (
          <div
            key={search}
            className="flex items-center px-2 py-1 gap-1 border border-primary-200 text-primary-200 rounded-[10px]"
          >
            <div
              onClick={() => replace(`${pathname}?query=${search}`)}
              className="cursor-pointer"
            >
              {search}
            </div>
            <button
              type="button"
              className=""
              onClick={() => removeSearchTerm(search)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
