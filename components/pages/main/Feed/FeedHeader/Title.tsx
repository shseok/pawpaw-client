export default function Title({ nickname }: { nickname: string | undefined }) {
  return (
    <div className="header1">
      <span className="text-primary-300">{nickname}</span>님 좋은 하루 되세요!
    </div>
  );
}
