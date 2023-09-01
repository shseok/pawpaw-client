import SearchIcon from '@/public/search.svg';
import InputDeleteIcon from '@/public/input-delete.svg';

export default function SearchInput() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="border border-grey-600 block rounded-[10px] px-5 py-4 pr-20 w-full"
        placeholder="추가할 인원의 아이디나 닉네임을 검색해보세요"
      />
      <div className="absolute inset-y-0 top-0 flex gap-2 right-4">
        <button type="button" className="">
          <InputDeleteIcon className="w-5 h-5 " />
        </button>
        <button type="button" className="">
          <SearchIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
