/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import { Fragment, useState } from 'react';
import Modal from '@/components/ui/Modal/Modal';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import FlexBox from '../../../FlexBox';

// 드롭다운 메뉴
function BlockOption() {
  return <Dropdown.Item>차단</Dropdown.Item>;
}
function ReportOption() {
  return <Dropdown.Item>신고</Dropdown.Item>;
}
export default function ModalComments({
  id,
  userName,
  content,
  userImg,
}: {
  id: number;
  userName: string;
  content: string;
  userImg: string;
}) {
  // const { isOpen } = useDropdown();
  const OPTION_LIST = [BlockOption, ReportOption];
  const [showSmallModal, setShowSmallModal] = useState(false);

  return (
    <div key={id}>
      <FlexBox align="start" className="gap-3 group">
        <Image src={userImg} alt="사용자 프로필" width={36} height={36} />
        <FlexBox direction="column" align="start" className="gap-1">
          <div>
            <div className="inline-block mr-1 body2 text-grey-500">
              {userName}
            </div>
            <div className="inline body4 text-grey-500">{content}</div>
          </div>
          <FlexBox className="gap-1" align="start">
            <div className="caption2 text-grey-500">1일전</div>
            {/* <Dropdown>
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
            </Dropdown> */}
            <button type="button" onClick={() => setShowSmallModal(true)}>
              <Image
                src="/Feed/desktop/seeMore.svg"
                alt="더보기"
                width={16}
                height={16}
                className="hidden group-hover:block"
              />
            </button>
            <Modal showModal={showSmallModal} setShowModal={setShowSmallModal}>
              <FlexBox
                as="ul"
                direction="column"
                className={`gap-2 p-4 w-[324px] bg-white shadow-dropdown rounded-[10px] `}
              >
                <li className="w-full rounded-[10px] hover:bg-primary-50 active:bg-primary-100">
                  <button className="w-full p-3 body1" type="button">
                    차단하기
                  </button>
                </li>
                <li className="w-full rounded-[10px] hover:bg-primary-50 active:bg-primary-100">
                  <button className="w-full p-3 body1" type="button">
                    신고하기
                  </button>
                </li>
                <li className="w-full rounded-[10px] hover:bg-primary-50 active:bg-primary-100">
                  <button
                    className="w-full p-3 body1"
                    type="button"
                    onClick={() => setShowSmallModal(false)}
                  >
                    취소
                  </button>
                </li>
              </FlexBox>
            </Modal>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </div>
  );
}
