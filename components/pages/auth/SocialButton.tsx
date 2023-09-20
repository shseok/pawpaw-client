import React from 'react';
import KakaoTalk from '@/public/Auth/kakotalk.svg';
import Naver from '@/public/Auth/naver.svg';
import Google from '@/public/Auth/google.svg';

interface Props {
  handleLogin: () => void;
  hasBorder?: string;
  socialType: SocialType;
  size?: 'medium';
}
type SocialType = keyof typeof socialMap;

const bgColor = {
  kakao: 'bg-icon-kakao',
  naver: 'bg-icon-naver',
  google: 'bg-icon-google',
};

const sizes = {
  medium: {
    btn: 'w-[75px] h-[75px]',
    svg: 'w-[50px] h-[50px]',
  },
};

const socialMap = {
  kakao: KakaoTalk,
  naver: Naver,
  google: Google,
} as const;

export default function SocialButton({
  handleLogin,
  hasBorder = 'border',
  socialType,
  size = 'medium',
}: Props) {
  const ButtonIcon = socialMap[socialType];
  const buttonStyle = `${sizes[size].btn} rounded-full ${bgColor[socialType]} flex items-center justify-center ${hasBorder}`;
  return (
    <button className={buttonStyle} onClick={handleLogin}>
      {<ButtonIcon className={sizes[size].svg} />}
    </button>
  );
}
