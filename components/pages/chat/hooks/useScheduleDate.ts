import { useState } from 'react';

const getDateFormatter = (date: number) => {
  if (date < 10) {
    return `0${date}`;
  }
  return `${date}`;
};

const initialDate = {
  year: new Date().getFullYear().toString(),
  month: getDateFormatter(new Date().getMonth() + 1),
  date: getDateFormatter(new Date().getDate()),
  hour: '',
};
export type DateKeyType = keyof typeof initialDate;

function useScheduleDate() {
  const [startDate, setStartDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(initialDate);

  const handleStartDate = (key: DateKeyType, selectedValue: string) => {
    setStartDate({
      ...startDate,
      [key]: selectedValue,
    });
  };
  const handleEndDate = (key: DateKeyType, selectedValue: string) => {
    setEndDate((prevEndDate) => ({
      ...prevEndDate,
      [key]: selectedValue,
    }));
  };

  // 1.만약 일을 1월 31일을 선택했는데 월을 11월로바꾸면 11월은 30일이 끝이기때문에 30일로 자동적으로 바뀌어야함.
  // 2.Select 컴포넌트 구조 다시 좀 생각해보고 마무리하기.
  // 3.하루종일 상태와는 어떻게 연결할것인지?
  // 4.만약 종료날짜가 시작날짜보다 더 빠르다면 어떻게 처리할것인지?
  return { startDate, handleStartDate, endDate, handleEndDate };
}
export default useScheduleDate;
