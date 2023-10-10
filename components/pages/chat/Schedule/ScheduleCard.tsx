import FlexBox from '@/components/ui/FlexBox';
import { ScheduleList } from '@/types/types';
import { format } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { usePathname } from 'next/navigation';
import useJoinSchedule from '@/hooks/mutations/useJoinSchedule';
import AvatarGroup from './AvatarGroup';

export default function ScheduleCard({
  id,
  description,
  endDate,
  name,
  participantList,
  startDate,
}: ScheduleList) {
  const roomId = usePathname().split('/')[2];
  const { mutate } = useJoinSchedule();
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
            {format(new Date(startDate), '시작: yyyy-MM-dd hh:mm (eee) ', {
              locale: ko,
            })}
          </p>
          <p>
            {format(new Date(endDate), '종료: yyyy-MM-dd hh:mm (eee)', {
              locale: ko,
            })}
          </p>
        </div>
        <button
          type="button"
          className="body2 border-[1px] rounded-[10px] p-2 hover:bg-grey-100 active:bg-grey-200"
          onClick={() => mutate({ roomId, scheduleId: id })}
        >
          참여하기
        </button>
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
      </FlexBox>
    </FlexBox>
  );
}
