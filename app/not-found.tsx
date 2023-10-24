import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-xs gap-3 m-auto">
      <h2 className="mb-5 header1">앗! 잠시만요.</h2>
      <p className="mb-5 text-center whitespace-pre-wrap body2">
        원하시는 페이지를 찾을 수 없어요. <br />
        찾으시려는 페이지의 주소가 잘못 입력되었거나,
        <br />
        페이지 주소가 변경 또는 삭제되어 더는 사용하실 수 없습니다. 입력하신
        페이지의 주소가 정확한지 다시 한번 확인해주세요.
      </p>
      <Button fullWidth to="/">
        홈으로 이동
      </Button>
    </div>
  );
}
