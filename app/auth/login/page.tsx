'use client';

import AuthForm from '@/components/pages/auth/AuthForm';
import Button from '@/components/ui/Button';
import KakaoTalk from '@/public/Auth/kakotalk.svg';
import Naver from '@/public/Auth/naver.svg';
import Google from '@/public/Auth/google.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SocialButton from '@/components/pages/auth/SocialButton';

const REDIRECT_URI = 'http://localhost:3000/term';
// TODO: ui 완성 > 컴포넌트화 진행하기
export default function Login() {
  const router = useRouter();
  const body = (
    <div className="flex flex-col items-center max-w-[330px]">
      <h1 className="text-[32px] leading-[40px] font-bold">로그인</h1>
      <span className="text-center mt-4 mb-[50px] text-grey-600 text-[18px] leading-[26px]">
        SNS로 간편하게 로그인하고 더 많은 서비스를 즐겨보세요!
      </span>
      <div className="flex gap-10 items-center mb-[82px]">
        <SocialButton socialType="kakao" handleLogin={() => {}} />

        <SocialButton socialType="naver" handleLogin={() => {}} />
        <SocialButton
          socialType="google"
          handleLogin={() => {
            // redirect term
            // but, http://localhost:3000/auth/social/policy?key=e8648691-f3fa-4cfc-9a86-48c604a38f87
            // https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=189454436899-77tantbj2bfdan45p7m5sar5uhb03tho.apps.googleusercontent.com&scope=profile%20email&state=ea7lSHPIFifdnIZaZpLyMzUc7kk-yfueukldMvU0ALw%3D&redirect_uri=https%3A%2F%2Fpawpawdev.duckdns.org%2Foauth2%2Fcallback%2Fgoogle&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow
            window.location.href = `https://pawpawdev.duckdns.org/oauth2/authorize/google?redirect_uri=${REDIRECT_URI}`;
          }}
          hasBorder="border"
        />
      </div>
      <div className="flex justify-center items-cente">
        <button
          className="text-[18px] leading-[26px] font-medium text-grey-500 border-b-[1px] border-grey-400"
          onClick={() => {}}
        >
          이메일로 로그인하기
        </button>
      </div>
    </div>
  );

  const footer = (
    <div className="flex flex-col items-center gap-10 w-full">
      <Button
        className="text-lg flex-1 px-[20px] py-[16px]"
        variant="ghost"
        fullWidth
        to="/register"
      >
        간편 회원가입 하기
      </Button>
      <div className="flex justify-between gap-[24px]">
        <Link href="/" className="text-grey-400 text-[18px] leading-[26px]">
          아이디(이메일)찾기
        </Link>
        <div className="w-[1px] h-[24px] bg-grey-200" />
        <Link href="/" className="text-grey-400 text-[18px] leading-[26px]">
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );

  return (
    <AuthForm>
      {body}
      {footer}
    </AuthForm>
  );
}
