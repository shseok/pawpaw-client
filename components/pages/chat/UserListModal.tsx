import ArrowLeftIcon from '@/public/arrow-left.svg';
import ChatUser from './ChatUser';

interface PropsType {
  closePopup: () => void;
}

export default function UserListModal({ closePopup }: PropsType) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 w-full h-full bg-white tablet:hidden">
      <header className="flex w-full justify-between  h-16 items-center px-10 py-6 gap-4 tablet:h-20 border-b-[1px]">
        <div className="flex">
          <button type="button" onClick={closePopup}>
            <ArrowLeftIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
          <div className="flex items-center gap-2 body-3">
            <p className="body1 sm:header2">인원</p>
            <span className="flex gap-1">
              21<p className="text-grey-400">/60</p>
            </span>
          </div>
        </div>
        <button type="button" className="p-2 body2 text-primary-200">
          추가
        </button>
      </header>
      <div className="h-[calc(100%-4rem)] overflow-auto px-5 sm:px-10 pt-2">
        <ul className="grid w-full grid-cols-1 gap-2 h-fit sm:grid-cols-2 ">
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
        </ul>
      </div>
    </div>
  );
}
