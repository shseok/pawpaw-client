import Image from 'next/image';
import Dropdown, { useDropdown } from '@/components/ui/Dropdown/Dropdown';
import FlexBox from '../../../FlexBox';

export default function ModalComments({
  commentId,
  commentUserName,
  commentUserImg,
  commentContent,
}: {
  commentId: number;
  commentUserName: string;
  commentUserImg: string;
  commentContent: string;
}) {
  const { isOpen } = useDropdown();

  return (
    <div key={commentId}>
      <FlexBox align="start" className="gap-3 group">
        <Image
          src={commentUserImg}
          alt="사용자 프로필"
          width={36}
          height={36}
        />
        <FlexBox direction="column" align="start" className="gap-1">
          <div>
            <div className="inline-block mr-1 body2 text-grey-500">
              {commentUserName}
            </div>
            <div className="inline body4 text-grey-500">{commentContent}</div>
          </div>
          <FlexBox className="gap-1" align="start">
            <div className="caption2 text-grey-500">1일전</div>
            <Dropdown.Trigger>
              <Image
                src="/Feed/desktop/seeMore.svg"
                alt="더보기"
                width={16}
                height={2}
                className={isOpen ? 'block' : 'hidden group-hover:block'}
              />
            </Dropdown.Trigger>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </div>
  );
}
