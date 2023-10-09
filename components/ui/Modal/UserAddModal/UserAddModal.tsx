import useCheckbox from '@/hooks/common/useCheckbox';
import useInput from '@/hooks/common/useInput';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/X.svg';
import SearchInput from '@/components/ui/Input/SearchInput';
import ArrowLeftIcon from '@/public/arrow-left.svg';
import useGetSearchedUserList from '@/hooks/queries/useGetSearchedUserList';
import { usePathname } from 'next/navigation';
import useInviteUserToChatroom from '@/hooks/mutations/useInviteUserToChatroom';
import SearchedUserList from './SearchedUserList';
import Modal from '..';

export default function UserAddModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [nickname, onChangeNickname, resetValue] = useInput('');
  const { checkedList, handleCheckboxChange } = useCheckbox();
  const roomId = usePathname().split('/')[2];
  const { mutate } = useInviteUserToChatroom(onClose);
  const { data: searchedList, refetch } = useGetSearchedUserList(
    roomId,
    nickname,
  );
  const fetchSearchedUserList = () => {
    if (nickname.length === 0) return;
    refetch();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <FlexBox
        direction="column"
        className="w-screen tablet:w-[672px] gap-4  h-screen"
      >
        <div className="self-end hidden tablet:block">
          <button type="button" onClick={onClose}>
            <XIcon className="w-8 h-8" />
          </button>
        </div>
        <FlexBox
          direction="column"
          className="bg-white rounded-[10px] p-4 tablet:p-9 gap-7 w-full h-screen tablet:h-auto"
        >
          <header className="flex items-center w-full header2">
            <button
              type="button"
              className="block tablet:hidden"
              onClick={onClose}
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <span className="self-center">인원 추가</span>
          </header>
          <SearchInput
            placeholder="추가할 인원의 아이디나 닉네임을 검색해보세요"
            value={nickname}
            onChangeValue={onChangeNickname}
            resetValue={resetValue}
            onClickSearchIcon={fetchSearchedUserList}
            onPressEnter={fetchSearchedUserList}
          />
          <SearchedUserList
            userList={searchedList}
            checkedList={checkedList}
            handleCheckboxChange={handleCheckboxChange}
          />
          <Button
            className="w-full header3"
            size="lg"
            disabled={checkedList.length === 0}
            onClickAction={() =>
              mutate({ roomId, userId: { userId: checkedList[0] } })
            }
          >
            추가하기
          </Button>
        </FlexBox>
      </FlexBox>
    </Modal>
  );
}
