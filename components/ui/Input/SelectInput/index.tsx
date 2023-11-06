'use client';

import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { Species } from '@/types/types';
import DropdownIcon from '@/public/svgs/Auth/arrow-drop-down.svg';
import Button from '../../Button';

interface Props {
  isOpen: boolean;
  selected: string;
  list: readonly Species[];
  placeholder: string;
  handleClick: () => void;
  handleSelect: (value: Species) => void;
}

export default function SelectInput({
  isOpen,
  selected,
  list,
  handleClick,
  handleSelect,
  placeholder,
}: Props) {
  const [isCustomInputOpen, setIsCustomInputOpen] = useState(false);
  const [customValue, setCustomValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggleDropdown = () => {
    // setIsCustomInputOpen(!isCustomInputOpen);
    if (isCustomInputOpen) {
      setIsCustomInputOpen(false);
    }

    handleClick();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomValue(event.target.value);
  };

  const handleConfirmCustomValue = () => {
    if (customValue.trim() !== '') {
      setIsCustomInputOpen(false);
      // 서버에서 정해놓은 값이 아니므로 사용불가능 > 추후 변경 > 일단, 유저가 입력해도 강아지로 강제 기존 종류(타입) 선택
      handleSelect('강아지');
      // handleSelect(customValue.trim() as Species);
      setCustomValue('');
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleConfirmCustomValue();
    }
  };

  const buttonRadius = isOpen ? 'rounded-t-[10px]' : 'rounded-[10px]';
  const borderBottom = isOpen ? 'border-b-[0px]' : '';
  return (
    <div className="relative w-full">
      <button
        type="button"
        className={`border border-grey-200 ${buttonRadius} px-5 py-4 bg-white flex items-center justify-between w-full ${borderBottom}`}
        onClick={handleToggleDropdown}
      >
        {selected ? (
          <span className="body1">{selected}</span>
        ) : (
          <span className="body1 text-grey-400">{placeholder}</span>
        )}
        <DropdownIcon
          className={`w-3.5 h-3.5 fill-grey-300 ml-2 transition-transform duration-200 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && !isCustomInputOpen && (
        <ul className="w-full absolute z-[10] bg-white border border-grey-200 rounded-b-[10px] shadow-sm max-h-[191px] overflow-y-scroll">
          {list.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => handleSelect(item)}
                className="w-full px-5 py-4 border-b cursor-pointer text-start hover:bg-grey-100 body1 text-grey-400 border-grey-200"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => {
                setIsCustomInputOpen(true);
                inputRef.current?.focus();
              }}
              className="w-full px-5 py-4 cursor-pointer text-start hover:bg-grey-100 body1 text-grey-400"
            >
              +직접입력
            </button>
          </li>
        </ul>
      )}
      {isCustomInputOpen && (
        <div className="absolute z-[10] px-5 py-4 bg-white border border-grey-200 rounded-b-[10px] shadow-sm flex gap-1.5 w-full">
          <input
            className="flex-1 w-full p-0 border-0 focus-none"
            type="text"
            value={customValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="+직접입력"
            ref={inputRef}
          />
          <Button onClickAction={handleConfirmCustomValue}>확인</Button>
        </div>
      )}
    </div>
  );
}
