/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ModalProps } from '@/types/types';
import useInput from '@/hooks/common/useInput';
import XIcon from '@/public/X.svg';
import useImageUpload from '@/hooks/common/useImageUpload';
import postChatRoom from '@/service/chatRoom';
import Modal from '../../Modal';
import HashTagInput from './HashTagInput';
import Button from '../../Button';
import Divider from '../../Divider';
import ImageDisplay from './ImageDisplay';
import ImageList from './ImageList';
import MobileHeader from './MobileHeader';
import { RadioGroup } from '../../RadioGroup';
import FlexBox from '../../FlexBox';

interface FormData {
  name: string;
  description: string;
}

export default function AddChatRoomModal({ open, onClose }: ModalProps) {
  const [tag, onChangeTag, resetTag] = useInput('');
  const [tagList, setTagList] = useState<string[]>([]);
  const { handleImageUpload, imageFile, imagePreview } = useImageUpload(
    '/images/AddChatModal/default2.webp',
  );
  const [option, setOption] = useState('1');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleRadioOption = (value: string) => {
    setOption(value);
  };
  const onCreateChatRoom = async (data: FormData) => {
    const { name, description } = data;
    try {
      const response = await postChatRoom({
        image: imageFile as File,
        body: {
          name,
          description,
          hashTagList: tagList,
          searchable: true,
          locationLimit: true,
        },
      });
      if (response.chatroomId) {
        router.push(`chat/${response.chatroomId}`);
      } else {
        console.log(response);
        throw new Error(response.message);
      }
    } catch (error) {
      alert(error);
    }
  };
  const onSubmit: SubmitHandler<FormData> = (data) => {
    onCreateChatRoom(data);
  };
  return (
    <Modal open={open} onClose={onClose}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
          }
        }}
        className="flex flex-col w-screen tablet:w-[1028px] h-screen tablet:h-[720px]"
      >
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
            <input
              type="text"
              className="w-full p-0 border-none header3 focus:ring-0 text-grey-500"
              placeholder="공개채팅방 이름을 입력해 주세요."
              {...register('name', {
                required: '채팅방 이름을 입력해주세요.🥹',
                maxLength: {
                  value: 30,
                  message: '채팅방 이름은 30글자를 초과할 수 없어요.🥲',
                },
              })}
            />
            {errors.name && (
              <span className="text-red animate-fadeIn">
                {errors.name.message}
              </span>
            )}
            <Divider type="horizontal" />
            <input
              type="text"
              placeholder="채팅방에 대해 소개해 주세요"
              className="w-full p-0 border-none body1 focus:ring-0 text-grey-500"
              {...register('description', {
                required: '채팅방 소개를 입력해주세요.🥹',
                maxLength: {
                  value: 30,
                  message: '채팅방 소개는 30자를 초과할 수 없어요.🥲',
                },
              })}
            />
            {errors.description && (
              <span className="text-red animate-fadeIn">
                {errors.description.message}
              </span>
            )}

            <HashTagInput
              onChangeTag={onChangeTag}
              reset={resetTag}
              setTagList={setTagList}
              tag={tag}
              tagList={tagList}
            />
          </FlexBox>
          <FlexBox className="order-1 gap-4 tablet:order-2">
            <ImageDisplay
              image={imagePreview}
              onChangeImage={handleImageUpload}
            />
            <ImageList onChangeImage={handleImageUpload} />
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
            <Button fullWidth type="submit">
              확인
            </Button>
          </FlexBox>
        </div>
      </form>
    </Modal>
  );
}
