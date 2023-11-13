export const generatePagination = (currentPage: number, totalPages: number) => {
  // 전체 페이지 수가 7이하일 경우 모든 페이지 번호를 배열로 반환
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  // 현재 페이지가 처음 3페이지 중 하나인 경우 처음 3페이지, 중간 생략을 나타내는 '...', 마지막에서 두번쨰,마지막페이지 반환
  // 만약 페이지가 총 50이고 현재 페이지가 2 일경우 -> 1 2 3 ... 49 50
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // 현재 페이지가 마지막 3페이지궁 하나인 경우 처음 2페이지, 생략, 마지막 3페이지 반환
  // 만약 페이지가 총 50이고 현재 페이지가 48일경우 1 2 ... 48 49 50
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // 현재 페이지가 중간에 있을경우 양옆 생략을 표시해주는 ... 를 포함하는 배열 반환
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
