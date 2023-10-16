export default function useRelativeTime(createdDate: string): string {
  const currentDate = new Date();
  const postDate = new Date(createdDate);
  const timeDifference = currentDate.getTime() - postDate.getTime();

  // 일 단위
  if (timeDifference >= 24 * 60 * 60 * 1000) {
    const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    return `${daysAgo}일 전`;
  }
  if (
    // 시간 단위
    timeDifference < 24 * 60 * 60 * 1000 &&
    timeDifference >= 60 * 60 * 1000
  ) {
    const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
    return `${hoursAgo}시간 전`;
  }
  if (timeDifference < 60 * 60 * 1000) {
    return '1시간 전';
  }

  // 기본적으로 작성일시를 반환
  return postDate.toLocaleString();
}
