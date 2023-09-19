import React from 'react';
import Check from '@/public/Auth/check.svg';

interface Props {
  isChecked: boolean;
  disabled?: boolean;
  onValueChangeHandler?: (checked: boolean) => void;
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
      onValueChangeHandler(!isChecked);
    }
  };

  const triggerCheckbox = () => {
    if (disabled) return;
    onPressedHandler();
  };

  checkBoxBorderColor ??= 'border-grey-300';

  return (
    <div>
      <button
        className="flex items-center gap-[18px]"
        onClick={triggerCheckbox}
      >
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
      </button>
    </div>
  );
};

export default Checkbox;
