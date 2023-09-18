import Button from '@/components/ui/Button';
import KakaoTalk from '@/public/Auth/kakotalk.svg';
import Naver from '@/public/Auth/naver.svg';
import Google from '@/public/Auth/google.svg';
import Link from 'next/link';

// TODO: ui 완성 > 컴포넌트화 진행하기
export default function Login() {
  return (
    <div className="max-w-[503px] min-h-[504px] bg-white px-[65px] py-[60px] flex flex-col items-center justify-between mx-auto mt-8 gap-[98px] rounded-[10px]">
      <div className="flex flex-col items-center max-w-[330px]">
        <h1 className="text-[32px] leading-[40px] font-bold">로그인</h1>
        <span className="text-center mt-4 mb-[50px] text-grey-600 text-[18px] leading-[26px]">
          SNS로 간편하게 로그인하고 더 많은 서비스를 즐겨보세요!
        </span>
        <div className="flex gap-10 items-center mb-[82px]">
          <button className="w-[75px] h-[75px] rounded-full bg-icon-kakao flex items-center justify-center">
            <KakaoTalk className="w-[50px] h-[50px]" />
          </button>
          <button className="w-[75px] h-[75px] rounded-full bg-icon-naver flex items-center justify-center">
            <Naver className="w-[50px] h-[50px]" />
          </button>
          <button className="w-[75px] h-[75px] rounded-full bg-icon-google border flex items-center justify-center">
            <Google className="w-[50px] h-[50px]" />
          </button>
        </div>
        <div className="flex justify-center items-cente">
          <button className="text-[18px] leading-[26px] font-medium text-grey-500 border-b-[1px] border-grey-400">
            이메일로 로그인하기
          </button>
        </div>
      </div>
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
    </div>
  );
}
