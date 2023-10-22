'use client';

import { useEffect } from 'react';
import { useGeneralRegisterStore } from '@/hooks/stores/useGeneralRegisterStore';
import { useRouter, useSearchParams } from 'next/navigation';
import { getSocialInfo } from '@/service/auth';
import { shallow } from 'zustand/shallow';
import Toast from '@/utils/notification';
import ProgressBar from '../ProgressBar';
import CheckListOfTerm from '../CheckListOfTerm';
import BottomButton from '../BottomButton';

export default function Policy({ title }: { title: string }) {
  const checkList = useGeneralRegisterStore((state) => state.checkList);
  const { setNickname, setImageFile } = useGeneralRegisterStore(
    (state) => ({
      setNickname: state.setNickname,
      setImageFile: state.setImageFile,
    }),
    shallow,
  );
  const router = useRouter();
  const searchParams = useSearchParams();
  const key = searchParams.get('key');

  useEffect(() => {
    async function fetchSocialInfo(socialKey: string) {
      try {
        const { name, profileImageUrl } = await getSocialInfo(socialKey);
        if (name !== 'null') {
          setNickname(name);
        }
        // 이미지 파일을 상태에 설정
        setImageFile(profileImageUrl);
      } catch (e) {
        if (e instanceof Error) {
          Toast.error(e.message);
        }
      }
    }
    if (key) {
      fetchSocialInfo(key);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-full gap-[56px] mb-[155px]">
        <div className="flex flex-col items-center w-full">
          <h1 className="header1">{title}</h1>
          <ProgressBar step={1} limit={key ? 3 : 5} />
        </div>
        <CheckListOfTerm />
      </div>
      <BottomButton
        text="다음"
        isFullWidth
        variant="primary"
        isDisabled={checkList.slice(0, 3).some((v) => !v)}
        handleClick={() => {
          const link = key
            ? `/auth/location?key=${key}&step=2`
            : '/auth/register?step=2';
          router.push(link);
        }}
      />
    </>
  );
}
