import ArrowLeftIcon from '@/public/arrow-left.svg';
import ChatUser from './ChatUser';
import UserAddButton from './UserAddButton';

interface PropsType {
  closeModal: () => void;
}

export default function ChatUserListMobile({ closeModal }: PropsType) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 w-full h-full bg-white tablet:hidden">
      <header className="flex w-full justify-between  h-16 items-center px-10 py-6 gap-4 tablet:h-20 border-b-[1px]">
        <div className="flex">
          <button type="button" onClick={closeModal}>
            <ArrowLeftIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
          <div className="flex items-center gap-2 body-3">
            <p className="body1 sm:header2">인원</p>
            <span className="flex gap-1">
              21<p className="text-grey-400">/60</p>
            </span>
          </div>
        </div>
        <UserAddButton />
      </header>
      <div className="h-[calc(100%-4rem)] overflow-auto px-5 sm:px-10 pt-2">
        <ul className="grid w-full grid-cols-1 gap-2 h-fit sm:grid-cols-2 ">
          <ChatUser
            image="/default.png"
            name="닉네임입니다"
            petName="3살 감자"
            icon
          />
        </ul>
      </div>
    </div>
  );
}
