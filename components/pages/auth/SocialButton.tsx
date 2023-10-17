'use client';

import KakaoTalk from '@/public/Auth/kakao.svg';
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
    btn: 'w-14 h-14 2xs:w-[75px] 2xs:h-[75px]',
    svg: 'w-[38px] h-[38px] 2xs:w-[50px] 2xs:h-[50px]',
  },
};

const socialMap = {
  kakao: KakaoTalk,
  naver: Naver,
  google: Google,
} as const;

const REDIRECT_URI = `${
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL
    : process.env.NEXT_PUBLIC_CLIENT_BASE_URL
}/term`;

export default function SocialButton({
  hasBorder = 'border',
  socialProvider,
  size = 'medium',
}: Props) {
  const ButtonIcon = socialMap[socialProvider];
  const buttonStyle = `${sizes[size].btn} rounded-full ${bgColor[socialProvider]} flex items-center justify-center ${hasBorder}`;
  const handleLogin = (provider: string) => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorize/${provider}?redirect_uri=${REDIRECT_URI}`;
  };
  return (
    <button
      type="button"
      className={buttonStyle}
      onClick={() => handleLogin(socialProvider)}
    >
      <ButtonIcon className={sizes[size].svg} />
    </button>
  );
}
