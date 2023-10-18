// TabButton.js
import { cn } from '@/utils/common';
import React from 'react';
import { TabType } from '.';

interface Props {
  activeTab: string;
  tabName: TabType;
  handleClick: () => void;
  text: string;
}

function TabButton({ activeTab, tabName, handleClick, text }: Props) {
  return (
    <button
      type="button"
      className="w-1/2 flex flex-col justify-center items-center gap-2"
      onClick={handleClick}
    >
      <p
        className={`${
          activeTab === tabName ? 'header4' : 'body1'
        } text-grey-600`}
      >
        {text}
      </p>
      <div
        className={cn(
          'w-full h-1 bg-grey-200',
          activeTab === tabName ? 'bg-grey-600' : null,
        )}
      />
    </button>
  );
}

export default TabButton;
