'use client';

import KakaoTalk from '@/public/Auth/kakotalk.svg';
import Naver from '@/public/Auth/naver.svg';
import Google from '@/public/Auth/google.svg';

interface Props {
  hasBorder?: string;
  socialProvider: SocialType;
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

const REDIRECT_URI = 'http://localhost:3000/term';

export default function SocialButton({
  hasBorder = 'border',
  socialProvider,
  size = 'medium',
}: Props) {
  const ButtonIcon = socialMap[socialProvider];
  const buttonStyle = `${sizes[size].btn} rounded-full ${bgColor[socialProvider]} flex items-center justify-center ${hasBorder}`;
  const handleLogin = (provider: string) => {
    window.location.href = `https://pawpawdev.duckdns.org/oauth2/authorize/${provider}?redirect_uri=${REDIRECT_URI}`;
  };
  return (
    <button className={buttonStyle} onClick={() => handleLogin(socialProvider)}>
      {<ButtonIcon className={sizes[size].svg} />}
    </button>
  );
}
