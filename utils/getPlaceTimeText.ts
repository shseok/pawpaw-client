type TimeObject = {
  open: string | null;
  close: string | null;
  lastOrder: string | null;
};

type DaysObject = {
  mon: TimeObject;
  tue: TimeObject;
  wed: TimeObject;
  thu: TimeObject;
  fri: TimeObject;
  sat: TimeObject;
  sun: TimeObject;
};

type DaysObjectKeys = keyof DaysObject;

type TimeStringObject = Record<DaysObjectKeys, string>;

const transFromDaysToKorean = {
  mon: '월',
  tue: '화',
  wed: '수',
  thu: '목',
  fri: '금',
  sat: '토',
  sun: '일',
};

export function getPlaceTimeMap(days: DaysObject): TimeStringObject {
  const timeStringObject: TimeStringObject = {
    mon: '',
    tue: '',
    wed: '',
    thu: '',
    fri: '',
    sat: '',
    sun: '',
  };
  for (const day in days) {
    const { open, close, lastOrder } = days[day as DaysObjectKeys];
    const timeText = `${open ?? '시간미정'} ~ ${close ?? '시간미정'}`;
    timeStringObject[day as DaysObjectKeys] = timeText;
  }
  return timeStringObject;
}

export function getPlaceTimeString(days: DaysObject): string {
  const obj = getPlaceTimeMap(days);
  const daysKeys = Object.keys(obj) as DaysObjectKeys[];
  const timeString = daysKeys.map((day) => {
    return `${transFromDaysToKorean[day]}: ${obj[day as DaysObjectKeys]}`;
  });
  return timeString.join('\n');
}

export function getKoreanPlaceTimeArray(days: DaysObject) {
  const obj = getPlaceTimeMap(days);
  return Object.entries(obj).map(([key, value]) => {
    return `${transFromDaysToKorean[key as DaysObjectKeys]}: ${value}`;
  });
}
