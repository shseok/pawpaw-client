'use client';

import React, { useState, FormEvent } from 'react';
import BottomButton from '../BottomButton';
import TabButton from './TabButton';
import { changePassword, findUserEmail } from '@/service/auth';

export type TabType = 'findId' | 'changePwd';
const tabInfo = {
  findId: {
    labelText: '가입한 휴대폰으로 찾기',
    placeholder: '(-)를 제외한 숫자만 입력',
  },
  changePwd: {
    labelText: '아이디(이메일)',
    placeholder: '가입한 아이디를 기입해주세요',
  },
};

export default function FindChange({ title }: { title: string }) {
  const [activeTab, setActiveTab] = useState<TabType>('findId');
  const [name, setName] = useState('');
  const [confirmContent, setConfirmContent] = useState('');

  const handleFindChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (activeTab === 'findId') {
      await findUserEmail({ name, phoneNumber: confirmContent });
    } else {
      await changePassword({ name, email: confirmContent });
    }
  };

  const tabButton = (params: TabType) => {
    setActiveTab(params);
    setName('');
    setConfirmContent('');
  };

  return (
    <form className="w-full flex flex-col xs:gap-5" onSubmit={handleFindChange}>
      <div className="flex flex-col item-center mb-[140px] xs:mb-[178px]">
        <div className="mb-10">
          <h1 className="header1 text-center w-full gap-[40px]">{title}</h1>
          <div className="w-full flex items-center pt-8">
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
          {activeTab === 'findId' && (
            <p className="caption2 text-grey-400 pt-6 text-center break-keep">
              회원 가입 시 등록하신 휴대폰 번호로 아이디를 찾을 수 있습니다.
              <br className="hidden 2xs:block" /> 아래 정보를 입력해주세요.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-5">
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="body1 text-grey-800">
              이름
            </label>
            <input
              id="name"
              value={name}
              className="h-[58px] rounded-[10px] text-xs 2xs:body1 placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
              type="text"
              placeholder="이름을 기입해주세요"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm-content" className="body1 text-grey-800">
              {tabInfo[activeTab].labelText}
            </label>
            <input
              id="confirm-content"
              value={confirmContent}
              className="h-[58px] rounded-[10px] text-xs 2xs:body1 placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
              type="text"
              placeholder={tabInfo[activeTab].placeholder}
              onChange={(e) => setConfirmContent(e.target.value)}
              autoComplete="on"
            />
          </div>
        </div>
      </div>
      <BottomButton
        isDisabled={!name || !confirmContent}
        type="submit"
        text="확인"
        isFullWidth
        variant="primary"
      />
    </form>
  );
}
