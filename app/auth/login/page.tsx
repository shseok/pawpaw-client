import AuthForm from '@/components/pages/auth/AuthForm';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import SocialButton from '@/components/pages/auth/SocialButton';

export default function Login() {
  const body = (
    <div className="flex flex-col items-center max-w-[330px]">
      <h1 className="header1">로그인</h1>
      <span className="text-center mt-4 mb-[50px] text-grey-600 body1">
        SNS로 간편하게 로그인하고 더 많은 서비스를 즐겨보세요!
      </span>
      <div className="flex gap-10 items-center mb-[82px]">
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
        <Link href="/" className="text-grey-400 body1">
          아이디(이메일)찾기
        </Link>
        <div className="w-[1px] h-[24px] bg-grey-200" />
        <Link href="/" className="text-grey-400 body1">
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
