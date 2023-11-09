import FlexBox from '@/components/ui/FlexBox';
import { ScheduleList } from '@/types/types';
import { format } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { usePathname } from 'next/navigation';
import useJoinSchedule from '@/hooks/mutations/useJoinSchedule';
import Button from '@/components/ui/Button';
import useDeleteSchedule from '@/hooks/mutations/useDeleteSchedule';
import useGetUserInfo from '@/hooks/queries/useGetUserInfo';
import useWithdrawSchedule from '@/hooks/mutations/useWithdrawSchedule';
import AvatarGroup from './AvatarGroup';

export default function ScheduleCard({
  isManager,
  id,
  description,
  endDate,
  name,
  participantList,
  startDate,
}: ScheduleList) {
  const roomId = usePathname().split('/')[2];
  const { mutate: joinScheduleMutate } = useJoinSchedule();
  const { mutate: deleteScheduleMutate } = useDeleteSchedule();
  const { mutate: withdrawScheduleMutate } = useWithdrawSchedule();
  const { data: userInfo } = useGetUserInfo();

  const isJoinSchedule = participantList.some(
    (user) => user.nickname === userInfo?.nickname,
  );

  const onDeleteSchedule = () => {
    if (window.confirm(`${name} 일정을 삭제하시겠습니까?`)) {
      deleteScheduleMutate({ roomId, scheduleId: id });
    }
  };
  const onCreateSchedule = () => {
    if (window.confirm(`${name} 일정에 참여하시겠습니까?`)) {
      joinScheduleMutate({ roomId, scheduleId: id });
    }
  };
  const onWithdrawSchedule = () => {
    if (window.confirm(`${name} 일정 참여를 취소하시겠습니까?`)) {
      withdrawScheduleMutate({ roomId, scheduleId: id });
    }
  };
  return (
    <FlexBox
      as="li"
      direction="column"
      align="start"
      className="gap-5 p-6 rounded-[10px] shadow-chatCard w-full"
    >
      <h3 className="header3">{name}</h3>
      <p className="text-[#474C51]">{description}</p>
      <FlexBox
        justify="between"
        align="center"
        className="gap-2 border-l-[5px] border-l-yellow border w-full rounded-r-[10px] p-4"
      >
        <div className="caption4">
          <p>
            {format(new Date(startDate), '시작: yyyy-MM-dd HH:mm (eee) ', {
              locale: ko,
            })}
          </p>
          <p>
            {format(new Date(endDate), '종료: yyyy-MM-dd HH:mm (eee)', {
              locale: ko,
            })}
          </p>
        </div>
        <Button
          variant="ghost"
          onClickAction={isJoinSchedule ? onWithdrawSchedule : onCreateSchedule}
        >
          {isJoinSchedule ? '참여취소' : '참여하기'}
        </Button>
      </FlexBox>
      <FlexBox justify="between" className="w-full">
        <FlexBox direction="column" className="gap-2">
          {participantList.length === 0 ? (
            <div>아직 참여한 친구가 없어요.🥹</div>
          ) : (
            <div className="w-full caption1">{participantList.length}명</div>
          )}
          <AvatarGroup userList={participantList} />
        </FlexBox>
        {isManager && (
          <Button variant="ghost" onClickAction={onDeleteSchedule}>
            삭제하기
          </Button>
        )}
      </FlexBox>
    </FlexBox>
  );
}
