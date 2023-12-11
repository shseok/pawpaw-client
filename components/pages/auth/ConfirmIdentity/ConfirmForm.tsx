import Button from '@/components/ui/Button';
import { useIdentityStore } from '@/hooks/stores/useIdentityStore';
import { checkVerification, requestVerification } from '@/service/auth';
import Toast from '@/utils/notification';
import React, { useEffect, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';

interface Props {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmForm({ setIsActive }: Props) {
  const { name, birthDate, phoneNum, setName, setBirthDate, setPhoneNum } =
    useIdentityStore(
      (state) => ({
        name: state.name,
        phoneNum: state.phoneNum,
        birthDate: state.birthDate,
        setName: state.setName,
        setPhoneNum: state.setPhoneNum,
        setBirthDate: state.setBirthDate,
      }),
      shallow,
    );
  const [username, setUsername] = useState(name);
  const [birthDay, setBirthDay] = useState(birthDate);
  const [phoneNumber, setPhoneNumber] = useState(phoneNum);
  const [code, setCode] = useState('');
  const [isDuplicatedRequest, setIsDuplicatedRequest] = useState(false); // 중복 요청 방지
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(180); // 초기값: 180초 (3분)
  const inputRef = useRef<HTMLInputElement>(null);
  const handleVerificationRequest = async () => {
    // 초기화
    setIsLoading(false);
    try {
      await requestVerification({
        name: username,
        birthday: birthDay,
        recipient: phoneNumber,
      });
      setIsLoading(true);
      setTimer(180);
    } catch (e) {
      if (e instanceof Error) {
        setIsLoading(false);
        Toast.error(e.message);
      }
    }
  };

  const handleVerificationCheck = async () => {
    // 재요청시 로직
    if (isDuplicatedRequest) {
      try {
        await requestVerification({
          name: username,
          birthday: birthDay,
          recipient: phoneNumber,
        });
        Toast.error('다시 인증해주세요.');
        setIsDuplicatedRequest(false);
        inputRef.current?.focus();
      } catch (e) {
        if (e instanceof Error) {
          Toast.error(e.message);
        }
      }
      return;
    }
    // 인증 완료 > 타이머 중지
    try {
      const { success } = await checkVerification({ phoneNumber, code });
      if (success) {
        setIsActive(true);
        setName(username);
        setBirthDate(birthDay);
        setPhoneNum(phoneNumber);
        setTimer(0); // 타이머 값 리셋
      } else {
        Toast.error('인증번호가 일치하지 않습니다.');
        setIsDuplicatedRequest(true);
      }
    } catch (e) {
      if (e instanceof Error) {
        Toast.error(e.message);
      }
    }
  };

  useEffect(() => {
    let timeInterval: NodeJS.Timeout | undefined;
    if (isLoading) {
      timeInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0 && timeInterval) {
      clearInterval(timeInterval);
      setIsLoading(false); // isLoading 값을 false로 업데이트
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, [isLoading, timer]);
  return (
    <div className="flex flex-col w-full gap-5">
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="body1 text-grey-800">
          이름
        </label>
        <input
          id="name"
          className="h-[58px] text-xs 2xs:text-sm sm:body1 rounded-[10px] placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
          type="text"
          defaultValue={username}
          placeholder="이름"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <div className="flex flex-col gap-2">
        <label htmlFor="birthDay" className="body1 text-grey-800">
          생년월일
        </label>
        <input
          className="h-[58px] text-xs 2xs:text-sm sm:body1 rounded-[10px] placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
          id="birthDay"
          type="text"
          defaultValue={birthDay}
          placeholder="8자리  ex) 20000503"
          onChange={(e) => setBirthDay(e.target.value)}
        />
      </div>
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phoneNumber" className="body1 text-grey-800">
          휴대폰 번호
        </label>
        <div className="w-full h-[58px] flex flex-row gap-[10px]">
          <input
            className="w-full grow text-xs 2xs:text-sm sm:body1 rounded-[10px] placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
            id="phoneNumber"
            type="text"
            defaultValue={phoneNumber}
            placeholder="(-)를 제외한 숫자만 입력"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button
            className="flex-none body2 h-full w-[75px] 2xs:w-[100px]"
            variant="primary"
            onClickAction={handleVerificationRequest}
            disabled={!username || !birthDay || !phoneNumber || isLoading}
          >
            인증요청
          </Button>
        </div>
      </div>
      <div className="h-[58px] flex flex-row gap-[10px]">
        <div className="relative w-full">
          <input
            ref={inputRef}
            className="w-full grow text-xs 2xs:text-sm sm:body1 rounded-[10px] placeholder-grey-400 py-4 pl-5 pr-[50px] border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200"
            type="text"
            placeholder="인증번호"
            onChange={(e) => setCode(e.target.value)}
          />
          {isLoading && (
            <span className="absolute right-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2 text-primary-200">
              {Math.floor(timer / 60)}:
              {`${timer % 60 < 10 ? '0' : ''}${timer % 60}`}
            </span>
          )}
        </div>
        <Button
          className="flex-none body2 h-full w-[75px] 2xs:w-[100px]"
          variant={!isDuplicatedRequest ? 'primary' : 'ghost'}
          onClickAction={handleVerificationCheck}
          disabled={!isLoading}
        >
          {!isDuplicatedRequest ? '인증' : '재전송'}
        </Button>
      </div>
    </div>
  );
}
