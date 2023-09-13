/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Image from 'next/image';
import { useState } from 'react';
import DotsIcon from '@/public/tabler_dots.svg';
import copyURL from '@/utils/copyURL';
import Avatar from '../Avatar';
import Button from '../Button';
import FlexBox from '../FlexBox';
import Divider from '../Divider';
import Modal from '../Modal/Modal';
import Dropdown from '../Dropdown/Dropdown';

export default function PostCard({ children }: { children: React.ReactNode }) {
  return (
    <FlexBox
      direction="column"
      justify="between"
      className="max-h-[500px] p-9 rounded-[10px] border-[1px] border-grey-200 gap-4"
    >
      {children}
    </FlexBox>
  );
}

PostCard.Dropdown = function PostCardDropdown() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <DotsIcon className="w-6 h-6 tablet:w-7 tablet:h-7" />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>북마크 추가</Dropdown.Item>
        <Dropdown.Item event={() => copyURL(window.location.href)}>
          공유하기
        </Dropdown.Item>
        <Dropdown.Item>신고하기</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

PostCard.Header = function PostCardHeader({ userId }: { userId: number }) {
  return (
    <FlexBox justify="between" className="w-full">
      <FlexBox className="gap-[10px]">
        <Avatar
          size="xl"
          image="/Feed/desktop/tempProfilePic.svg"
          name={String(userId)}
        />
        <FlexBox direction="column" align="start" className="gap-1">
          <FlexBox className="gap-2">
            <div className="header4 text-grey-800">{userId}</div>
            <Button size="xs" variant="secondary">
              팔로우
            </Button>
          </FlexBox>
          <div className="caption2 text-grey-400">
            고양이 아무튼 자격증 보유중 ・ 3시간 전
          </div>
        </FlexBox>
      </FlexBox>
      <PostCard.Dropdown />
    </FlexBox>
  );
};

PostCard.Images = function PostCardImages({
  imgs,
  onClickModal,
}: {
  imgs: string[];
  onClickModal?: () => void;
}) {
  if (imgs) {
    return (
      <div
        className="grid w-full grid-cols-2 place-content-stretch"
        onClick={onClickModal}
      >
        <div className="relative row-span-2 -z-10">
          <Image
            src={imgs[0]}
            alt="게시글 사진1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative -z-10">
          <Image
            src={imgs[0]}
            alt="게시글 사진2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative -z-10">
          <Image
            src={imgs[0]}
            alt="게시글 사진3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    );
  }
  return null;
};

PostCard.Content = function PostCardContent({
  children,
  content,
  imgs,
  onClickModal,
}: {
  children: React.ReactNode;
  imgs?: string[];
  content: string;
  onClickModal: () => void;
}) {
  function renderContent() {
    return (
      <FlexBox direction="column" align="start" className="w-full gap-3">
        <div className="body3 text-grey-800 max-h-40" onClick={onClickModal}>
          {content}
        </div>
        <Divider type="horizontal" />
        {children}
      </FlexBox>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {imgs ? (
        <div className="grid w-full h-full grid-cols-2 gap-9">
          <PostCard.Images imgs={imgs} />
          {renderContent()}
        </div>
      ) : (
        renderContent()
      )}
    </>
  );
};

PostCard.CommentWrapper = function PostCardCommentWrapper({
  children,
  isModal = false,
  commentsNum,
}: {
  children: React.ReactNode;
  isModal?: boolean;
  commentsNum: number;
}) {
  return (
    <FlexBox
      direction="column"
      align="stretch"
      justify="between"
      className="w-full h-full"
    >
      <FlexBox direction="column" align="start" className="w-full gap-3">
        <FlexBox className="gap-5">
          <FlexBox className="gap-2 body3 text-grey-500">
            <div>댓글</div>
            <div>{commentsNum}</div>
          </FlexBox>
          <FlexBox className="gap-2 body3 text-grey-500">
            <div>좋아요</div>
            <div>2</div>
          </FlexBox>
        </FlexBox>
        {isModal ? (
          <FlexBox
            direction="column"
            justify="start"
            className="gap-[5px] overflow-scroll h-full"
          >
            {children}
          </FlexBox>
        ) : (
          <FlexBox direction="row" className="gap-[19px] pl-[15px]">
            <Image
              src="/Feed/desktop/commentLine.svg"
              alt="댓글선"
              width={1}
              height={53}
            />
            {children}
          </FlexBox>
        )}
      </FlexBox>
      <FlexBox className="gap-[9px] w-full">
        <Image
          src="/Feed/desktop/like.svg"
          alt="좋아요"
          width={24}
          height={24}
        />
        <input
          type="text"
          placeholder="댓글로 이웃과 소통해보세요!"
          className="border rounded-[10px] py-[16px] px-[20px] w-full body4 text-grey-400"
        />
      </FlexBox>
    </FlexBox>
  );
};

PostCard.Comments = function PostCardComments({
  id,
  userName,
  content,
  onClickModal,
}: {
  id: number;
  userName: string;
  content: string;
  onClickModal: () => void;
}) {
  return (
    <div key={id} onClick={onClickModal}>
      <div className="inline-block mr-1 body2 text-grey-500">{userName}</div>
      <div className="inline body4 text-grey-500">{content}</div>
    </div>
  );
};

PostCard.ModalContent = function PostCardModalContent({
  imgs,
  content,
  children,
}: {
  children: React.ReactNode;
  imgs?: string[];
  content: string;
}) {
  function renderContent() {
    return (
      <FlexBox
        direction="column"
        align="start"
        className="w-[375px] gap-3 h-full"
      >
        <div className="body3 text-grey-800">{content}</div>
        <Divider type="horizontal" />
        {children}
      </FlexBox>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {imgs ? (
        <FlexBox className="gap-9">
          <div className="relative w-[545px] h-[574px]">
            {imgs?.map((image) => (
              <Image
                src={image}
                alt="게시글 사진"
                layout="fill"
                objectFit="cover"
                className="rounded-[20px]"
              />
            ))}
          </div>
          {renderContent()}
        </FlexBox>
      ) : (
        renderContent()
      )}
    </>
  );
};

PostCard.ModalComments = function PostCardModalComments({
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
};
