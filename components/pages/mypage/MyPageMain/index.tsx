'use client';

import { useState } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import MyBoardsList from './MyBoardsList';

export default function MyPageMain() {
  const MYPAGE_TABS = ['내 게시물', '채팅방', '북마크', '내 장소'];
  const [selectedTab, setSelectedTab] = useState('내 게시물');

  // 선택된 탭에 따라 해당 컴포넌트를 렌더링
  const renderTabContent = () => {
    switch (selectedTab) {
      case '내 게시물':
        return <MyBoardsList />;
      case '채팅방':
        return <div>채팅방 컴포넌트</div>;
      case '북마크':
        return <div>북마크 컴포넌트</div>;
      case '내 장소':
        return <div>내 장소 컴포넌트</div>;
      default:
        return <div>다시 선택하세요</div>;
    }
  };
  return (
    <FlexBox direction="column" className="w-full gap-5">
      <div className="w-full h-[50px] sticky top-0 border-b-[3px] bg-white">
        {MYPAGE_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setSelectedTab(tab)}
            className={`max-w-[120px] h-[50px] p-3 gap-2 ${
              selectedTab === tab
                ? 'header4 border-b-[3px] border-primary-200 text-primary-200'
                : 'body1 text-grey-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderTabContent()}
    </FlexBox>
  );
}
