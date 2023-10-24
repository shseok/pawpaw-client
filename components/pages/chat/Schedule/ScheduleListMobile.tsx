import ArrowLeftIcon from '@/public/svgs/arrow-left.svg';
import useGetScheduleList from '@/hooks/queries/useGetScheduleList';
import { usePathname } from 'next/navigation';
import useGetChatRoomUserList from '@/hooks/queries/useGetChatRoomUserList';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import ScheduleDropdownButton from './ScheduleDropdownButton';
import ScheduleCard from './ScheduleCard';

interface PropsType {
  closeModal: () => void;
}

export default function ScheduleListMobile({ closeModal }: PropsType) {
  const roomId = usePathname().split('/')[2];
  const { data: scheduleList } = useGetScheduleList(roomId);
  const { data: userList } = useGetChatRoomUserList(roomId);
  const { data: userInfo } = useGetUserInfo();
  const isManager =
    userList?.find((user) => user.role === 'MANAGER')?.nickname ===
    userInfo?.nickname;
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-20 w-full h-full bg-white tablet:hidden">
      <header className="flex w-full justify-between  h-16 items-center px-10 py-6 gap-4 tablet:h-20 border-b-[1px]">
        <div className="flex">
          <button type="button" onClick={closeModal}>
            <ArrowLeftIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
          <p className="body1 sm:header2">스케줄</p>
        </div>
        {isManager && <ScheduleDropdownButton />}
      </header>
      <ul className="flex flex-col overflow-auto h-[calc(100%-4rem)] gap-4 p-10">
        {scheduleList?.length === 0 ? (
          <div>등록된 스케줄이 없어요.📁</div>
        ) : (
          scheduleList?.map((schedule) => (
            <ScheduleCard
              key={schedule.id}
              {...schedule}
              isManager={isManager}
            />
          ))
        )}
      </ul>
    </div>
  );
}
