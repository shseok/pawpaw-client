'use client';

import React, { useState } from 'react';
import BottomButton from '../BottomButton';
import TabButton from './TabButton';
import { sendEmailChangeVerificationLink, findUserEmail } from '@/service/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import Toast from '@/utils/notification';

export type TabType = 'findId' | 'changePwd';
const tabInfo = {
  findId: {
    nameText: '닉네임',
    namePlaceholder: '닉네임을 기입해주세요',
    confirmText: '가입한 휴대폰으로 찾기',
    confirmPlaceholder: '(-)를 제외한 숫자만 입력',
  },
  changePwd: {
    nameText: '이름',
    namePlaceholder: '이름(실명)을 기입해주세요',
    confirmText: '아이디(이메일)',
    confirmPlaceholder: '가입한 아이디를 기입해주세요',
  },
};

export default function FindChange() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') as TabType | null;
  const [activeTab, setActiveTab] = useState<TabType>(mode ?? 'findId');
  const [name, setName] = useState('');
  const [confirmContent, setConfirmContent] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState({
    email: '',
    registrationDate: '',
  });

  const handleFindChange = async () => {
    if (activeTab === 'findId') {
      try {
        const { email, registrationDate } = await findUserEmail({
          name,
          phoneNumber: confirmContent,
        });
        setResult((prev) => ({ ...prev, email, registrationDate }));
        setIsSuccess(true);
      } catch (e) {
        if (e instanceof Error) {
          Toast.error(e.message);
        }
      }
    } else {
      try {
        await sendEmailChangeVerificationLink({ name, email: confirmContent });
        setResult((prev) => ({ ...prev, email: confirmContent }));
        setIsSuccess(true);
      } catch (e) {
        if (e instanceof Error) {
          Toast.error(e.message);
        }
      }
    }
  };

  const tabButton = (params: TabType) => {
    setActiveTab(params);
    setName('');
    setConfirmContent('');
    setIsSuccess(false);
  };

  const renderResult = () => {
    return (
      <div className="pt-10">
        {activeTab === 'findId' ? (
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-3">
              <p className="header3 text-primary-200 text-center">
                아이디 찾기 완료
              </p>
              <p className="body1 text-grey800 text-center">
                입력하신 정보와 일치하는 아이디를 확인하세요.
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center mt-10 bg-[#F7F8F9] h-[96px]">
              <p className="header4 text-grey-800 text-center">
                {result.email}
              </p>
              <p className="caption2 text-primary-200 text-center">{`${result.registrationDate} 에 가입함`}</p>
            </div>
          </div>
        ) : (
          <p className="header4 text-grey-800 pb-[78px] pt-[128px] text-center">
            <span className=" text-primary-200">{result.email}</span>으로
            비밀번호 변경 주소를 <br /> 발송하였습니다.
          </p>
        )}
        <div className="mt-[140px]">
          <BottomButton
            isDisabled={activeTab === 'changePwd'}
            type="button"
            text="로그인 하기"
            isFullWidth
            variant="primary"
            handleClick={() => router.push('/auth/login')}
          />
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div>
        {activeTab === 'findId' && (
          <p className="caption2 text-grey-400 pt-6 text-center break-keep">
            회원 가입 시 등록하신 휴대폰 번호로 아이디를 찾을 수 있습니다.
            <br className="hidden 2xs:block" /> 아래 정보를 입력해주세요.
          </p>
        )}
        <div className="flex flex-col gap-5 mt-10">
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="body1 text-grey-800">
              {tabInfo[activeTab].nameText}
            </label>
            <input
              id="name"
              value={name}
              className="h-[58px] rounded-[10px] text-xs 2xs:body1 placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
              type="text"
              placeholder={tabInfo[activeTab].namePlaceholder}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm-content" className="body1 text-grey-800">
              {tabInfo[activeTab].confirmText}
            </label>
            <input
              id="confirm-content"
              value={confirmContent}
              className="h-[58px] rounded-[10px] text-xs 2xs:body1 placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
              type="text"
              placeholder={tabInfo[activeTab].confirmPlaceholder}
              onChange={(e) => setConfirmContent(e.target.value)}
              autoComplete="on"
            />
          </div>
        </div>
        <div className="mt-[140px]">
          <BottomButton
            isDisabled={!name || !confirmContent}
            type="submit"
            text="확인"
            isFullWidth
            variant="primary"
            handleClick={handleFindChange}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full flex items-center">
        <TabButton
          activeTab={activeTab}
          tabName="findId"
          handleClick={() => tabButton('findId')}
          text="아이디 찾기"
        />
        <TabButton
          activeTab={activeTab}
          tabName="changePwd"
          handleClick={() => tabButton('changePwd')}
          text="비밀번호 변경"
        />
      </div>
      {isSuccess ? renderResult() : renderForm()}
    </>
  );
}
