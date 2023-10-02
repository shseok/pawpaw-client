import Link from 'next/link';
import SocialButton from '@/components/pages/auth/SocialButton';
import BottomButton from '@/components/pages/auth/BottomButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인',
  robots: 'noindex',
};

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col items-center max-w-[80%] mb-[68px]">
        <h1 className="header1">로그인</h1>
        <span className="text-center mt-4 mb-[50px] text-grey-600 body1 break-keep">
          SNS로 간편하게 로그인하고 더 많은 서비스를 즐겨보세요!
        </span>
        <div className="flex gap-6 tablet:gap-10 items-center mb-[38px] tablet:mb-[82px]">
          <SocialButton socialProvider="kakao" />
          <SocialButton socialProvider="naver" />
          <SocialButton socialProvider="google" hasBorder="border" />
        </div>
        <div className="flex justify-center items-cente">
          <Link
            className="body1 text-grey-500 border-b-[1px] border-grey-400"
            href="/"
          >
            이메일로 로그인하기
          </Link>
        </div>
      </div>
      <BottomButton
        text="간편 회원가입 하기"
        to="/auth/policy?next=/auth/register"
        variant="ghost"
        isFullWidth
      >
        <div className="flex justify-between gap-[24px]">
          <Link href="/" className="text-grey-400 body1">
            아이디(이메일)찾기
          </Link>
          <div className="w-[1px] h-[24px] bg-grey-200" />
          <Link href="/" className="text-grey-400 body1">
            비밀번호 찾기
          </Link>
        </div>
      </BottomButton>
    </>
  );
}
