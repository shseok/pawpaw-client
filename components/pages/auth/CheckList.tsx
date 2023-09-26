import React from 'react';
import Check from '@/public/Auth/check.svg';
import Link from 'next/link';

interface Props {
  text: string;
  to?: string;
  isChecked?: boolean;
  isShow?: boolean;
  className?: string;
  option: number;
  setCheck: () => void;
}

export default function CheckList({
  text,
  to,
  isChecked = false,
  isShow = false,
  setCheck,
  option,
  className,
}: Props) {
  let checkClassName = 'fill-transparent';
  if (isShow) {
    checkClassName = isChecked ? 'fill-primary-200' : 'fill-grey-300';
  }
  const listId = `list-${option}`;
  return (
    <label className="cursor-pointer" htmlFor={listId}>
      <div className={`flex items-center gap-[18px] ${className}`}>
        <Check className={checkClassName} />
        <div className="flex items-center gap-[10px]">
          <span className="text-lg leading-[26px] text-grey-600">{text}</span>
          {to && (
            <Link
              href={to}
              className="text-lg leading-[26px] text-grey-600 border-b-[1px] border-grey-600"
            >
              보기
            </Link>
          )}
        </div>
      </div>
      <input
        id={listId}
        type="checkbox"
        className="hidden appearance-none"
        checked={isChecked}
        onChange={setCheck}
      />
    </label>
  );
}
