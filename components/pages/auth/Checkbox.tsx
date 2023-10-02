import React from 'react';
import Check from '@/public/Auth/check.svg';

interface Props {
  option: number;
  isChecked: boolean;
  disabled?: boolean;
  onValueChangeHandler?: () => void;
  text: string;
  textColor?: string;
  checkBoxBorderColor?: string;
  // size?: 'small' | 'medium' | 'large';
}

export default function Checkbox({
  option,
  isChecked,
  text,
  disabled,
  onValueChangeHandler,
  textColor = 'text-grey-600',
  checkBoxBorderColor = 'border-grey-300', // size = 'medium',
}: Props) {
  const onPressedHandler = () => {
    if (onValueChangeHandler) {
      onValueChangeHandler();
    }
  };

  const triggerCheckbox = () => {
    if (disabled) return;
    onPressedHandler();
  };
  const id = `checkbox-${option}`;
  return (
    <label className="cursor-pointer" htmlFor={id}>
      <div className="flex items-center gap-[18px]">
        <div
          className={`rounded-sm border-[1px] ${
            isChecked ? 'border-primary-200' : checkBoxBorderColor
          } p-px`}
        >
          <Check className={isChecked ? 'fill-primary-200' : 'fill-grey-300'} />
        </div>
        <span className={`${textColor} header4`}>{text}</span>
      </div>
      <input
        id={id}
        type="checkbox"
        className="hidden appearance-none"
        checked={isChecked}
        onChange={triggerCheckbox}
      />
    </label>
  );
}
