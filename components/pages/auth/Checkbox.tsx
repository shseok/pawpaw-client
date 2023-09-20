import React from 'react';
import Check from '@/public/Auth/check.svg';

interface Props {
  isChecked: boolean;
  disabled?: boolean;
  onValueChangeHandler?: () => void;
  text: string;
  textColor?: string;
  checkBoxBorderColor?: string;
  // size?: 'small' | 'medium' | 'large';
}

const Checkbox = ({
  isChecked,
  text,
  disabled,
  onValueChangeHandler,
  textColor = 'text-grey-600',
  checkBoxBorderColor, // size = 'medium',
}: Props) => {
  const onPressedHandler = () => {
    if (onValueChangeHandler) {
      onValueChangeHandler();
    }
  };

  const triggerCheckbox = () => {
    if (disabled) return;
    onPressedHandler();
  };

  checkBoxBorderColor ??= 'border-grey-300';

  return (
    <label className="cursor-pointer">
      <div className="flex items-center gap-[18px]">
        <div
          className={`rounded-sm border-[1px] ${
            isChecked ? 'border-primary-200' : checkBoxBorderColor
          } p-px`}
        >
          <Check className={isChecked ? 'fill-primary-200' : 'fill-grey-300'} />
        </div>
        <span className={`${textColor} font-bold text-lg leading-[26px]`}>
          {text}
        </span>
      </div>
      <input
        type="checkbox"
        className="hidden appearance-none"
        checked={isChecked}
        onChange={triggerCheckbox}
      />
    </label>
  );
};

export default Checkbox;
