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

export default function SocialButton({
  hasBorder = 'border',
  socialProvider,
  size = 'medium',
}: Props) {
  const ButtonIcon = socialMap[socialProvider];
  const buttonStyle = `${sizes[size].btn} rounded-full ${bgColor[socialProvider]} flex items-center justify-center ${hasBorder}`;
  const handleLogin = (provider: string) => {
    // Redirect URI는 백에서 정의되고 있습니다. > ?redirect_uri=${process.env.NEXT_PUBLIC_CLIENT_URL}/auth/policy
    // 로컬에서 테스트할 때는 프록시로 인해 아래 url을 사용해야합니다.
    // const url = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorize/${provider}`;
    const url = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorize/${provider}`;
    window.location.href = url;
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
