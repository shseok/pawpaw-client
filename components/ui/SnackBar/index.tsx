import Check from 'public/Check.svg';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import FlexBox from '../FlexBox';

export default function SnackBar({
  message,
  time,
  showSnackBar,
  setShowSnackBar,
}: {
  message: string;
  time: number;
  showSnackBar: boolean;
  setShowSnackBar: Dispatch<SetStateAction<boolean>>;
}) {
  const [fadeAnimation, setFadeAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSnackBar(false);
    }, time + 1000);
    const fadetimer = setTimeout(() => {
      setFadeAnimation(false);
    }, time);
    return () => {
      clearTimeout(timer);
      clearTimeout(fadetimer);
      setFadeAnimation(true);
    };
  }, [showSnackBar]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showSnackBar && (
        <FlexBox
          className={`fixed w-[800px] h-16 py-4 px-[120px] gap-2 rounded-[100px] transform -translate-x-1/2 -translate-y-1/2 bottom-3 left-1/2 bg-grey-800/70 ${
            fadeAnimation ? 'animate-snackbarIn' : 'animate-snackbarOut'
          }`}
        >
          <Check />
          <div className="text-white header4">{message}</div>
        </FlexBox>
      )}
    </>
  );
}
