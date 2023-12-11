import { usePathname, useRouter } from 'next/navigation';
import XIcon from '@/public/svgs/X.svg';

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
    <div className="flex flex-col w-full gap-2 mt-2">
      <div className="flex justify-between">
        <span className="header4">최근 검색</span>
        {history.length !== 0 && (
          <button
            type="button"
            className="header4 text-grey-400"
            onClick={clearSearchHistory}
          >
            전체삭제
          </button>
        )}
      </div>
      <ul className="flex items-center gap-2 p-2 overflow-auto">
        {history.map((search) => (
          <li
            key={search}
            className="flex items-center px-2 py-1 gap-1 border border-primary-200 text-primary-200 rounded-[10px]"
          >
            <button
              type="button"
              onClick={() => replace(`${pathname}?query=${search}&page=1`)}
              className="cursor-pointer"
            >
              {search}
            </button>
            <button
              type="button"
              className=""
              onClick={() => removeSearchTerm(search)}
              aria-label="Delete Search History"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
