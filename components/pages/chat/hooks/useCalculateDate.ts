export default function useCalculateDate(year: number, month: number) {
  const lastDate = new Date(year, month, 0).getDate();
  const dateArray = Array.from({ length: lastDate }, (_, index) =>
    (index + 1).toString().padStart(2, '0'),
  );
  return { lastDate, dateArray };
}
