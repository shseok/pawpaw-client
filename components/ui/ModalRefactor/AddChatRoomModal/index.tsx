'use client';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ModalProps } from '@/types/types';
import useInput from '@/hooks/common/useInput';
import XIcon from '@/public/X.svg';
import useImageUpload from '@/hooks/common/useImageUpload';
import { postChatRoom } from '@/service/chatRoom';
import { FlexBox, Divider, Button, Modal } from '../../ui';
import HashTagInput from './HashTagInput';
import ImageDisplay from './ImageDisplay';
import MobileHeader from './MobileHeader';
import OptionRadioGroup from './OptionRadioGroup';

interface FormData {
  name: string;
  description: string;
}

export default function AddChatRoomModal({ open, onClose }: ModalProps) {
  const [tag, onChangeTag, resetTag] = useInput('');
  const [tagList, setTagList] = useState<string[]>([]);
  const { handleImageUpload, imageFile, imagePreview } = useImageUpload();
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
        router.push(`/chat/${response.chatroomId}`);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      // 스낵바 컴포넌트가 완성되면 바꿀예정
      alert(error);
    }
  };
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!imageFile) {
      // 스낵바 컴포넌트가 완성되면 바꿀예정
      alert('커버이미지를 업로드 해주세요.');
      return;
    }
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
        className="flex flex-col w-screen tablet:w-[800px] h-screen tablet:h-[720px]"
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

          <FlexBox className="order-1 gap-2 tablet:order-2">
            <ImageDisplay
              image={imagePreview}
              onChangeImage={handleImageUpload}
            />
          </FlexBox>
          <OptionRadioGroup
            option={option}
            onChangeOption={handleRadioOption}
          />
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
