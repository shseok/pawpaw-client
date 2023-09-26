import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import DropdownIcon from '@/public/Auth/arrow-drop-down.svg';
import Button from '../../Button';

interface Props {
  isOpen: boolean;
  selected: string;
  list: string[];
  placeholder: string;
  handleClick: () => void;
  handleSelect: (value: string) => void;
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
      handleSelect(customValue.trim());
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
                className="w-full text-start cursor-pointer px-5 py-4 hover:bg-grey-100 body1 text-grey-400 border-b border-grey-200"
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
              className="cursor-pointer px-5 py-4 hover:bg-grey-100 body1 text-grey-400"
            >
              +직접입력
            </button>
          </li>
        </ul>
      )}
      {isCustomInputOpen && (
        <div className="absolute z-[10] px-5 py-4 bg-white border border-grey-200 rounded-b-[10px] shadow-sm flex gap-1.5 w-full">
          <input
            className="w-full flex-1 border-0 focus-none p-0"
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
