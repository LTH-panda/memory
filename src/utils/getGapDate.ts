import {sub} from 'date-fns';
import formatZeroOneDay from './formatZeroOneDay';

export default function getGapDate(base: Date, time: number) {
  const atDate = new Date(time);

  const gapToNow = sub(base, {
    years: atDate.getFullYear(),
    months: atDate.getMonth() - 1,
    days: atDate.getDate() - 1,
    hours: atDate.getHours(),
    minutes: atDate.getMinutes(),
    seconds: atDate.getSeconds(),
  });

  if (gapToNow.getDate() <= 1)
    return `+${formatZeroOneDay({
      hour: gapToNow.getHours(),
      minutes: gapToNow.getMinutes(),
      seconds: gapToNow.getSeconds(),
    })}`;

  return `+${gapToNow.getDate() - 1}일`;
}
