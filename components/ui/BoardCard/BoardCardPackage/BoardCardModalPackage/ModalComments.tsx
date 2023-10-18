'use client';

import Image from 'next/image';
import { useState } from 'react';
import Avatar from '@/components/ui/Avatar';
import FlexBox from '../../../FlexBox';
import Modal from '../../../Modal';

export default function BoardCardModalComments({
  id,
  userName,
  content,
  userImage,
}: {
  id: number;
  userName: string;
  content: string;
  userImage: string;
}) {
  const [showSmallModal, setShowSmallModal] = useState(false);

  return (
    <div key={id}>
      <FlexBox align="start" className="gap-3 group">
        <Avatar size="base" image={userImage} name={userName} />
        <FlexBox direction="column" align="start" className="gap-1">
          <div>
            <div className="inline-block mr-1 body2 text-grey-500">
              {userName}
            </div>
            <div className="inline body4 text-grey-500">{content}</div>
          </div>
          <FlexBox className="gap-1" align="start">
            <div className="caption2 text-grey-500">1일전</div>
            <button type="button" onClick={() => setShowSmallModal(true)}>
              <Image
                src="/Feed/desktop/seeMore.svg"
                alt="더보기"
                width={16}
                height={16}
                className="hidden group-hover:block"
              />
            </button>
            <Modal
              open={showSmallModal}
              onClose={() => setShowSmallModal(false)}
            >
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
