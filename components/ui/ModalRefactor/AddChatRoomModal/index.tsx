'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';
import { ModalProps } from '@/types/types';
import useInput from '@/hooks/common/useInput';
import XIcon from '@/public/X.svg';
import useImageUpload from '@/hooks/common/useImageUpload';
import Modal from '../../Modal';
import TitleInput from './TitleInput';
import DescriptionInput from './DescriptionInput';
import HashTagInput from './HashTagInput';
import Button from '../../Button';
import Divider from '../../Divider';
import ImageDisplay from './ImageDisplay';
import ImageList from './ImageList';
import MobileHeader from './MobileHeader';
import { RadioGroup } from '../../RadioGroup';
import FlexBox from '../../FlexBox';

export default function AddChatRoomModal({ open, onClose }: ModalProps) {
  const [title, onChangeTitle] = useInput('');
  const [description, onChangeDescription] = useInput('');
  const [tag, onChangeTag, resetTag] = useInput('');
  const [tagList, setTagList] = useState<string[]>([]);
  const { handleImageUpload, setImage, image } = useImageUpload(
    '/images/AddChatModal/default2.webp',
  );
  const [option, setOption] = useState('1');

  const handleRadioOption = (value: string) => {
    setOption(value);
  };
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col w-screen tablet:w-[1028px] h-screen tablet:h-[720px] ">
        <div className="self-end hidden tablet:block">
          <button type="button" onClick={onClose}>
            <XIcon className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col h-full gap-3 bg-white p-9 tablet:rounded-[10px] overflow-y-auto">
          <MobileHeader onClose={onClose} />

          <FlexBox
            direction="column"
            align="start"
            className="order-2 gap-2 tablet:order-1"
          >
            <TitleInput title={title} onChangeTitle={onChangeTitle} />
            <Divider type="horizontal" />
            <DescriptionInput
              description={description}
              onChangeDescription={onChangeDescription}
            />
            <HashTagInput
              onChangeTag={onChangeTag}
              reset={resetTag}
              setTagList={setTagList}
              tag={tag}
              tagList={tagList}
            />
          </FlexBox>

          <FlexBox className="order-1 gap-4 tablet:order-2">
            <ImageDisplay image={image} />
            <ImageList onChangeImage={handleImageUpload} setImage={setImage} />
          </FlexBox>

          <FlexBox direction="column" align="start" className="order-3 gap-6">
            <RadioGroup value={option} onChange={handleRadioOption}>
              <div className="flex flex-col gap-2">
                <RadioGroup.Item option="1">
                  지역 입장 조건 설정
                </RadioGroup.Item>
                <span className="body3">
                  지역을 입장조건으로 설정하면, 설정된 정보가 있는 멤버만
                  채팅장에 입장할 수 있습니다.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <RadioGroup.Item option="2">검색허용</RadioGroup.Item>
                <span className="body3">
                  채팅방 이름 혹은 태그로 검색 할 수 있게 합니다.
                </span>
              </div>
            </RadioGroup>
          </FlexBox>

          <FlexBox align="end" className="h-full z-[999] w-full gap-5 order-4">
            <Button variant="secondary" fullWidth onClickAction={onClose}>
              취소
            </Button>
            <Button fullWidth>확인</Button>
          </FlexBox>
        </div>
      </div>
    </Modal>
  );
}
