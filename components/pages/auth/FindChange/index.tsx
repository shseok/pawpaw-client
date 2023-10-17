'use client';

import React, { useState } from 'react';
import BottomButton from '../BottomButton';

export default function FindChange({ title }: { title: string }) {
  const [activeTab, setActiveTab] = useState<'findId' | 'changePwd'>('findId');
  const [name, setName] = useState('');
  const [confirmContent, setConfirmContent] = useState('');

  const handleFindChange = () => {
    if (activeTab === 'findId') {
      // findId
    } else {
      // changePwd
    }
  };

  return (
    <form className="w-full flex flex-col xs:gap-5" onSubmit={handleFindChange}>
      <div className="flex flex-col item-center mb-[140px] xs:mb-[178px]">
        <div className="mb-10">
          <h1 className="header1 text-center w-full gap-[40px]">{title}</h1>
          {/* {error && (
            <p className="body3 mt-[30px] text-red break-keep text-center">
              {error}
            </p>
          )} */}
        </div>
        <div className="flex flex-col gap-5">
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="body1 text-grey-800">
              이름
            </label>
            <input
              id="name"
              className="h-[58px] rounded-[10px] text-xs 2xs:body1 placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
              type="text"
              placeholder="pawpaw1234@google.com"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="body1 text-grey-800">
              가입한 휴대폰으로 찾기
            </label>
            <input
              id="password"
              className="h-[58px] rounded-[10px] text-xs 2xs:body1 placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
              type="password"
              placeholder="비밀번호(8~16자의 영문, 숫자)"
              onChange={(e) => setConfirmContent(e.target.value)}
              autoComplete="on"
            />
          </div>
        </div>
      </div>
      <BottomButton type="submit" text="확인" isFullWidth variant="primary" />
    </form>
  );
}
