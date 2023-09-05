/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import { Fragment } from 'react';
import Dropdown, { useDropdown } from '@/components/ui/Dropdown/Dropdown';
import FlexBox from '../../../FlexBox';

// 드롭다운 메뉴
function BlockOption() {
  return <Dropdown.Item>차단</Dropdown.Item>;
}
function ReportOption() {
  return <Dropdown.Item>신고</Dropdown.Item>;
}
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
  const OPTION_LIST = [BlockOption, ReportOption];

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
            <Dropdown>
              <Dropdown.Trigger>
                <Image
                  src="/Feed/desktop/seeMore.svg"
                  alt="더보기"
                  width={16}
                  height={2}
                  className={isOpen ? 'block' : 'hidden group-hover:block'}
                />
              </Dropdown.Trigger>
              <Dropdown.Menu width="w-[132px]" direction="left">
                {OPTION_LIST.map((option, index) => (
                  <Fragment key={index}>{option()}</Fragment>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </div>
  );
}
