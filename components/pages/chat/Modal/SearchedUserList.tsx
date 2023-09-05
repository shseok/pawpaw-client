import { ChangeEvent } from 'react';
import ChatUser from '../ChatRoom/ChatUser';

interface SearchedUserListType {
  userList: {
    image: string;
    name: string;
    petName: string;
  }[];
  checkedList: string[];
  handleCheckboxChange: (
    value: string,
    e: ChangeEvent<HTMLInputElement>,
  ) => void;
}

export default function SearchedUserList({
  userList,
  checkedList,
  handleCheckboxChange,
}: SearchedUserListType) {
  if (!userList) return null;
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="w-full header4">
        <p>
          검색결과 <span className="text-primary-200">{userList.length}건</span>
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-4 p-2 overflow-auto tablet:grid-cols-2 max-h-72 scrollbar-hide">
        {userList.map((user) => (
          <li
            className={`${
              checkedList.includes(user.name) ? 'ring-2 ring-primary-300' : ''
            } rounded-[10px] duration-200`}
            key={user.name}
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="cursor-pointer">
              <ChatUser
                shadow
                image={user.image}
                name={user.name}
                petName={user.petName}
              />
              <input
                type="checkbox"
                checked={checkedList.includes(user.name)}
                onChange={(event) => handleCheckboxChange(user.name, event)}
                className="hidden appearance-none"
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
